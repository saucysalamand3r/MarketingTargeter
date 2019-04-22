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
    writePerson() currently uses lName as the unique ID, so people with the same last name overwrite each other. Fix without breaking searching?
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
    localStorage.setItem(Date.now()-1555346228071, JSON.stringify(person));
}

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