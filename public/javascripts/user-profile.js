window.addEventListener("load", async (event) => {
    let peerBox = document.getElementsByClassName('profile-peers-list')[0]
    let url = getURL() + '/';

    const res = await fetch(`${url}api/users`)
    const { allUsers } = await res.json()

    const usersArr = allUsers.map(user => `<li class="profile-peers-list-item">
    <a href="${url}users/${user.id}" class='profile-table-link'><p>${user.username}</p></a>
    <p> <i class="fas fa-graduation-cap" id="profile-grad-icon"></i> ${user.Answers.length}</p>
    <p> <i class="fas fa-question" id="profile-question-icon"></i> ${user.Questions.length}</p>
    </li>`)
    console.log(allUsers[0])
    const peerStr = usersArr.join('')
    peerBox.innerHTML = peerStr;

    const listItems = document.getElementsByClassName('profile-table-item')

    for (let i = 0; i < listItems.length; i++) {
        if (i % 2 === 0) {
            listItems[i].classList.add('profile-grey')
        }
    }


    function getURL() {
        var url = window.location;
        return url.origin
    }
})