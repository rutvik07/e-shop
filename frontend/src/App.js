import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Categories from "./categories"
import Product from "./Product"
import Filter from "./Filter"
import Productdetail from "./Productdetail"
import Navbar from "./Navbar"
import CategoryForm from "./categoriesForm"
import ProductForm from "./ProductForm"
import Shop from './Shop';
import AllProducts from './AllProducts';
import Startcompo from "./startcompo";
import UserForm from "./userLogin";
import UserCreate from "./userCreate";
import Logout from "./logout";




function App() {
  return (
    <div className="App">
      <Navbar/>
    <header className="App-header">
      
     
      <Router>
        {/* <div>
          <ul>
            <li><Link to = 'Categories'>Categories</Link></li>
            <li><Link to = 'Filter'>Filter</Link></li>
            <li><Link to = 'Product'>Product</Link></li>
            <li><Link to = 'Productdetails'>Productdetails</Link></li>
          </ul>
        </div> */}
        <Switch>
        <Route path="/Categories"><Categories/></Route>
        <Route path="/Filter"><Filter/></Route>
        <Route path="/AllProducts"><AllProducts/></Route>
        <Route path="/Productdetails"><Productdetail/></Route>
        <Route path="/CategoriesForm"><CategoryForm/></Route>
        <Route path="/ProductForm"><ProductForm/></Route>
        <Route path="/Shop"><Shop/></Route>
        <Route path="/userForm"><UserForm/></Route>
        <Route path="/userCreate"><UserCreate/></Route>
        <Route path="/logout"><Logout/></Route>
        <Route path="*"><Startcompo/></Route>
        </Switch>
      </Router>
    </header>
  </div>
  );
}

export default App;
