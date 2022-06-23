function createForm(){
    let adminForm = '';
    adminForm +=  '<article class="userSignUpFormBox">'
     adminForm += '<h3>Sign Up</h3><form>'                                                                                                           
     adminForm += '<span class="userSignUpLabel"><label for="fName"></label><input type="text" id="fname" placeholder="First name"></span>'   
     adminForm += '<span class="userSignUpLabel"><label for="fCompanyName"></label><input type="text" id="fCompanyName" placeholder="Company name"></span>'
     adminForm += '<span class="userSignUpLabel"><label for="fEmail"></label><input type="email" id="fEmail" placeholder="E-mail"></span>'
     adminForm += '<span class="userSignUpLabel"><label for="fTelephone"></label><input type="text" id="fTelephone" placeholder="Telephone"></span>'
     adminForm += '<span class="userSignUpLabel"><label for="fUserNamd"></label><input type="text" id="fUserName" placeholder="User name"></span>'
     adminForm += '<span class="userSignUpLabel"><label for="fPassword"></label><input type="password" id="fPassword" placeholder="Password"></span>'
     adminForm += '<span class="userSignUpLabel submitButton"><input type="submit" value="Submit"></input></span>'
     adminForm += '</form></article>'

    return adminForm;
}

function createFormToHTML(){
    let htmlForm = createForm();
    document.querySelector("section").innerHTML = "";
    document.querySelector("content").innerHTML=htmlForm;
}

document.querySelector(".signUpButton").addEventListener("click", createFormToHTML() )