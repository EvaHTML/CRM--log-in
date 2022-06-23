function createForm(){
    let adminForm = '';
    adminForm += ' <article class="registerForm"><form> <label for="fname"> Full name: </label> <input type="text" id="fname" name="fname" value="">\
                         <label for="fage"> Age: </label> <input type="number" id="fage" name="fage" value="">\
                         <input type="submit" value="Submit"></input>\
                         </form></article>'
    return adminForm;
}

function createFormToHTML(){
    let htmlForm = createForm();
    document.querySelector("section").innerHTML = htmlForm;  
}

function pushRegisterDataToDB(){
    
}