import kidspic from './Images/kidspic.png';
import phone from './Images/image_7.png';
import facebook from './Images/image_19.png';
import twitter from "./Images/image_21.png";
import instagram from "./Images/image_20.png";

import FrenchNavbar from './FrenchNavbar.js';

const FrenchAboutUs = () => {
    return (
        <div>
            <FrenchNavbar/>
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">À propos de nous</p>
                </div>
                <div className = "frenchAboutUsRectangle">
                    <div className = "aboutUsContainer">
                        <img className = "aboutUsImage" src=  {kidspic} alt="Kids Experimenting Picture"/>
                        <p className = "aboutUsText">Nous sommes une entreprise de laboratoire scientifique, qui vend des kits de laboratoire à vos enfants afin qu'ils puissent effectuer des expériences de laboratoire amusantes. Nous proposons une large gamme de kits de laboratoire allant de ceux qui permettent à vos enfants de créer une explosion à partir d'un volcan, à un kit de laboratoire qui permet à vos enfants de créer des bulles fantômes ! Nous fournissons également des démos pour chacun des kits de laboratoire, afin que vos enfants sachent exactement comment effectuer chaque expérience. Alors qu'est-ce que tu attends? Achetez l'un de nos kits de laboratoire dès aujourd'hui !</p>
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
export default FrenchAboutUs;