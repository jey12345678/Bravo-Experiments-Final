import checkmark from './Images/checkmark.png';
import FrenchNavbar from './FrenchNavbar';

const FrenchConfirmationPage = () => {
    return (
        <div>
            <FrenchNavbar/>
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Acheter un kit de laboratoire</p>

                </div>
                <div className = "mediumRectangle">
                    <img className = "confirmationsign" src=  {checkmark} alt="Checkmark Picture"/>
                </div>
                <div className = "confirmationbox">
                    <p className = "hometext">Merci!</p>
                    <p className = "smallText">Merci d'avoir acheté un kit de laboratoire ou des kits chez nous ! Nous nous assurerons de rester en contact pour vous informer de l'arrivée de votre colis !</p>
                </div>
            </div>
        </div>
    );
}
 
export default FrenchConfirmationPage;