import Navbar from './NavBar';

const FAQ = () => {
    return (
        <div>
            <Navbar/>
        
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">FAQ</p>

                </div>

                <div className = "FAQRectangle">
                    
                            <p class = "smallText">1. How do you get to the About Us Page?</p>
                            <p class = "FAQText">To get to the About Us page, you simply have to click on the "About Us" tab in the navigation bar. However, you can also reach the About Us page by clicking the Learn More
                                button on the Home page in the Our Mission section.</p>

                            
                            <br></br>

                            <p class = "smallText">2. How come when I click on the Submit button, it does not work in the Buy Lab Kit page?</p>

                            <p class = "FAQText">Make sure you scroll up to see if any error messages popped up. You might have forgotten to add a last name, an email, a phone number, credit card number, CVV, or address. Or if
                            you did fill out all of the information, you may have inputted the data incorrectly. For example, you may have entered a phone number, but accidentally added a letter in it. The error message
                            under the phone number will notify you of this.</p>

                            <br></br>

                            <p class = "smallText">3. How do I leave a review?</p>
    
                            <p class = "FAQText">You could leave a review by going into our Reviews page using our navigation bar. In this page, you could type in an anonymous review for us to look at. We always appreciate the feedback!</p>

                </div>

            </div>
        </div> 
    );
}
 
export default FAQ;