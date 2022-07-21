
import Navbar from './NavBar';

const Reviews = () => {
    return ( 
        <div>
            <Navbar/>
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Reviews</p>
                </div>
                <div className = "reviewsRectangle">
                    <p className = "smallText">Submit A Review of Our Lab Kits! We Love Hearing Feedback From Customers!</p>
                    <br></br>

                    <textarea className  = "reviewtextarea" id="w3review" name="w3review" rows="4" cols="50">Type in Your Review for the lab kits!</textarea>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className = "buttonsection">  
                        <button className = "learnmorebutton">
                            <a href="/ReviewsConfirmationPage.js" className = "learnMoreLink">Submit</a>
                        </button>
                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default Reviews;