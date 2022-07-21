import checkmark from './Images/checkmark.png';
import FrenchNavbar from './FrenchNavbar';
const FrenchReviewsConfirmationPage = () => {
    return (
        <div>
            <FrenchNavbar/>
        
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Commentaires</p>

                </div>
                <div className = "mediumRectangle">
                    <img className = "confirmationsign" src=  {checkmark} alt="Checkmark Picture"/>
                </div>
                <div className = "confirmationbox">
                    <p className = "hometext">Merci!</p>
                    <p className = "smallText">Merci de nous donner un avis sur nos produits!</p>
                </div>

            </div>
        </div>


      );
}
 
export default FrenchReviewsConfirmationPage;