// async function alapok

async function dataReq(){
    console.log('Data');
    return 'data'; // Kapcsos zárójel esetén, return szükséges, különben undefined értéket kapunk
}

console.log(dataReq());

dataReq().then(adat => {
    return adat.toLocaleUpperCase();
})
.then((adat) => console.log(adat));

// Adatbázis lekérdezés

async function dataRequest() {
    console.log('Async function start');

    const users = await fetch('https://dummyjson.com/users');
    const  parsedUsers = await users.json()
    console.log(parsedUsers);
}


console.log('Start code');
dataRequest();
console.log('End code');


// ----------------------------------------------------------------------

function renderTable(data){
    const tableBody = document.getElementById('tableBody');
    let HTMLContent = '';
    for(let i = 0; i < data.length; i++){
        HTMLContent += `
            <tr>
            <td>${data[i].id}</td>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td>${data[i].age}</td>
            <td>${data[i].gender}</td>
            </tr>
        `;
    }
    tableBody.innerHTML = HTMLContent;
    console.log('Table rendered');
}

const getData = async () => {
    const URL = 'https://dummyjson.com/users';
    try{
        const data = await fetch(URL);
        const parsedData = await data.json();
        renderTable(parsedData.users)
    } catch(err){
        console.log(err);
        alert('Server error');
    } finally{
        console.log('Finally');
    }
}
