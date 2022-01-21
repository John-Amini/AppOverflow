window.addEventListener("load", async (event) => {
    let peerBox = document.getElementsByClassName('profile-peers-list')[0]
    let url = getURL() + '/';

    const res = await fetch(`${url}api/users`)
    const { allUsers } = await res.json()

    const usersArr = allUsers.map(user => `<li>
    <p>${user.username}</p>
    <p>Answers: ${user.Answers.length}</p>
    </li>`)
    console.log(allUsers[0])
    const peerStr = usersArr.join('')
    peerBox.innerHTML = peerStr;


    function getURL() {
        var url = window.location;
        return url.origin
    }
})