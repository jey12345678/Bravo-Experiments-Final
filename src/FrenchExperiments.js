import lavalamp from './Images/lavalamppic.png';
import volcano from './Images/volcanopic.png';
import snowglobe from './Images/snowglobepic.png';
import elephantpaste from './Images/elephantpastepic.png';
import crystaltree from './Images/crystalpic.png';
import ghostbubbles from './Images/ghostbubblespic.png';
import FrenchNavbar from './FrenchNavbar';

const FrenchExperiments = () => {
    return (
        <div>
            <FrenchNavbar/>
        
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Expériences</p>
                </div>

                <div className = "experimentRectangle">
                
                <div className = "cardsGroup">
                        <div className = "card">
                            <img className = "cardimage" src=  {lavalamp} alt="Lava Lamp Picture"/>
                            <p className = "cardHeading">Expérience de lampe à lave</p>
                            <p className = "cardHeading">Prix ​​du kit de laboratoire : 25 $</p>
                            <p className = "frenchcardText">Dans ce laboratoire, vous construirez une véritable lampe à lave funky à l'aide de la propriété de densité de l'eau et de l'huile ! Le kit de laboratoire comprend une bouteille en plastique propre, de l'eau, de l'huile végétale, des comprimés pétillants et du colorant alimentaire.</p>

                            <div className = "buttonsection">  
                                <button className = "frenchwatchdemobutton">
                                    <a  href="/FrenchDemos.js" className = "learnMoreLink">Regarder la démo</a>
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <div className = "card">
                            <img className = "cardimage" src=  {volcano} alt="Volcano Eruption Picture"/>
                            <p className = "cardHeading">Expérience d'éruption volcanique</p>
                            <p className = "cardHeading">Prix ​​du kit de laboratoire : 50 $</p>
                            <p className = "frenchcardText">Dans ce laboratoire, vous devez créer une éruption volcanique, grâce à une réaction chimique entre le vinaigre et le bicarbonate de soude. Le kit de laboratoire comprend du savon à vaisselle, du vinaigre blanc, du colorant alimentaire, du bicarbonate de soude, une bouteille et de l'argile brune.</p>

                            <div className = "buttonsection">  
                                <button className = "frenchwatchdemobutton">
                                    <a href="/FrenchDemos.js" className = "learnMoreLink">Regarder la démo</a>
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <div className = "card">
                            <img className = "cardimage" src=  {elephantpaste} alt="Elephant Toothpaste Picture"/>
                            <p className = "cardHeading">Expérience de dentifrice d'éléphant</p>
                            <p className = "cardHeading">Prix ​​du kit de laboratoire : 20 $</p>
                            <p className = "frenchcardText">Dans cette expérience, vous verrez le résultat rapide d'une réaction chimique en mélangeant du peroxyde d'hydrogène avec de la levure et de l'eau. Le kit de laboratoire comprend du colorant alimentaire, du peroxyde d'hydrogène, une bouteille en plastique, du liquide vaisselle, de la levure et un entonnoir. </p>

                            <div className = "buttonsection">  
                                <button className = "frenchwatchdemobutton">
                                    <a href="/FrenchDemos.js" className = "learnMoreLink">Regarder la démo</a>
                                </button>
                            </div>
                        </div>
                </div>

                <div className = "cardsGroup">
                        <div className = "card">
                            <img className = "cardimage" src=  {snowglobe} alt="Snow Globe Picture"/>
                            <p className = "cardHeading">Expérience de boule à neige</p>
                            <p className = "cardHeading">Prix ​​du kit de laboratoire : 75 $</p>
                            <p className = "frenchcardText">Dans cette expérience, vous créerez votre propre boule à neige cool et découvrirez la viscosité de la glycérine en cours de route ! Le kit de laboratoire est livré avec un bocal vide et un couvercle, de l'eau, de la glycérine, des paillettes blanches et une petite maison de jouet et des arbres.</p>

                            <div className = "buttonsection">  
                                <button className = "frenchwatchdemobutton">
                                    <a href="/FrenchDemos.js" className = "learnMoreLink">Regarder la démo</a>
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <div className = "card">
                            <img className = "cardimage" src=  {crystaltree} alt="Crystal Tree Picture"/>
                            <p className = "cardHeading">Expérience de l'arbre de cristal</p>
                            <p className = "cardHeading">Prix ​​du kit de laboratoire : 10 $</p>
                            <p className = "frenchcardText">Dans cette expérience, vous aurez la chance de créer votre propre arbre de cristal magnifiquement coloré. Le kit de laboratoire comprend du carton, un plat en verre, du sel de table, de la lessive bleuie, de l'ammoniac et du colorant alimentaire.</p>

                            <div className = "buttonsection">  
                                <button className = "frenchwatchdemobutton">
                                    <a href="/FrenchDemos.js" className = "learnMoreLink">Regarder la démo</a>
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <div className = "card">
                            <img className = "cardimage" src=  {ghostbubbles} alt="Ghost Bubbles Picture"/>
                            <p className = "cardHeading">Expérience de bulles fantômes</p>
                            <p className = "cardHeading">Prix ​​du kit de laboratoire : 90 $</p>
                            <p className = "frenchcardText">Dans cette expérience, vous aurez la chance de créer des bulles fantômes effrayantes. Le kit de laboratoire est livré avec un grand récipient en plastique, un pulvérisateur d'évier en caoutchouc, une solution à bulles, des gants flous et de la neige carbonique.</p>

                            <div className = "buttonsection">  
                                <button className = "frenchwatchdemobutton">
                                    <a href="/FrenchDemos.js" className = "learnMoreLink">Regarder la démo</a>
                                </button>
                            </div>
                        </div>
                </div>

                <div className = "buttonsection">  
                            <button className = "frenchlearnmorebutton">
                                <a  href="/FrenchBuyLabKit.js" className = "learnMoreLink">Apprendre Encore Plus</a>
                            </button>
                </div>

                    

                </div>




            </div>
        </div>
      );
}
 
export default FrenchExperiments;