import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Application from "./application";
import Spinner from "./components/spinner";

import { Provider } from "./helpers/contextHelper";

import "./helpers/i18nHelper";

ReactDOM.render(
    <Suspense fallback={<Spinner />}>
        <Provider>
            <Application />
        </Provider>
    </Suspense>,
    document.getElementById("root")
);
