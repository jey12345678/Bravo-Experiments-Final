export default function validateInfo(values){

    let errors = {}

    //If nothing is typed in username.

    if(!values.firstName.trim()){
        errors.firstName = "Le prénom est requis!"
    }
    if(!values.lastName.trim()){
        errors.lastName = "Le nom de famille est requis !"
    }
    if(!values.email){
        errors.email = "L'e-mail est requis !"
    }
    else if(!values.email.includes("@")){
        errors.email = "Adresse email invalide"
    }
    if(!values.phone){
        errors.phone = "Le numéro de téléphone est requis !"
    }
    else if(!onlyNumbers(values.phone.trim())){
        errors.phone = "Le numéro de téléphone ne doit contenir que des chiffres ! Il ne peut pas y avoir de lettres ou d'espaces entre les chiffres"
    }
    else if(onlyNumbers(values.phone.trim()) & values.phone.trim().length != 10){
        errors.phone = "Le numéro de téléphone ne doit contenir que 10 chiffres ! Il ne peut pas y avoir de lettres ou d'espaces entre les chiffres."

    }

    if(!values.address){
        errors.address = "L'adresse est manquante !"
    }

    if(!values.creditCardNumber){
        errors.creditCardNumber = "Le numéro de carte de crédit est manquant !"
    }
    else if(!onlyNumbers(values.creditCardNumber.trim())){
        errors.cvv = "La carte de crédit ne doit contenir que des chiffres !"
    }
    if(!values.cvv){
        errors.cvv = "Le CVV est manquant !"
    }
    else if(!onlyNumbers(values.cvv.trim())){
        errors.cvv = "Le CVV ne doit contenir que des chiffres !"
    }
    else if(onlyNumbers(values.cvv.trim()) & values.cvv.trim().length !=3){
        errors.cvv = "Le CVV ne doit contenir que 3 chiffres !"
    }

    return errors;
}
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}