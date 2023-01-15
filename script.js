function clearErrors(){
    document.getElementById('errors-content').innerHTML ="";

    document.getElementById('errors').classList.remove('d-block');

    document.getElementById('errors').classList.add('d-none');
}

function validateForm(){

    clearErrors();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var country = document.getElementById('country').value;
    var subject = document.getElementById('subject').value;

    var errors = "";

    if(veryShort(fname) == true){
        errors += "<li>The first name is too short</li>";
    }
    if(veryShort(lname)){
        errors += "<li>The last name is too short</li>";
    }

    if (isTooShort(subject)){
        errors += "<li>Message is too short, please provide more details.</li>";
    }

    if (errors != ""){
        document.getElementById('errors-content').innerHTML =
        "<ul class='errors-list'>"+errors+"</ul>";

        document.getElementById('errors').classList.remove('d-none');

        document.getElementById('errors').classList.add('d-block');

        return false;
    }
    else {
        return true;
    }

}

function isEmpty(field){
    if(field == ""){
        return true;
    }
    else{
        return false;
    }
}

function isTooShort(field){
    if(field.length < 20){
        return true;
    }
    else {
        return false;
    }
}

function veryShort(field){
    if(field.length < 2){
        return true;
    }
    else {
        return false;
    }
}
