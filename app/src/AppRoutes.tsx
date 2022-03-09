import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import {Home} from "./pages/home";
import { PageNotFound } from './pages/404';
// import Sobre from "./Sobre";
// import Usuario from "./Usuario";

export const AppRoutes = () => {
   return(
       <BrowserRouter>
           <Route element={ Home }  path="/" />
           <Route element={ PageNotFound }/>
           {/* <Route element={ Sobre }  path="/sobre" />
           <Route element={ Usuario }  path="/usuario" /> */}
       </BrowserRouter>
   )
}
