import checkmark from './Images/checkmark.png';
import Navbar from './NavBar';
const ReviewsConfirmationPage = () => {
    return (
        <div>
            <Navbar/>
        
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Reviews</p>

                </div>
                <div className = "mediumRectangle">
                    <img className = "confirmationsign" src=  {checkmark} alt="Checkmark Picture"/>
                </div>
                <div className = "confirmationbox">
                    <p className = "hometext">Thank You!</p>
                    <p className = "smallText">Thanks for giving us a review on our products!</p>
                </div>

            </div>
        </div>


      );
}
 
export default ReviewsConfirmationPage;