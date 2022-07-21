import kidspic from './Images/kidspic.png';
import phone from './Images/image_7.png';
import facebook from './Images/image_19.png';
import twitter from "./Images/image_21.png";
import instagram from "./Images/image_20.png";

import Navbar from './NavBar.js';

const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">About Us</p>
                </div>
                <div className = "aboutUsRectangle">
                    <div className = "aboutUsContainer">
                        <img className = "aboutUsImage" src=  {kidspic} alt="Kids Experimenting Picture"/>
                        <p className = "aboutUsText">We are a science lab business, which sells lab kits to your children so that they could perform fun lab experiments. We offer a large range of lab kits ranging from ones that allow your kids to create an explosion from a volcano, to a lab kit that allows your kids to create ghost bubbles! We also provide demos for each of the lab kits, so that your children know exactly how to perform each experiment. So what are you waiting for? Purchase one of our lab kits today!</p>
                    </div>

                    <br></br>
                    <br></br>

                    <div className = "divisionOne">
                        <p className = "hometext">Contact Us</p>
                        <br></br>
                        <br></br>

                    </div>

                    <div className = "divisionOne">

                        <div className = "contactUsContainer">
                            <img className = "phoneImage" src=  {phone} alt="Phone"/>
                            <p className = "phoneText">416-558-7890</p>

                            <a href = "https://www.facebook.com/">
                                <img className = "phoneImage" src=  {facebook} alt="Facebook"/>
                            </a>

                            <a href = "https://twitter.com/">
                                <img className = "phoneImage" src=  {twitter} alt="Twitter"/>
                            </a>

                            <a href = "https://www.instagram.com/">
                                <img className = "phoneImage" src=  {instagram} alt="Instagram"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

     );

}
export default AboutUs;