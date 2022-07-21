import lavaLamp from './Images/lavaLamp.png';
import translateIcon from './Images/translateIcon.png';
import FrenchNavbar from './FrenchNavbar.js';

const FrenchHome = () => {
    const handleClick = () =>{
        console.log('hello, ninjas');
    }
    const handleClickAgain = (name) =>{
        console.log('hello'+ name);

    }
    return (

        <div className="App">
            <FrenchNavbar/>

            <div className="home">
                <div className = "translateBar">
                    <a className = "translateImage" href = "/">
                        <img className = "translateImage" src=  {translateIcon} alt="TranslateImage"/>
                    </a>
                </div>


                <img className = "lavalampimage" src= {lavaLamp} alt="Image of Lava Lamp"/>

                <div className = "divisionOne">
                    <p className = "hometext">Jetez un œil à nos expériences scientifiques!</p>
                </div>


                <div className = "ourmissiondivision">
                    <p className = "hometext">Notre mission</p>
                </div>

                <div className = "frenchtextdivision">
                    <p className = "smallerText">
Notre mission est d'enseigner aux enfants comment faire des expériences scientifiques sympas depuis chez eux ! Nous vendons également des kits de laboratoire liés à chaque expérience que vous pouvez acheter et avons des démos sur notre site Web qui montrent les étapes pour effectuer chaque expérience.</p>
                    <div className = "buttonsection">  
                        <button className = "frenchlearnmorebutton">
                            <a href="/FrenchAboutUs.js" className = "learnMoreLink">Apprendre Encore Plus</a>
                        </button>
                    </div>
                    
                </div>

                

                

            </div>
        </div>
    );
}
 
export default FrenchHome;