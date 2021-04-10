import React from "react";
import ReactDOM from "react-dom";

import Application from "./application";
import { Provider } from "./helpers/contextHelper";

ReactDOM.render(
    <Provider>
        <Application />
    </Provider>,
    document.getElementById("root")
);
