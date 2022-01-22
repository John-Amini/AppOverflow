window.addEventListener("load", (event)=>{
    let arrOfDeleteButtons = document.getElementsByClassName("delete-btn-comment")
    let arrOfEditButtons = document.getElementsByClassName("edit-btn-comment")
    for(const currDeleteButton of arrOfDeleteButtons){
        currDeleteButton.addEventListener("click",async(e)=>{
            e.preventDefault();
            let commentId = findCommentId(e)
            let questionId = findQuestionId(e)
            let containerId = `comment-container-${commentId}`
            let url = getURL() + '/'
            await fetch(`${url}questions/${questionId}/comments/${commentId}`,{
                method:'delete'
            })
            let container = document.getElementById(containerId);
            container.remove();
        })
    }

    for(const currEditButton of arrOfEditButtons){
        currEditButton.addEventListener("click", async (e) => {
            e.preventDefault()
            let commentId = findCommentId(e)
            let questionId = findQuestionId(e)
            let url = getURL() + '/';
            let content = document.getElementById(`comment-content-${commentId}`)
            let textContentOriginal = content.textContent;
            addEventListenerCancel(e,commentId,textContentOriginal,content);
            addEventListenerConfirm(e,commentId,content);
            addListenerAttribute(commentId);
            toggleEdits(commentId);
            toggleClassAndEditable(content);

        })
    }




    function addEventListenerCancel(e,commentId,textContentOriginal,content){
        let currCancelEditButton = document.getElementById(`cancel-edit-comment-${commentId}`)
        if(currCancelEditButton && !currCancelEditButton.hasAttribute('listenerOnClick')){
            currCancelEditButton.addEventListener('click',async(e)=>{
                content.textContent = textContentOriginal;
                toggleClassAndEditable(content);
                toggleEdits(commentId);
            })
        }

    }

    function addEventListenerConfirm(originalEvent,commentId,content){
        let currConfirmEditButton = document.getElementById(`confirm-edit-comment-${commentId}`)
        if(currConfirmEditButton && !currConfirmEditButton.hasAttribute('listenerOnClick')){
            currConfirmEditButton.addEventListener(`click`,async (e) => {
                let url = getURL() + '/';
                let newText = content.textContent;
                let questionId = findQuestionId(e)
                toggleEdits(commentId);
                toggleClassAndEditable(content);

                await fetch(`${url}questions/${questionId}/comments/${commentId}`, {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({content:newText})
                })
                window.location.href = window.location;
            })
        }
    }





    function addListenerAttribute(commentId){
        let currConfirmEditButton = document.getElementById(`confirm-edit-comment-${commentId}`)
        let currCancelEditButton = document.getElementById(`cancel-edit-comment-${commentId}`)
        currConfirmEditButton.setAttribute('listenerOnClick', 'true');
        currCancelEditButton.setAttribute('listenerOnClick', 'true')
    }



    function findCommentId(e){
        console.log(e.target.id);
        let arr = e.target.id.split('-');
        let questionId;
        for(let curr of arr){
            if(!isNaN(curr)){
                questionId = curr;
            }
        }
        console.log(questionId)
        return questionId;
    }

    function findQuestionId(e){
        var url = window.location.href.split('/');
        return url[url.length-1]
    }

    function getURL(){
        var url = window.location;
        return url.origin
    }

    function toggleClassAndEditable(content){
        content.toggleAttribute("contenteditable")
        content.classList.toggle("editable")
    }

    function toggleEdits(commentId){
        document.getElementById(`${commentId}-edit-comment`).toggleAttribute("hidden");
        document.getElementById(`cancel-edit-comment-${commentId}`).toggleAttribute("hidden");
        document.getElementById(`confirm-edit-comment-${commentId}`).toggleAttribute("hidden");
    }


})
