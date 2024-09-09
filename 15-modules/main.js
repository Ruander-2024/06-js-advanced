document.addEventListener('DOMContentLoaded', () => {


    let usersList;

    const getUsersButton = document.getElementById('get-users');
    const clearUsersButton = document.getElementById('clear-users');
    const usersTableBody = document.getElementById('users-table-body');

    getUsersButton.onclick = () => {
        removeAllChildElements(usersTableBody);
        getUsers();
    }

    clearUsersButton.onclick = () => {
        removeAllChildElements(usersTableBody);
        usersList = [];
    }


    const getUsers = () => {
        const URL = 'https://dummyjson.com/users?limit=5';
        const param = {
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            method: 'GET'
        }
        fetch(URL, param)
            .then(data => data.json())
            .then(dataParsed => {
                usersList = dataParsed.users;
                renderTable();
                }
            )
            .catch(err => console.error(err));
    }

    const renderTable = () => {
        for (const user of usersList) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.innerText = `${user.firstName} ${user.lastName}`
            row.appendChild(cell);
            usersTableBody.appendChild(row);
        }
    }

    const removeAllChildElements = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        };
    }
})
