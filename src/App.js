import React from "react";
import { Provider } from "react-redux";

import Video from "./components/video";
import Sidebar from "./components/Sidebar";

import store from "./store";

function App() {
    return (
        <div>
            <Provider store={store}>
                <Video />
                <Sidebar />
            </Provider>
        </div>
    );
}

export default App;
