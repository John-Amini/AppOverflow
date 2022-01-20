window.addEventListener("load", (event)=>{
    let arrOfButtons = document.getElementsByClassName("delete-btn");
    console.log(arrOfButtons);
    for(let i = 0 ; i < arrOfButtons.length; i++){
        arrOfButtons[i].addEventListener("click",async (e)=> {
            e.preventDefault();
            let containerId = e.path[1].id;
            let arr = containerId.split("-");
            let questionId = arr[arr.length-1];
            let url = e.path[5].URL
            await fetch(`${url}questions/${questionId}`,{
                method: 'delete'
            });
            let container = document.getElementById(containerId);
            container.remove();
        })
    }
})
