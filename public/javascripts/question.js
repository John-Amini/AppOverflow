window.addEventListener("load", (event)=>{
    let deleteButton = document.getElementById("question-delete")
    let confirmEditButton = document.getElementById("confirm-edit");
    let cancelEditButton = document.getElementById("cancel-edit");
    let originalContent = document.getElementById('question-content');
    let originalContentText = originalContent.textContent;
        deleteButton.addEventListener("click",async (e)=> {
            e.preventDefault();
            let questionId = findQuestionId(e)
            let url = getURL() + '/';
            await fetch(`${url}questions/${questionId}`,{
                method: 'delete'
            });
            window.location.href = window.location.origin;
        })

    let editButton = document.getElementById("question-edit");
        editButton.addEventListener("click",async (e)=> {
            e.preventDefault();
            originalContent.setAttribute("contenteditable","true")
            originalContent.classList.add("editable")
            toggleEdits();
        })

        confirmEditButton.addEventListener("click",async (e) =>{
            let questionId = findQuestionId(e);
            let url = getURL() + '/';
            let changedContent = document.getElementById('question-content');
            let changedContentText = changedContent.textContent
            changedContent.toggleAttribute('contenteditable');
            changedContent.classList.remove("editable")
            //make the put request
            toggleEdits();
            let finalUrl = url + `questions/`+questionId;
            console.log(finalUrl)
            console.log(changedContentText);
            await fetch(`${url}questions/${questionId}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({content:changedContentText})
            });
            window.location.href = window.location;
        })

        cancelEditButton.addEventListener("click", async (e) =>{
            originalContent.textContent = originalContentText;
            originalContent.toggleAttribute('contenteditable');
            originalContent.classList.remove("editable");
            toggleEdits();
        })

        function toggleEdits(){
            confirmEditButton.toggleAttribute("hidden");
            cancelEditButton.toggleAttribute("hidden");
            editButton.toggleAttribute("hidden");
        }
        function findQuestionId(e){
            let containerId = e.path[1].id;
            let arr = containerId.split("-");
            let questionId = arr[arr.length-1];
            return questionId;
        }
        function getURL(){
            var url = window.location;
            return url.origin
        }
})