import lavalamp from './Images/water_density_C.jpg';
import volcano from './Images/baking-soda-and-vinegar-reaction-change-in-amount-of-vinegar.png';
import snowglobe from './Images/glycerine_water_solutions_freezing_points.png';
import elephantpaste from './Images/initial-rate-graph-for-oxygen-evolved-by-decomposition-of-hydrogen-peroxide-05-m.png';
import crystaltree from './Images/Ammonia dynamic viscosity temperature saturation C.jpg';
import ghostbubbles from './Images/relative-temp-of-dry-ice-celsius.png';
import FrenchNavbar from './FrenchNavbar';

const FrenchDemos = () => {
    return (
        <div>
            <FrenchNavbar/>
        
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Démos</p>
                </div>
                <div className = "divisionOne">
                    <p className = "hometext">Démo d'expérience de lampe à lave</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/wIAPOKMYrf0" title="Lava Lamp Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Instructions textuelles</p>
                    <p className = "smallerText">1.Remplir la bouteille d'un quart de tour avec de l'eau.</p>
                    <p className = "smallerText">2.Ensuite, prenez de l'huile végétale et versez-en 3/4 dans la bouteille. *S'arrêter pour laisser un peu de place en haut.</p>
                    <p className = "smallerText">3.Ajoutez des gouttes du colorant alimentaire de votre choix.</p>
                    <p className = "smallerText">4.Fermer le bouchon et mélanger un peu.</p>
                    <p className = "smallerText">5.Prenez un comprimé, cassez-le en deux, mettez-en la moitié et mettez-le dans la bouteille et mettez le bouchon.</p>
                    <p className = "smallerText">6.Secouez la bouteille et faites vos observations.</p>
                    
                </div>

                <div className = "textInstructions">
                    <p className = "smallerText">L'heure des devoirs!</p>
                    <p className = "smallerText">Analysez ce graphique qui montre la densité de l'eau</p>
                    <img className = "graphimage" src=  {lavalamp} alt="Lava Lamp Picture"/>
                </div>



                <div className = "divisionOne">
                    <p className = "hometext">Démo de l'expérience d'éruption volcanique</p>
                </div>
                <iframe width="100%" height="900" src="https://www.youtube.com/embed/x8--3M7GGCA" title="How To Make An Easy Baking Soda And Vinegar Volcano Eruption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Instructions textuelles</p>
                    <p className = "smallerText">1.Versez un verre de vinaigre dans la bouteille.</p>
                    <p className = "smallerText">2.Versez un verre d'eau tiède dans la bouteille.</p>
                    <p className = "smallerText">3.Mélangez le flacon.</p>
                    <p className = "smallerText">4.Ajoutez une ou deux gouttes de savon à vaisselle dans la bouteille.</p>
                    <p className = "smallerText">5.Ajouter 1/2 tasse de bicarbonate de soude dans une tasse d'eau.</p>
                    <p className = "smallerText">6.Remuez la tasse d'eau et de bicarbonate de soude avec une cuillère.</p>
                    <p className = "smallerText">7.Utilisez l'argile brune fournie par le kit de laboratoire pour créer une structure semblable à un volcan autour de la bouteille.</p>
                    <p className = "smallerText">8.Versez la tasse d'eau et de bicarbonate de soude dans la bouteille.</p>
                    <p className = "smallerText">9.Regardez l'éruption volcanique !</p>

                </div>



                <div className = "textInstructions">
                    <p className = "smallerText">L'heure des devoirs!</p>
                    <p className = "smallerText">Analysez ce graphique sur la réaction entre le vinaigre et le bicarbonate de soude !</p>
                    <img className = "graphimage" src=  {volcano} alt="Lava Lamp Picture"/>
                </div>

                <div className = "divisionOne">
                    <p className = "hometext">Démo d'expérience de dentifrice d'éléphant</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/PZsfvMq7kzg" title="How to Make Elephant Toothpaste | FUN & FOAMY Elephant Toothpaste Experiment | Doing Science at Home" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Instructions textuelles</p>
                    <p className = "smallerText">1.Remplissez la moitié de la bouteille avec du peroxyde d'hydrogène.</p>
                    <p className = "smallerText">2.Mettez du savon à vaisselle dans la bouteille.</p>
                    <p className = "smallerText">3.Mélangez le flacon.</p>
                    <p className = "smallerText">4.Ajoutez des gouttes de colorant alimentaire dans la bouteille.</p>
                    <p className = "smallerText">5.Ajouter la levure dans une tasse.</p>
                    <p className = "smallerText">6.Ajoutez de l'eau tiède dans la tasse.</p>
                    <p className = "smallerText">7.Mélanger très bien l'eau tiède et la levure.</p>
                    <p className = "smallerText">8.Versez la tasse d'eau tiède et la levure dans la bouteille.</p>
                    <p className = "smallerText">9.Observez la réaction.</p>
                </div>

                <div className = "textInstructions">
                    <p className = "smallerText">L'heure des devoirs!</p>
                    <p className = "smallerText">Analysez ce graphique sur le peroxyde d'hydrogène !</p>
                    <img className = "graphimage" src=  {elephantpaste} alt="Lava Lamp Picture"/>
                </div>

                <div className = "divisionOne">
                    <p className = "hometext">Démo d'expérience de boule à neige</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/4xXyIk4xV5k" title="Science Experiment | Snow Globe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Instructions textuelles</p>
                    <p className = "smallerText">1. Remplissez 1/2 de votre bocal avec de la glycérine.</p>
                    <p className = "smallerText">2. Remplissez l'autre moitié de votre bocal avec de l'eau.</p>
                    <p className = "smallerText">3. Ajoutez des paillettes blanches dans votre pot.</p>
                    <p className = "smallerText">4. Remuez le bocal avec une cuillère.</p>
                    <p className = "smallerText">5.Collez la maisonnette et les arbres du kit de laboratoire sur le couvercle du bocal.</p>
                    <p className = "smallerText">6. Remplissez le pot d'eau jusqu'en haut pour éviter les bulles d'air.</p>
                    <p className = "smallerText">7. Couvrir le bocal avec le couvercle.</p>
                    <p className = "smallerText">8. Observe la jolie boule à neige que tu as fabriquée !</p>

                </div>


                <div className = "textInstructions">
                    <p className = "smallerText">L'heure des devoirs!</p>
                    <p className = "smallerText">Analysez ce graphique sur la glycérine !</p>
                    <img className = "graphimage" src=  {snowglobe} alt="Lava Lamp Picture"/>
                </div>

                <div className = "divisionOne">
                    <p name = "crystalTree" className = "hometext">Démonstration de l'expérience de l'arbre de cristal</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/JYqq3XGtbs4" title="Magic Crystal Tree - Sick Science! #065" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Instructions textuelles</p>
                    <p className = "smallerText">1. Dessinez vos arbres sur le carton du kit de laboratoire.</p>
                    <p className = "smallerText">2. Découpez votre arbre avec une paire de ciseaux.</p>
                    <p className = "smallerText">3. Assemblez votre arbre.</p>
                    <p className = "smallerText">4. Décorez l'arbre avec du colorant alimentaire.</p>
                    <p className = "smallerText">5. Ajouter 1 cuillère à soupe d'eau dans le bol.</p>
                    <p className = "smallerText">6. Ajouter 1 cuillère à soupe de sel dans le bol.</p>
                    <p className = "smallerText">7. Ajouter 1 cuillère à soupe de bleuissement de lessive.</p>
                    <p className = "smallerText">8. Ajouter 1/2 cuillère à soupe d'ammoniaque.</p>
                    <p className = "smallerText">9. Remuer jusqu'à ce que le tout soit bien mélangé.</p>
                    <p className = "smallerText">10. Placez votre arbre dans le bol de solution.</p>
                    <p className = "smallerText">11. Trouvez un endroit sûr où votre arbre pourra pousser pendant la nuit.</p>
                    <p className = "smallerText">12. Revenez voir votre sapin le lendemain pour voir votre magnifique sapin de cristal !</p>
                </div>

                <div className = "textInstructions">
                    <p className = "smallerText">L'heure des devoirs!</p>
                    <p className = "smallerText">Analysez ce graphique sur l'ammoniac !</p>
                    <img className = "graphimage" src=  {crystaltree} alt="Lava Lamp Picture"/>
                </div>

                <div className = "divisionOne">
                    <p className = "hometext">Démo de l'expérience Ghost Bubbles</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/MeUDny-5nPo" title="Boo Bubbles - Dry Ice Science - Sick Science! #108" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Instructions textuelles</p>
                    <p className = "smallerText">ASSUREZ-VOUS D'ÊTRE SUPERVISÉ PAR UN ADULTE !</p>
                    <p className = "smallerText">1. Utilisez la lame pour couper le haut de la bouteille de 2 L.</p>
                    <p className = "smallerText">2. Fixez le tube en caoutchouc à l'entonnoir.</p>
                    <p className = "smallerText">3. Utilisez la lame pour créer un trou au fond du gobelet à petites portions.</p>
                    <p className = "smallerText">4. Dans une tasse remplie d'eau, versez-y du liquide vaisselle.</p>
                    <p className = "smallerText">5.Mélangez la tasse avec une cuillère.</p>
                    <p className = "smallerText">6.Ajoutez de l'eau tiède dans la bouteille jusqu'au niveau indiqué.</p>
                    <p className = "smallerText">7.Ajoutez quelques morceaux de neige carbonique à l'eau tiède.</p>
                    <p className = "smallerText">8. Couvrez le haut de la bouteille avec un entonnoir.</p>
                    <p className = "smallerText">9. Testez le débit en ajustant l'entonnoir sur le dessus de la bouteille.</p>
                    <p className = "smallerText">10.Placez la tasse dans la solution à bulles.</p>
                    <p className = "smallerText">11. Couvrez le haut de la bouteille avec l'entonnoir.</p>
                    <p className = "smallerText">12. Continuez à créer des bulles fantômes effrayantes !</p>
                </div>

                <div className = "textInstructions">
                    <p className = "smallerText">L'heure des devoirs!</p>
                    <p className = "smallerText">Analysez ce graphique sur la température relative de la neige carbonique !</p>
                    <img className = "graphimage" src=  {ghostbubbles} alt="Lava Lamp Picture"/>
                </div>
                
            </div>
        </div> 
     );
}
 
export default FrenchDemos;