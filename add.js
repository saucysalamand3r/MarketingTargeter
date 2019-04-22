/*
    imports elements from the page as variables
*/

const inp = document.getElementById('inp');
const inpFName = document.getElementById('inpFName');
const inpLName = document.getElementById('inpLName');
const inpAge = document.getElementById('inpAge');
const inpGender = document.getElementById('inpGender');
const inpPhone = document.getElementById('inpPhone');
const inpEmail = document.getElementById('inpEmail');
const inpInterest = document.getElementById('inpInterest');
const out = document.getElementById('out');

/*
    writes a person entry to the localStorage database
*/

function writePerson(fName, lName, age, gender, phone, email, interest){
    let person = {
        fName: fName,
        lName: lName,
        age: age,
        gender: gender,
        phone: phone,
        email: email,
        interest: interest,
    }
    localStorage.setItem(Date.now()-1555947753954, JSON.stringify(person));
}


/*
    retrieves values from page, validates them, and adds them to the database via writePerson()
*/

inp.onclick = function(){
    const fName = inpFName.value;
    const lName = inpLName.value;
    const age = inpAge.value;
    const gender = inpGender.value;
    const phone = inpPhone.value;
    const email = inpEmail.value;
    const interest = inpInterest.value;
    if(fName != "" && lName != "" && age != "" && gender != "" && phone != "" && email != "" && email.indexOf("@") != -1 && email.indexOf("@") < email.length-1 && email.indexOf("@") != 0){
        writePerson(fName, lName, age, gender, phone, email, interest);
    }
}