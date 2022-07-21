import {useState,useEffect} from 'react';
import useForm from './useForm.js';
import validate from './frenchvalidateInfo.js';
import FrenchNavbar from './FrenchNavbar.js';


const  FrenchBuyLabKitForm = ({submitForm}) => {


    const{handleSubmit,values,handleChange,errors, handleAddition} = useForm(submitForm,validate);

    return (
        <div>
            <FrenchNavbar/>
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Acheter un kit de laboratoire</p>
                </div>
                <form onSubmit = {handleSubmit} className = "bigRectangle">
                    <p className = "lefttext">Étape 1 : Saisissez vos informations personnelles</p>

                    <p className = "lefttext">Prénom:</p>
                    <input id = 'firstName' name = 'firstName' type="text" class="textbox" htmlFor = 'firstName' value = {values.firstName} onChange = {handleChange}></input>
                    {errors.firstName && <p className = "errorMessage">{errors.firstName}</p>}

                    <p className = "lefttext">Nom de famille:</p>
                    <input id = 'lastName' name = 'lastName' type="text" htmlFor = 'lastName' value = {values.lastName}  onChange = {handleChange} class="textbox"></input>
                    {errors.lastName && <p className = "errorMessage">{errors.lastName}</p>}
                    
                    <p className = "lefttext">E-mail:</p>
                    <input id = 'email' name = 'email' type="text" htmlFor = 'email' value = {values.email}  onChange = {handleChange} class="textbox"></input>
                    {errors.email && <p className = "errorMessage">{errors.email}</p>}

                    <p className = "lefttext">Téléphoner #:</p>
                    <input  id = 'phone' name = 'phone' type="text" htmlFor = 'phone' value = {values.phone}  onChange = {handleChange} class="textbox"></input>
                    {errors.phone && <p className = "errorMessage">{errors.phone}</p>}

                    <p className = "lefttext">Adresse:</p>
                    <input id = 'address' name = 'address' type="text" htmlFor = 'address' value = {values.address}  onChange = {handleChange}  class="textbox"></input>
                    {errors.address && <p className = "errorMessage">{errors.address}</p>}

                    <p className = "lefttext">Étape 2 : Saisissez les informations de votre carte de crédit</p>

                    <p className = "lefttext">Numéro de Carte de Crédit::</p>
                    <input id = 'creditCardNumber' name = 'creditCardNumber' type="text" htmlFor = 'creditCardNumber' value = {values.creditCardNumber}  onChange = {handleChange} class="textbox"></input>
                    {errors.creditCardNumber && <p className = "errorMessage">{errors.creditCardNumber}</p>}

                    <p className = "lefttext">CVV:</p>
                    <input id = 'cvv' name = 'cvv' type="text" htmlFor = 'cvv' value = {values.cvv}  onChange = {handleChange} class="textbox"></input>
                    {errors.cvv && <p className = "errorMessage">{errors.cvv}</p>}

                    <p className = "lefttext">Étape 3 : Sélectionnez le(s) kit(s) de laboratoire :</p>

                    <div class = "checkbox">
                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "lavaLamp" htmlFor = 'lavaLamp' name = 'lavaLamp' onChange = {handleChange}></input>
                            <label className = "labeltext" >Kit de laboratoire d'expérimentation de lampe à lave: 25 $</label>

                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "volcano" />
                            <label className = "labeltext" for="2">Kit de laboratoire d'expérimentation d'éruption volcanique : 50 $</label>

                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "explosiveFoam" />
                            <label className = "labeltext" for="3">Kit de laboratoire d'expérimentation de mousse explosive: 20 $</label>
                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "snowGlobe" />
                            <label className = "labeltext" for="4">Kit de laboratoire d'expérimentation de boule à neige : 75 $</label>
                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "crystalTree" />
                            <label className = "labeltext" for="5">Kit de laboratoire expérimental Crystal Tree: 10 $</label>
                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "ghostBubbles" />
                            <label className = "labeltext" for="6">Kit de laboratoire expérimental Ghost Bubbles: 90 $</label>
                        </div>   
                        
                    </div>

                    <div className = "buttonsection">
                            <button className = "learnmorebutton" type = "submit">
                                <a className = "learnMoreLink">Soumettre</a>
                            </button>
                    </div>
                </form>

            </div>
        </div>  

        
    );
    
}

    

 
export default  FrenchBuyLabKitForm;