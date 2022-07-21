import logo from './Images/logo.png';
const FrenchNavBar = () => {
    return (
        <nav className="frenchnavbar">
            <h1>Bravo Experiments</h1>
            <img className = "bravolabslogo" src=  {logo} alt="Logo of Bravo Labs"/>
            <div className="links">
                <a href = "/FrenchHome.js">Maison</a>
                <a href = "/FrenchAboutUs.js">À propos de nous</a>
                <a href = "/FrenchExperiments.js">Expériences</a>
                <a href = "/FrenchDemos.js">Démos</a>
                <a href = "/FrenchReviews.js">Commentaires</a>
                <a href = "/FrenchFAQ.js" >FAQ</a>
                <a href = "/FrenchBuyLabKit.js" style = {{backgroundColor: '#FEFFBE', color: "#472836", borderRadius: '16px', padding: '20px', marginRight: '10px', alignItems: 'center'}}>Acheter un kit de laboratoire</a>
            </div>
        </nav>
    );
}
 
export default FrenchNavBar;