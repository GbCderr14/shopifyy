import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from './components/layout';
import Allitem from './components/pages/allitems';
import Favorites from "./components/pages/favorites";
import Wishlist from "./components/pages/wishlist";
import Contact from "./components/pages/contact";
function App() {
  return (
    <div className="App">
      
      <Layout>
      <Routes>
        <Route path="/shopy/" element={<Allitem />}/>
        <Route path="/shopy/favorites" element={<Favorites />}/>
        <Route path="/shopy/wishlist" element={<Wishlist />}/>
        <Route path="/shopy/contact" element={<Contact />}/>
      </Routes>
      </Layout>
       </div>
  );
}
export default App;
