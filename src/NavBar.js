import logo from './Images/logo.png';
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Bravo Experiments</h1>
            <img className = "bravolabslogo" src=  {logo} alt="Logo of Bravo Labs"/>
            <div className="links">
                <a href = "/">Home</a>
                <a href = "/AboutUs.js">About Us</a>
                <a href = "/Experiments.js">Experiments</a>
                <a href = "/Demos.js">Demos</a>
                <a href = "/Reviews.js">Reviews</a>
                <a href = "/FAQ.js" >FAQ</a>
                <a href = "/BuyLabKit.js" style = {{backgroundColor: '#FEFFBE', color: "#472836", borderRadius: '16px', padding: '20px', marginRight: '10px', alignItems: 'center'}}>Buy Lab Kit</a>
            </div>
        </nav>
    );
}
 
export default NavBar;