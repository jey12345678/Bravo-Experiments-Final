
import FrenchNavbar from './FrenchNavbar';

const Reviews = () => {
    return ( 
        <div>
            <FrenchNavbar/>
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Commentaires</p>
                </div>
                <div className = "reviewsRectangle">
                    <p className = "smallText">Soumettez un examen de nos kits de laboratoire ! Nous aimons entendre les commentaires des clients !</p>
                    <br></br>

                    <textarea className  = "reviewtextarea" id="w3review" name="w3review" rows="4" cols="50">Tapez votre avis pour les kits de laboratoire !</textarea>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className = "buttonsection">  
                        <button className = "learnmorebutton">
                            <a href="/FrenchReviewsConfirmationPage.js" className = "learnMoreLink">Soumettre</a>
                        </button>
                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default Reviews;