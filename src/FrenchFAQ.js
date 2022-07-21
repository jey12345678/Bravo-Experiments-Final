import FrenchNavbar from './FrenchNavbar';

const FrenchFAQ = () => {
    return (
        <div>
            <FrenchNavbar/>
        
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">FAQ</p>

                </div>

                <div className = "FAQRectangle">
                    
                            <p class = "smallText">1. Comment accédez-vous à la page À propos de nous ?</p>
                            <p class = "FAQText">Pour accéder à la page À propos de nous, il vous suffit de cliquer sur l'onglet "À propos de nous" dans la barre de navigation. Cependant, vous pouvez également accéder à la page À propos de nous en cliquant sur le bouton En savoir plus sur la page d'accueil dans la section Notre mission.</p>

                            
                            <br></br>

                            <p class = "smallText">2. Comment se fait-il que lorsque je clique sur le bouton Soumettre, cela ne fonctionne pas sur la page Acheter un kit de laboratoire ?</p>

                            <p class = "FAQText">Assurez-vous de faire défiler vers le haut pour voir si des messages d'erreur sont apparus. Vous avez peut-être oublié d'ajouter un nom de famille, un e-mail, un numéro de téléphone, un numéro de carte de crédit, un CVV ou une adresse. Ou si vous avez rempli toutes les informations, vous avez peut-être mal saisi les données. Par exemple, vous avez peut-être saisi un numéro de téléphone, mais y avez accidentellement ajouté une lettre. Le message d'erreur sous le numéro de téléphone vous en informera.</p>

                            <br></br>

                            <p class = "smallText">3. Comment puis-je laisser un avis ?</p>
    
                            <p class = "FAQText">Vous pouvez laisser un avis en accédant à notre page Avis à l'aide de notre barre de navigation. Sur cette page, vous pouvez saisir une critique anonyme pour que nous la regardions. Nous apprécions toujours les commentaires!</p>

                </div>

            </div>
        </div> 
    );
}
 
export default FrenchFAQ;