document.addEventListener('DOMContentLoaded', () => {


    let items;
    const getUsersButton = document.getElementById('get-users');
    const clearUsersButton = document.getElementById('clear-users');
    const itemsTable = document.getElementById('items-table');

    getUsersButton.onclick = () => {
        getUsers();
    }

    clearUsersButton.onclick = () => {
        itemsTable.innerHTML = '';
    }

    const getUsers = () => {
        itemsTable.innerHTML = '';
        const httpReq = new XMLHttpRequest();
        const URL = 'https://dummyjson.com/users?limit=5';
        httpReq.open('GET', URL);
        httpReq.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        httpReq.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(items = JSON.parse(this.responseText));
                items = JSON.parse(this.responseText).users;
                render();
            }
        }
        httpReq.send();
    }

    // const getUsers = () => {
    //     const URL = 'https://dummyjson.com/users?limit=5';
    //     const param = {
    //         headers: { "Content-Type": "application/json; charset=UTF-8" },
    //         method: 'GET'
    //     }
    //     const request = fetch(URL, param);
    //     request
    //         .then(data => data.json())
    //         .then(dataParsed => {
    //             console.log(dataParsed);
    //             items = dataParsed.users;
    //             render();
    //             }
    //         )
    // }

    const render = () => {
        for (let i = 0; i < items.length; i++) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.innerText = `${items[i].firstName} ${items[i].lastName}`
            console.log(cell.innerText);
            row.appendChild(cell);
            itemsTable.appendChild(row);
        }
    }

})
