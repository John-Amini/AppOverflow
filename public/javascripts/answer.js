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
        let content = document.getElementById(`content-${questionId}`);
        let textContentOriginal = content.textContent;
        addEventListenerCancel(e,questionId,textContentOriginal,content);
        addEventListenerConfirm(e,questionId,content);
        toggleClassAndEditable(content);
        toggleEdits(questionId);
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
})
