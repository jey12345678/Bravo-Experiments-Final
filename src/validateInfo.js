export default function validateInfo(values){

    let errors = {}

    //If nothing is typed in username.

    if(!values.firstName.trim()){
        errors.firstName = "First Name is required!"
    }
    if(!values.lastName.trim()){
        errors.lastName = "Last Name is required!"
    }
    if(!values.email){
        errors.email = "Email is required!"
    }
    else if(!values.email.includes("@")){
        errors.email = "Email address is invalid"
    }
    if(!values.phone){
        errors.phone = "Phone # is required!"
    }
    else if(!onlyNumbers(values.phone.trim())){
        errors.phone = "Phone # must contain only digits! There cannot be any letters or spaces in between the numbers"
    }
    else if(onlyNumbers(values.phone.trim()) & values.phone.trim().length != 10){
        errors.phone = "Phone # must contain only 10 digits! There cannot be any letters or spaces in between the numbers."

    }

    if(!values.address){
        errors.address = "Address is missing!"
    }

    if(!values.creditCardNumber){
        errors.creditCardNumber = "Credit Card Number is missing!"
    }
    else if(!onlyNumbers(values.creditCardNumber.trim())){
        errors.cvv = "Credit Card must only contain numbers!"
    }
    if(!values.cvv){
        errors.cvv = "CVV is missing!"
    }
    else if(!onlyNumbers(values.cvv.trim())){
        errors.cvv = "CVV must only contain numbers!"
    }
    else if(onlyNumbers(values.cvv.trim()) & values.cvv.trim().length !=3){
        errors.cvv = "CVV must contain 3 digits only!"
    }

    return errors;
}
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}