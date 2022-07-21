import lavaLamp from './Images/lavaLamp.png';
import translateIcon from './Images/translateIcon.png';
import Navbar from './NavBar';

const Home = () => {
    const handleClick = () =>{
        console.log('hello, ninjas');
    }
    const handleClickAgain = (name) =>{
        console.log('hello'+ name);

    }
    return (
        <div>
            <Navbar/>
            <div className="home">

                <div className = "translateBar">
                    <a className = "translateImage" href = "/FrenchHome.js">
                        <img className = "translateImage" src=  {translateIcon} alt="TranslateImage"/>
                    </a>
                </div>


                <img className = "lavalampimage" src= {lavaLamp} alt="Image of Lava Lamp"/>

                <div className = "divisionOne">
                    <p className = "hometext">Take A Look At Our Science Experiments!</p>
                </div>


                <div className = "ourmissiondivision">
                    <p className = "hometext">Our Mission</p>
                </div>

                <div className = "textdivision">
                    <p className = "smallerText">Our mission is to teach children how to do cool science experiments from their homes! We also sell lab kits related to each experiment that you could purchase and have demos on our website that show the steps to perform each experiment. </p>
                    <div className = "buttonsection">  
                        <button className = "learnmorebutton">
                            <a href="/AboutUs.js" className = "learnMoreLink">Learn More</a>
                        </button>
                    </div>
                    
                </div>   

            </div>
        </div>
    );
}
 
export default Home;