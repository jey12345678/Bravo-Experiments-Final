import {useState,useEffect} from 'react';
import useForm from './useForm.js';
import validate from './validateInfo.js';
import Navbar from './NavBar.js';


const  BuyLabKitForm = ({submitForm}) => {


    const{handleSubmit,values,handleChange,errors, handleAddition} = useForm(submitForm,validate);

    return (
        <div>
            <Navbar/>
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Buy Lab Kit</p>
                </div>
                <form onSubmit = {handleSubmit} className = "bigRectangle">
                    <p className = "lefttext">Step 1: Enter your Personal Information</p>

                    <p className = "lefttext">First Name:</p>
                    <input id = 'firstName' name = 'firstName' type="text" class="textbox" htmlFor = 'firstName' value = {values.firstName} onChange = {handleChange}></input>
                    {errors.firstName && <p className = "errorMessage">{errors.firstName}</p>}

                    <p className = "lefttext">Last Name:</p>
                    <input id = 'lastName' name = 'lastName' type="text" htmlFor = 'lastName' value = {values.lastName}  onChange = {handleChange} class="textbox"></input>
                    {errors.lastName && <p className = "errorMessage">{errors.lastName}</p>}
                    
                    <p className = "lefttext">Email:</p>
                    <input id = 'email' name = 'email' type="text" htmlFor = 'email' value = {values.email}  onChange = {handleChange} class="textbox"></input>
                    {errors.email && <p className = "errorMessage">{errors.email}</p>}

                    <p className = "lefttext">Phone #:</p>
                    <input  id = 'phone' name = 'phone' type="text" htmlFor = 'phone' value = {values.phone}  onChange = {handleChange} class="textbox"></input>
                    {errors.phone && <p className = "errorMessage">{errors.phone}</p>}

                    <p className = "lefttext">Address:</p>
                    <input id = 'address' name = 'address' type="text" htmlFor = 'address' value = {values.address}  onChange = {handleChange}  class="textbox"></input>
                    {errors.address && <p className = "errorMessage">{errors.address}</p>}

                    <p className = "lefttext">Step 2: Enter your Credit Card Information</p>

                    <p className = "lefttext">Credit Card Number:</p>
                    <input id = 'creditCardNumber' name = 'creditCardNumber' type="text" htmlFor = 'creditCardNumber' value = {values.creditCardNumber}  onChange = {handleChange} class="textbox"></input>
                    {errors.creditCardNumber && <p className = "errorMessage">{errors.creditCardNumber}</p>}

                    <p className = "lefttext">CVV:</p>
                    <input id = 'cvv' name = 'cvv' type="text" htmlFor = 'cvv' value = {values.cvv}  onChange = {handleChange} class="textbox"></input>
                    {errors.cvv && <p className = "errorMessage">{errors.cvv}</p>}

                    <p className = "lefttext">Step 3: Select Lab Kit(s):</p>

                    <div class = "checkbox">
                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "lavaLamp" htmlFor = 'lavaLamp' name = 'lavaLamp' onChange = {handleChange}></input>
                            <label className = "labeltext" >Lava Lamp Experiment Lab Kit: $25</label>

                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "volcano" />
                            <label className = "labeltext" for="2">Volcano Eruption Experiment Lab Kit: $50</label>

                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "explosiveFoam" />
                            <label className = "labeltext" for="3">Explosive Foam Experiment Lab Kit: $20</label>
                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "snowGlobe" />
                            <label className = "labeltext" for="4">Snow Globe Experiment Lab Kit: $75</label>
                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "crystalTree" />
                            <label className = "labeltext" for="5">Crystal Tree Experiment Lab Kit: $10</label>
                        </div>

                        <br></br>

                        <div className = "option">
                            <input className = "checkboxparameters" type="number" min="0" id = "ghostBubbles" />
                            <label className = "labeltext" for="6">Ghost Bubbles Experiment Lab Kit: $90</label>
                        </div>   
                        
                    </div>

                    <div className = "buttonsection">
                            <button className = "learnmorebutton" type = "submit">
                                <a className = "learnMoreLink">Submit</a>
                            </button>
                    </div>
                </form>

            </div>
        </div>  

        
    );
    
}

    

 
export default  BuyLabKitForm;