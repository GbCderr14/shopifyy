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
        <Route path="/shopifyy/" element={<Allitem />}/>
        <Route path="/shopifyy/favorites" element={<Favorites />}/>
        <Route path="/shopifyy/wishlist" element={<Wishlist />}/>
        <Route path="/shopifyy/contact" element={<Contact />}/>
      </Routes>
      </Layout>
       </div>
  );
}
export default App;
