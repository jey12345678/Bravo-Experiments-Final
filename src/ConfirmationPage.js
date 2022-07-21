import checkmark from './Images/checkmark.png';
import Navbar from './NavBar';

const ConfirmationPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Buy Lab Kit</p>

                </div>
                <div className = "mediumRectangle">
                    <img className = "confirmationsign" src=  {checkmark} alt="Checkmark Picture"/>
                </div>
                <div className = "confirmationbox">
                    <p className = "hometext">Thank You!</p>
                    <p className = "smallText">Thanks for purchasing a lab kit or kits from us!  We will make sure to stay in touch, to let you know when your package has arrived!</p>
                </div>
            </div>
        </div>
    );
}
 
export default ConfirmationPage;