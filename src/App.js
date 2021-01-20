import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Component} from "react";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <BurgerBuilder/>
                    <Checkout/>
                </Layout>
            </div>
        );
    }
}

export default App;
