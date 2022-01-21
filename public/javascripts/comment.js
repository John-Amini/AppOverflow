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
            await fetch(`${url}questions${questionId}/comments/${commentId}`,{
                method:'delete'
            })
            let container = document.getElementById(containerId);
            container.remove();
        })
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

})
