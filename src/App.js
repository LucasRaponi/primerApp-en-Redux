import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Devs from "./components/secciondevs/Devs"
import TeamSeleccionado from './components/TeamSeleccionado';
import "./styles/styles.scss";

const App = () => (

        <Provider store={store}>
            <main>

            <h1>ReacTeam</h1>
            <Devs />
            <TeamSeleccionado />

        </main>
        </Provider>

)

export default App;
