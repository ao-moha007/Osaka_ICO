import "@/styles/globals.css";

import React from 'react';
import { ERC20Provider } from "../context/osakaToken";
import Navbar from "@/components/navbar/navbar";


//import Navbar from '../components/navbar/navbar';

const App = ({ Component, pageProps }) => {
  return (
    <>
    
    <ERC20Provider>
      
       
      <Component {...pageProps} />
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/proper-min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/plugin/waypoint.min.js"></script>
      <script src="assets/js/plugin/owl.carousel.min.js"></script>
      <script src="assets/js/plugin/jquery.nice-select.min.js"></script>
      <script src="assets/js/plugin/wow.min.js"></script>
      <script src="assets/js/main.js"></script>
      
    </ERC20Provider>
    </>
    
    
  );
};

export default App;
