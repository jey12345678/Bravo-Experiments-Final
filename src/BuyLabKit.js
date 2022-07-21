import React, {useState} from 'react'
import BuyLabKitForm from './BuyLabKitForm.js'
import ConfirmationPage from './ConfirmationPage.js'

export const BuyLabKit = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (

        <div>
            {!isSubmitted ? <BuyLabKitForm submitForm = 
            {submitForm} /> : <ConfirmationPage />}

        </div>

         
    )
}
export default BuyLabKit;
