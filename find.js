const findBtn = document.getElementById('findBtn');
const searchTextBox = document.getElementById('searchText');
const output = document.getElementById('out');

/*
    returns json opeject with given key
*/

function readPerson(key){
    return JSON.parse(localStorage.getItem(key));
}

/*
    listens for button click, resets output values, retrieves search term, then passes it to search()
*/

findBtn.onclick = function(){
    output.innerHTML = '';
    let searchText = searchTextBox.value;
    search(searchText);
}

/*
    outputs results of search to the user
*/

function display(person){
    output.innerHTML += `<div class='card'><ul class='list-group list-group-flush'><li class='list-group-item'>Name: ${person.fName} ${person.lName}</li><li class='list-group-item'>Age: ${person.age}</li><li class='list-group-item'>Gender: ${person.gender}</li><li class='list-group-item'>Phone Number: ${person.phone}</li><li class='list-group-item'>Email Address: ${person.email}</li><li class='list-group-item'>Primary Area of Interest: ${person.interest}</li></ul></div>`;
}

/*
    loops through all entries in database as strings and returns the ones including given search term
*/

function search(term){
    for(i=Date.now()-1555947753954;i>0;i--){
        const ithPerson = localStorage.getItem(i);
        if(ithPerson != null){
            if (ithPerson.indexOf(term) != -1) {
                display(JSON.parse(ithPerson));
            } 
        }
    }
}