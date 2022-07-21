import React, {useState} from 'react'
import FrenchBuyLabKitForm from './FrenchBuyLabKitForm.js'
import FrenchConfirmationPage from './FrenchConfirmationPage.js'

export const FrenchBuyLabKit = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (

        <div>
            {!isSubmitted ? <FrenchBuyLabKitForm submitForm = 
            {submitForm} /> : <FrenchConfirmationPage />}

        </div>

         
    )
}
export default FrenchBuyLabKit;