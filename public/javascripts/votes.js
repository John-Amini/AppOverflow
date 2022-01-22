document.addEventListener('DOMContentLoaded', async () => {
    const fetchAllVotes = await fetch(`${window.location.origin}/api/votes`, {
        method: 'GET'
    })
    const res = await fetchAllVotes.json()
    // console.log(res.allVotes)
    console.log(res)
    let votesAnsId = [];
    for(let i = 0; i < res.allVotes.length; i++) {
        votesAnsId.push(`${res.allVotes[i].answer_id}`)
    }

    let dict = new Object();
    let map1 = new Map();

    for (let val of votesAnsId) {
        if (map1.has(val)) {
            map1.set(val, map1.get(val) + 1)
        } else {
            map1.set(val, 1)
        }
    }

    let uniqueAnsArray = [...new Set(votesAnsId)]
    // console.log(votesAnsId)
    const voteClass = document.getElementsByClassName('vote-score');
    const answerId = voteClass[0].id.split('-')[1]

    console.log(uniqueAnsArray)
    for (let i = 0; i < uniqueAnsArray.length; i++) {
        const storeVotes = document.getElementById(`votes-${uniqueAnsArray[i]}`)
        if (storeVotes) {
            // console.log('test')
            storeVotes.innerHTML = `Votes ${map1.get(uniqueAnsArray[i])}`
        }
    }
})
