import AddContribution from "./AddContribution";
import ContributionList from "./ContributionList";
import Header from "./Header";
import React, { useContext } from 'react';

import { GlobalContext } from "../context/GlobalState";

const Home = () => {
    const { contributions} = useContext(GlobalContext);
    return (
         <>

     <Header/>
     <AddContribution/>
     {contributions.length > 0 ? <ContributionList/> : (<div className="text-center my-4 fw-bold">No Contributions yet</div>)}
         
         
         </> 
         
         );
}
 
export default Home;