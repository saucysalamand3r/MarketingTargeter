const findBtn = document.getElementById('findBtn');
const searchTextBox = document.getElementById('searchText');
const output = document.getElementById('out');

/*
    readPerson() currently only searches by lName, and only returns the first result. Fix?
*/
function readPerson(lName){
    return JSON.parse(localStorage.getItem(lName));
}

findBtn.onclick = function(){
    output.innerHTML = '';
    const searchText = searchTextBox.value;
    if(localStorage.getItem(searchText)){
        display(readPerson(searchText));
    }
}

function display(person){
    output.innerHTML += `<div class='card'><ul class='list-group list-group-flush'><li class='list-group-item'>Name: ${person.fName} ${person.lName}</li><li class='list-group-item'>Age: ${person.age}</li><li class='list-group-item'>Gender: ${person.gender}</li><li class='list-group-item'>Phone Number: ${person.phone}</li><li class='list-group-item'>Email Address: ${person.email}</li></ul></div>`;
}