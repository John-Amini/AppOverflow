window.addEventListener("load", (event)=>{
    let arrOfDeleteButtons = document.getElementsByClassName("delete-btn-answer");
    let arrOfEditButtons = document.getElementsByClassName("edit-btn-answer");

    for(let i = 0 ; i < arrOfDeleteButtons.length; i++){
        arrOfDeleteButtons[i].addEventListener("click",async (e)=> {
            let answerId = findAnswerId(e);
            let questionId = findQuestionId(e);
            let containerId = `answer-container-${answerId}`
            let url = window.location.origin+ '/'
            await fetch(`${url}questions/${questionId}/answers/${answerId}`,{
                method: 'delete'
            });
            let container = document.getElementById(containerId);
            container.remove();
        })
    }
    for(const currEditButton of arrOfEditButtons){
        currEditButton.addEventListener("click",async(e)=>{
        let answerId = findAnswerId(e);
        let questionId = findQuestionId(e);
        let content = document.getElementById(`answer-content-${answerId}`);
        let textContentOriginal = content.textContent;
        console.log(textContentOriginal);
        addEventListenerCancel(e,answerId,textContentOriginal,content);
        addEventListenerConfirm(e,answerId,content);
        addListenerAttribute(answerId);
        toggleClassAndEditable(content);
        toggleEdits(answerId);
        })
    }
    function findAnswerId(e){
        let arr = e.target.id.split('-');
        let answerId;
        for(let curr of arr){
            if(!isNaN(curr)){
                answerId = curr;
            }
        }
        return answerId;
    }
    function findQuestionId(e){
        let url = window.location.href.split('?');
        url = url[0].split('/')
        return url[url.length-1]
    }
    function toggleEdits(answerId){
        document.getElementById(`${answerId}-edit-answer`).toggleAttribute("hidden");
        document.getElementById(`cancel-edit-answer-${answerId}`).toggleAttribute("hidden");
        document.getElementById(`confirm-edit-answer-${answerId}`).toggleAttribute("hidden");
    }

    function toggleClassAndEditable(content){
        content.toggleAttribute("contenteditable")
        content.classList.toggle("editable")
    }

    function addListenerAttribute(answerId){
        let currConfirmEditButton = document.getElementById(`confirm-edit-answer-${answerId}`)
        let currCancelEditButton = document.getElementById(`cancel-edit-answer-${answerId}`)
        currConfirmEditButton.setAttribute('listenerOnClick', 'true');
        currCancelEditButton.setAttribute('listenerOnClick', 'true')
    }

    function addEventListenerCancel(originalEvent,answerId,originaltextchange,originalContent){
        let currCancelEditButton = document.getElementById(`cancel-edit-answer-${answerId}`);
        let originalText = originaltextchange;
        if(currCancelEditButton && !currCancelEditButton.hasAttribute('listenerOnClick'))
            currCancelEditButton.addEventListener('click',async(e)=>{
            console.log(originalContent);
            originalContent.textContent = originalText;
            toggleClassAndEditable(originalContent);
            toggleEdits(answerId);
        })

    }

    function addEventListenerConfirm(originalEvent,answerId,content){
        console.log("CONFIRM LISTENER FUNCTION")
        let currConfirmEditButton = document.getElementById(`confirm-edit-answer-${answerId}`)
        if(currConfirmEditButton && !currConfirmEditButton.hasAttribute('listenerOnClick'))
            currConfirmEditButton.addEventListener(`click`, async(e) => {
                let url = getURL() + '/'
                let newText = content.textContent;
                let questionId = findQuestionId(e)
                toggleEdits(answerId);
                toggleClassAndEditable(content)
                await fetch(`${url}questions/${questionId}/answers/${answerId}`,{
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({content:newText})
                })
                window.location.href = `${url}questions/${questionId}`

            })
    }
    function getURL(){
        var url = window.location;
        return url.origin
    }
})
