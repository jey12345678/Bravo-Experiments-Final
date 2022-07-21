import lavalamp from './Images/water_density_C.jpg';
import volcano from './Images/baking-soda-and-vinegar-reaction-change-in-amount-of-vinegar.png';
import snowglobe from './Images/glycerine_water_solutions_freezing_points.png';
import elephantpaste from './Images/initial-rate-graph-for-oxygen-evolved-by-decomposition-of-hydrogen-peroxide-05-m.png';
import crystaltree from './Images/Ammonia dynamic viscosity temperature saturation C.jpg';
import ghostbubbles from './Images/relative-temp-of-dry-ice-celsius.png';
import Navbar from './NavBar';

const Demos = () => {
    return (
        <div>
            <Navbar/>
        
            <div className="home">
                <div className = "pageheaderbackground">
                    <p className = "hometext">Demos</p>
                </div>
                <div className = "divisionOne">
                    <p className = "hometext">Lava Lamp Experiment Demo</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/wIAPOKMYrf0" title="Lava Lamp Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Text Instructions</p>
                    <p className = "smallerText">1.Fill bottle a quarter way through with water.</p>
                    <p className = "smallerText">2.Next take vegatable oil and pour 3/4 of it into the bottle. *Stop to leave a little room at the top.</p>
                    <p className = "smallerText">3.Add drops of the food colouring of your choice.</p>
                    <p className = "smallerText">4.Close the cap and mix a little.</p>
                    <p className = "smallerText">5.Take a tablet, break it in half, and put half of it and put it inside the bottle and put cap on.</p>
                    <p className = "smallerText">6.Shake the bottle and make your observations.</p>
                    
                </div>

                <div className = "textInstructions">
                    <p className = "smallerText">Homework Time!</p>
                    <p className = "smallerText">Analyze this graph that shows the density of water</p>
                    <img className = "graphimage" src=  {lavalamp} alt="Lava Lamp Picture"/>
                </div>



                <div className = "divisionOne">
                    <p className = "hometext">Volcano Eruption Experiment Demo</p>
                </div>
                <iframe width="100%" height="900" src="https://www.youtube.com/embed/x8--3M7GGCA" title="How To Make An Easy Baking Soda And Vinegar Volcano Eruption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Text Instructions</p>
                    <p className = "smallerText">1.Pour a glass of vingear into the bottle.</p>
                    <p className = "smallerText">2.Pour a glass of warm water into the bottle.</p>
                    <p className = "smallerText">3.Mix the bottle.</p>
                    <p className = "smallerText">4.Add a drop or two of dish soap into the bottle.</p>
                    <p className = "smallerText">5.Add 1/2 cup of baking soda into a cup of water.</p>
                    <p className = "smallerText">6.Stir the cup of water and baking soda with a spoon.</p>
                    <p className = "smallerText">7.Use the brown clay provided by the lab kit to create a volcano like structure around the bottle.</p>
                    <p className = "smallerText">8.Pour the cup of water and baking soda into the bottle.</p>
                    <p className = "smallerText">9.Watch the volcanic eruption!</p>

                </div>



                <div className = "textInstructions">
                    <p className = "smallerText">Homework Time!</p>
                    <p className = "smallerText">Analyze this graph about the reaction between vinegar and baking soda!</p>
                    <img className = "graphimage" src=  {volcano} alt="Lava Lamp Picture"/>
                </div>

                <div className = "divisionOne">
                    <p className = "hometext">Elephant Toothpaste Experiment Demo</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/PZsfvMq7kzg" title="How to Make Elephant Toothpaste | FUN & FOAMY Elephant Toothpaste Experiment | Doing Science at Home" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Text Instructions</p>
                    <p className = "smallerText">1Fill half of the bottle with hydrogen peroxide.</p>
                    <p className = "smallerText">2.Put dish soap into the bottle.</p>
                    <p className = "smallerText">3.Mix the bottle.</p>
                    <p className = "smallerText">4.Add drops of food colouring into the bottle.</p>
                    <p className = "smallerText">5.Add yeast into a cup.</p>
                    <p className = "smallerText">6.Add warm water into the cup.</p>
                    <p className = "smallerText">7.Mix the warm water and the yeast very well.</p>
                    <p className = "smallerText">8.Pour the cup of warm water and yeast into the bottle .</p>
                    <p className = "smallerText">9.Observe the reaction.</p>
                </div>

                <div className = "textInstructions">
                    <p className = "smallerText">Homework Time!</p>
                    <p className = "smallerText">Analyze this graph about Hydrogen peroxide!</p>
                    <img className = "graphimage" src=  {elephantpaste} alt="Lava Lamp Picture"/>
                </div>

                <div className = "divisionOne">
                    <p className = "hometext">Snow Globe Experiment Demo</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/4xXyIk4xV5k" title="Science Experiment | Snow Globe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Text Instructions</p>
                    <p className = "smallerText">1. Fill 1/2 of your jar with glycerin.</p>
                    <p className = "smallerText">2. Fill other half of your jar with water.</p>
                    <p className = "smallerText">3. Add white glitter into your jar.</p>
                    <p className = "smallerText">4. Stir the jar with a spoon.</p>
                    <p className = "smallerText">5.Glue the toy house and trees in the lab kit onto the lid of the jar.</p>
                    <p className = "smallerText">6.Fill jar with water all the way to the very top to avoid air bubbles.</p>
                    <p className = "smallerText">7. Cover the jar with the lid.</p>
                    <p className = "smallerText">8. Observe the cool snow globe you made!</p>

                </div>


                <div className = "textInstructions">
                    <p className = "smallerText">Homework Time!</p>
                    <p className = "smallerText">Analyze this graph about Glycerin!</p>
                    <img className = "graphimage" src=  {snowglobe} alt="Lava Lamp Picture"/>
                </div>

                <div className = "divisionOne">
                    <p name = "crystalTree" className = "hometext">Crystal Tree Experiment Demo</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/JYqq3XGtbs4" title="Magic Crystal Tree - Sick Science! #065" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Text Instructions</p>
                    <p className = "smallerText">1.Draw your trees on the cardboard from the lab kit.</p>
                    <p className = "smallerText">2. Cut out your tree with a pair of scissors.</p>
                    <p className = "smallerText">3. Assemble your tree.</p>
                    <p className = "smallerText">4. Decorate tree with food colouring.</p>
                    <p className = "smallerText">5. Add 1 tablespoon of water into the bowl.</p>
                    <p className = "smallerText">6. Add 1 tablespoon of salt into the bowl.</p>
                    <p className = "smallerText">7. Add 1 tablespoon of laundry bluing.</p>
                    <p className = "smallerText">8. Add 1/2 tablespoon of ammonia.</p>
                    <p className = "smallerText">9. Stir until well combined.</p>
                    <p className = "smallerText">10. Place your tree into the bowl of solution.</p>
                    <p className = "smallerText">11. Find a safe place for your tree to grow overnight.</p>
                    <p className = "smallerText">12. Come back to see your tree the next day to see your beautiful crystal tree!</p>
                </div>

                <div className = "textInstructions">
                    <p className = "smallerText">Homework Time!</p>
                    <p className = "smallerText">Analyze this graph about Ammonia!</p>
                    <img className = "graphimage" src=  {crystaltree} alt="Lava Lamp Picture"/>
                </div>

                <div className = "divisionOne">
                    <p className = "hometext">Ghost Bubbles Experiment Demo</p>
                </div>
                <iframe class = "videoclass" width="100%" height="900" src="https://www.youtube.com/embed/MeUDny-5nPo" title="Boo Bubbles - Dry Ice Science - Sick Science! #108" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className = "textInstructions">
                    <p className = "smallerText">Text Instructions</p>
                    <p className = "smallerText">MAKE SURE YOU HAVE ADULT SUPERVISION!</p>
                    <p className = "smallerText">1. Use the blade to cut the top of the 2 L bottle.</p>
                    <p className = "smallerText">2. Attach the rubber tube to the funnel.</p>
                    <p className = "smallerText">3. Use the blade to create a hole in the bottom of the small portion cup.</p>
                    <p className = "smallerText">4. In a cup full of water, pour dish soap into it.</p>
                    <p className = "smallerText">5.Mix the cup with a spoon.</p>
                    <p className = "smallerText">6.Add some warm water to the bottle to the level as shown.</p>
                    <p className = "smallerText">7.Add a few pieces of dry ice to the warm water.</p>
                    <p className = "smallerText">8. Cover the top of the bottle with a funnel .</p>
                    <p className = "smallerText">9.Test out the flow by adjusting the funnel on the top of the bottle .</p>
                    <p className = "smallerText">10.Place the cup into the bubble solution.</p>
                    <p className = "smallerText">11.Cover the top of the bottle with the funnel.</p>
                    <p className = "smallerText">12.Proceed to create spooky ghost bubbles!</p>
                </div>

                <div className = "textInstructions">
                    <p className = "smallerText">Homework Time!</p>
                    <p className = "smallerText">Analyze this graph about the relative temperature of dry ice!</p>
                    <img className = "graphimage" src=  {ghostbubbles} alt="Lava Lamp Picture"/>
                </div>
                
            </div>
        </div> 
     );
}
 
export default Demos;