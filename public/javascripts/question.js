window.addEventListener("load", (event) => {
    let deleteButton = document.getElementById("question-delete")
    let confirmEditButton = document.getElementById("confirm-edit-question");
    let cancelEditButton = document.getElementById("cancel-edit-question");
    let originalContent = document.getElementById('question-content');
    let originalContentText = originalContent.textContent;
    if (deleteButton)
        deleteButton.addEventListener("click", async (e) => {
            console.log("DELETE HITTING")
            e.preventDefault();
            let questionId = findQuestionId(e)
            let url = getURL() + '/';
            console.log(questionId);
            console.log(`${url}questions/${questionId}`)
            await fetch(`${url}questions/${questionId}`, {
                method: 'delete'
            });
            window.location.href = window.location.origin;
        })

    let editButton = document.getElementById("question-edit");
    if (editButton)
        editButton.addEventListener("click", async (e) => {
            e.preventDefault();
            originalContent.setAttribute("contenteditable", "true")
            originalContent.classList.add("editable")
            toggleEdits();
        })
    if (confirmEditButton)
        confirmEditButton.addEventListener("click", async (e) => {
            let questionId = findQuestionId(e);
            let url = getURL() + '/';
            let changedContent = document.getElementById('question-content');
            let changedContentText = changedContent.textContent
            changedContent.toggleAttribute('contenteditable');
            changedContent.classList.remove("editable")
            //make the put request
            toggleEdits();
            let finalUrl = url + `questions/` + questionId;
            console.log(finalUrl)
            console.log(changedContentText);
            await fetch(`${url}questions/${questionId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: changedContentText })
            });
            // window.location.href = window.location;
        })
    if (cancelEditButton)
        cancelEditButton.addEventListener("click", async (e) => {
            originalContent.textContent = originalContentText;
            originalContent.toggleAttribute('contenteditable');
            originalContent.classList.remove("editable");
            toggleEdits();
        })



    // FIX THIS TO GO ON ALL COMMENTS

    const showCommentBtn = document.getElementsByClassName('show-comment-form')
    const commentBox = document.getElementsByClassName('answer-add-comment-box')
    let showingComment = false

    for (let i = 0; i < showCommentBtn.length; i++) {
        showCommentBtn[i].addEventListener('click', (e) => {
            e.preventDefault()
            console.log(showCommentBtn[i], commentBox[i])
            if (showingComment) {
                // change to invisible
                showingComment = !showingComment
                commentBox[i].style.visibility = 'hidden'
                showCommentBtn[i].innerText = 'Post Comment'
            }
            else {
                showingComment = !showingComment
                commentBox[i].style.visibility = 'visible'
                showCommentBtn[i].innerText = 'Cancel Comment'
            }
        })
    }

    function toggleEdits() {
        confirmEditButton.toggleAttribute("hidden");
        cancelEditButton.toggleAttribute("hidden");
        editButton.toggleAttribute("hidden");
    }
    function findQuestionId(e) {
        var url = window.location.href.split('/');
        return url[url.length - 1]
    }
    function getURL() {
        var url = window.location;
        return url.origin
    }
})
