import React from 'react';
import Header from './components/header/Header'
import Shop from './components/Shop/Shop';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Nomatch from './components/Nomatch/Nomatch';
import ProductDetails from './components/ProductDetails/ProductDetails';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Router>
                <Switch>
                    <Route path="/shop">
                        <Shop></Shop>
                    </Route>
                    <Route path="/review">
                        <Review></Review>
                    </Route>
                    <Route path="/inventory">
                        <Inventory></Inventory>

                    </Route>
                    <Route exact path="/">
                        <Shop></Shop>
                    </Route>
                    <Route path="/product/:productKey">
                        <ProductDetails></ProductDetails>
                    </Route>
                    <Route path="*">
                        <Nomatch></Nomatch>
                    </Route>
                </Switch>
            </Router>


        </div>
    );
};

export default App;