import React from "react";
// import Options from "./screens/Options";
import Home from "./screens/Home";
import Navigation from "./config/Navigation";
import { api } from "./util/api";

api("/latest?base=USD")
  .then((response) => {
    console.log("response", response);
  })
  .catch((error) => {
    console.log("error", error);
  });

// export default () => <Home />; //exporting the optios page //self closing view;
export default () => <Navigation />;
