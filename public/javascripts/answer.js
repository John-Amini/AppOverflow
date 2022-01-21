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
        addEventListenerCancel(e,answerId,textContentOriginal,content);
        addEventListenerConfirm(e,answerId,content);
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
        var url = window.location.href.split('/');
        return url[url.length-1]
    }
    function toggleEdits(answerId){
        document.getElementById(`${answerId}-edit`).toggleAttribute("hidden");
        document.getElementById(`cancel-edit-${answerId}`).toggleAttribute("hidden");
        document.getElementById(`confirm-edit-${answerId}`).toggleAttribute("hidden");
    }

    function toggleClassAndEditable(content){
        content.toggleAttribute("contenteditable")
        content.classList.toggle("editable")
    }

    function addEventListenerCancel(originalEvent,answerId,originalText,originalContent){
        let currCancelEditButton = document.getElementById(`cancel-edit-${answerId}`);
        if(currCancelEditButton && !currCancelEditButton.hasAttribute('listenerOnClick'))
        currCancelEditButton.addEventListener('click',async(e)=>{
            originalContent.textContent = originalText;
            toggleClassAndEditable(originalContent);
            toggleEdits(answerId);
            //for some reason it wont toggle again so just reloading page to avoid this
            //window.location.href = window.location
        })
        currCancelEditButton.setAttribute('listenerOnClick','true');
    }
    function addEventListenerConfirm(originalEvent,answerId,content){
        console.log("CONFIRM LISTENER FUNCTION")
        let currConfirmEditButton = document.getElementById(`confirm-edit-${answerId}`)
        if(currConfirmEditButton && !currConfirmEditButton.hasAttribute('listenerOnClick'))
            currConfirmEditButton.addEventListener(`click`, async(e) => {
                let url = getURL() + '/'
                let newText = content.textContent;
                let questionId = findQuestionId(e)
                toggleEdits(answerId);
                toggleClassAndEditable(content)
                currConfirmEditButton.setAttribute('listenerOnClick', 'true');
                await fetch(`${url}questions/${questionId}/answers/${answerId}`,{
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({content:newText})
                })
            })
    }
    function getURL(){
        var url = window.location;
        return url.origin
    }
})
