import * as React from "react";
import * as ReactDOM from "react-dom";


import Counter from "./components/Test01";

ReactDOM.render(
    <Counter  defaultCount={3} />,
    document.getElementById("test01")
);

