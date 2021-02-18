import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import User from "./components/user/user";
import { Container } from "@material-ui/core"
import NavBar from "./components/navbar";

import styles from "./css/main.css";

function App() {
    return (
        <div>
            <header>
               <NavBar></NavBar>
            </header>

            <Provider store={store}>
                <Container maxWidth={"lg"}>
                    <User/>
                </Container>
            </Provider>
            <footer className="border-top footer text-muted">
                <div className="container">
                    &copy; 2021 - BobbyTheBear - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
                </div>
            </footer>
        </div>
    )
        ;
}

export default App;
