import logo from './logo.svg';
import Header from "./components/Header";
import Background from "./components/Background";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";

function App() {
  return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route
                path="/"
                render={({location,history}) => (
                    <div className="App">
                        <Header location={location} history={history}/>
                        <Main />
                        <Footer/>
                        <Background/>
                    </div>
                    )}/>
        </BrowserRouter>
  );
}

export default App;
