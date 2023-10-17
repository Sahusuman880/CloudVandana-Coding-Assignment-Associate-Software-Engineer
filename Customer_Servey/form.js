const form = document.getElementById("surveyForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function (e) {
    const email = document.getElementById('myemail');
    const number = document.getElementById('mynumber');
    let email1 = 0;
    let number1 = 0;
    // function ValidateEmail(mail) 
    // {
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
    //     {
    //        return (true)
    //     }
    //     else{
    //         return (false)
    //     }


    // }
    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!inputText.value.match(mailformat)) {
            alert("Enter a valid email");
            email1=1;
        }
    }

     ValidateEmail(document.form1.myemail);
    if ( email.innerHTML.length != 0) {
        alert("Enter a valid email");
        email1 = 1;

    }
    if (number.value.length != 10 && number.value.length != 0) {
        alert("Please enter Valid number");
        number1 = 1;
    }
    e.preventDefault();
    if (email1 == 0 && number1 == 0) {
        displayPopup();
    }
    // displayPopup();
});

function displayPopup() {
    const popupFirstName = document.getElementById("popupFirstName");
    const popupLastName = document.getElementById("popupLastName");
    const popupDob = document.getElementById("popupDob");
    const popupCountry = document.getElementById("popupCountry");
    const popupGender = document.getElementById("popupGender");
    const popupProfession = document.getElementById("popupProfession");
    const popupEmail = document.getElementById("popupEmail");
    const popupMobile = document.getElementById("popupMobile");

    popupFirstName.innerText = form.myfirstname.value;
    popupLastName.innerText = form.mysecondname.value;
    popupDob.innerText = form.mybirth.value;
    popupCountry.innerText = form.mycountry.value;
    popupGender.innerText = getSelectedGenders();
    popupProfession.innerText = form.myProfession.value;
    popupEmail.innerText = form.myemail.value;
    popupMobile.innerText = form.mynumber.value;

    popup.style.display = "block";
}

function getSelectedGenders() {
    const selectedGenders = document.querySelectorAll('input[name="gender"]:checked');
    const genderArray = Array.from(selectedGenders).map((input) => input.value);
    return genderArray.join(", ");
}

function closePopup() {
    window.location = './form.html';
    popup.style.display = "none";

}

// document.getElementById("closePopup").addEventListener('click',()=>{
//     form.reset();
//     popup.style.display = "none";
// })