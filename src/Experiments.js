import lavalamp from './Images/lavalamppic.png';
import volcano from './Images/volcanopic.png';
import snowglobe from './Images/snowglobepic.png';
import elephantpaste from './Images/elephantpastepic.png';
import crystaltree from './Images/crystalpic.png';
import ghostbubbles from './Images/ghostbubblespic.png';
import Navbar from './NavBar';

const Experiments = () => {
    return (
        <div>
            <Navbar/>
        
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Experiments</p>
                </div>

                <div className = "experimentRectangle">
                
                <div className = "cardsGroup">
                        <div className = "card">
                            <img className = "cardimage" src=  {lavalamp} alt="Lava Lamp Picture"/>
                            <p className = "cardHeading">Lava Lamp Experiment</p>
                            <p className = "cardHeading">Price of Lab Kit: $25</p>
                            <p className = "cardText">In this lab, you will build a real funky lava lamp with the help of the density properity of water and oil! The lab kit comes with a clean plastic bottle, water, vegetable oil, fizzing tablets and food colouring.</p>

                            <div className = "buttonsection">  
                                <button className = "watchdemobutton">
                                    <a  href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <div className = "card">
                            <img className = "cardimage" src=  {volcano} alt="Volcano Eruption Picture"/>
                            <p className = "cardHeading">Volcano Eruption Experiment</p>
                            <p className = "cardHeading">Price of Lab Kit: $50</p>
                            <p className = "cardText">In this lab, you get to build a volcano eruption, through a chemical reaction between vinegar and baking soda. The lab kit comes with dish soap, white vinegar, food colouring, baking soda, a bottle, and brown clay.</p>

                            <div className = "buttonsection">  
                                <button className = "watchdemobutton">
                                    <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <div className = "card">
                            <img className = "cardimage" src=  {elephantpaste} alt="Elephant Toothpaste Picture"/>
                            <p className = "cardHeading">Elephant Toothpaste Experiment</p>
                            <p className = "cardHeading">Price of Lab Kit: $20</p>
                            <p className = "cardText">In this experiment, you will see the quick result of a chemical reaction by mixing hydrogen peroxide with yeast and water. The lab kit comes with food colouring, hydrogen peroxide, a plastic bottle, dish soap, yeast and a funnel. </p>

                            <div className = "buttonsection">  
                                <button className = "watchdemobutton">
                                    <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                                </button>
                            </div>
                        </div>
                </div>

                <div className = "cardsGroup">
                        <div className = "card">
                            <img className = "cardimage" src=  {snowglobe} alt="Snow Globe Picture"/>
                            <p className = "cardHeading">Snow Globe Experiment</p>
                            <p className = "cardHeading">Price of Lab Kit: $75</p>
                            <p className = "cardText">In this experiment, you will create your own cool snow globe and learn about the viscosity of glycerin along the way! The lab kit comes with an empty jar and lid, water, glycerin, white glitter and a small toy house and trees.</p>

                            <div className = "buttonsection">  
                                <button className = "watchdemobutton">
                                    <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <div className = "card">
                            <img className = "cardimage" src=  {crystaltree} alt="Crystal Tree Picture"/>
                            <p className = "cardHeading">Crystal Tree Experiment</p>
                            <p className = "cardHeading">Price of Lab Kit: $10</p>
                            <p className = "cardText">In this experiment, you will have the chance to create your own beautifully coloured crystal tree. The lab kit comes with cardboard, a glass dish, table salt, laundry bluing, ammonia, and food colouring.</p>

                            <div className = "buttonsection">  
                                <button className = "watchdemobutton">
                                    <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <div className = "card">
                            <img className = "cardimage" src=  {ghostbubbles} alt="Ghost Bubbles Picture"/>
                            <p className = "cardHeading">Ghost Bubbles Experiment</p>
                            <p className = "cardHeading">Price of Lab Kit: $90</p>
                            <p className = "cardText">In this experiment, you will have the chance to create spooky ghost bubbles. The lab kit comes with a large plastic container, a rubber sink sprayer, bubble solution, fuzzy gloves and dry ice.</p>

                            <div className = "buttonsection">  
                                <button className = "watchdemobutton">
                                    <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                                </button>
                            </div>
                        </div>
                </div>

                <div className = "buttonsection">  
                            <button className = "learnmorebutton">
                                <a  href="/BuyLabKit.js" className = "learnMoreLink">Buy Lab Kit</a>
                            </button>
                </div>

                    

                </div>




            </div>
        </div>
      );
}
 
export default Experiments;