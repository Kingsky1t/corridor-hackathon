import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { PageNotFound } from "./components/PageNotFound";
import { PdfGenerator } from "./components/PdfGenerator";
import { Visualization } from "./components/Visualization";

export const App = () => {
     return (
          <div className='app-container'>
               <NavBar />
               <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/visualization' element={<Visualization />} />
                    <Route path='/generate' element={<PdfGenerator />} />
                    <Route path='*' element={<PageNotFound />} />
               </Routes>
          </div>
     );
};
