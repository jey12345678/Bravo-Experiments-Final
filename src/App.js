import Navbar from './NavBar';
import Home from './Home';
import AboutUs from './AboutUs';
import Demos from './Demos';
import BuyLabKit from './BuyLabKit';
import ConfirmationPage from './ConfirmationPage';
import Experiments from './Experiments';
import Reviews from './Reviews';
import ReviewsConfirmationPage from './ReviewsConfirmationPage';
import BuyLabKitForm from './BuyLabKitForm';
import WrongPage from './WrongPage.js';
import FAQ from './FAQ.js';
import FrenchHome from './FrenchHome.js';
import FrenchAboutUs from './FrenchAboutUs.js';
import FrenchExperiments from './FrenchExperiments.js';
import FrenchDemos from './FrenchDemos.js';
import FrenchReviews from './FrenchReviews.js';
import FrenchReviewsConfirmationPage from './FrenchReviewsConfirmationPage';
import FrenchFAQ from './FrenchFAQ.js';
import FrenchBuyLabKit from './FrenchBuyLabKit.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {

  //const title = "Welcome to the new blog";
  //const likes = 50;
  //const person = {name: 'yoshi', age: 30};
  //const link = "http://www.google.com";

  return (
    <BrowserRouter>
      <div className="App">
        
        <div className="content">
          <Routes>
            <Route path='Bravo-Experiments' element={<Home/>} />
            <Route path = "*" element={ <WrongPage />}></Route>
            <Route path = "/" element={ <Home />}></Route>
            <Route path = "/AboutUs.js" element={ <AboutUs />}></Route>
            <Route path = "/Demos.js" element={ <Demos />}></Route>
            <Route path = "/Experiments.js" element={ <Experiments />}></Route>
            <Route path = "/BuyLabKit.js" element={ <BuyLabKit />}></Route>
            <Route path = "/BuyLabKitForm.js" element={ <BuyLabKitForm />}></Route>
            <Route path = "/Reviews.js" element={ <Reviews />}></Route>
            <Route path = "/ReviewsConfirmationPage.js" element={ < ReviewsConfirmationPage/>}></Route>
            <Route path = "/ConfirmationPage.js" element={ <ConfirmationPage />}></Route>
            <Route path = "/FAQ.js" element={ <FAQ />}></Route>
            <Route path = "/FrenchHome.js" element={ <FrenchHome />}></Route>
            <Route path = "/FrenchAboutUs.js" element={ <FrenchAboutUs />}></Route>
            <Route path = "/FrenchExperiments.js" element={ <FrenchExperiments />}></Route>
            <Route path = "/FrenchDemos.js" element={ <FrenchDemos />}></Route>
            <Route path = "/FrenchReviews.js" element={ <FrenchReviews />}></Route>
            <Route path = "/FrenchReviewsConfirmationPage.js" element={ <FrenchReviewsConfirmationPage />}></Route>
            <Route path = "/FrenchFAQ.js" element={ <FrenchFAQ />}></Route>
            <Route path = "/FrenchBuyLabKit.js" element={ <FrenchBuyLabKit />}></Route>

          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
