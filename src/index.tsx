import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Application from "./application";
import { Provider } from "./helpers/contextHelper";

import "./helpers/i18nHelper";

ReactDOM.render(
    <Suspense fallback={<div>Loading..</div>}>
        <Provider>
            <Application />
        </Provider>
    </Suspense>,
    document.getElementById("root")
);
