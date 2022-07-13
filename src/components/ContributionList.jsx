import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


import Contribution from "./Contribution";

const ContributionList = () => {
    const  {contributions,removeContribution}= useContext(GlobalContext);

    let total = 0;

 for (let index = 0; index < contributions.length; index++) {
    const contribution = contributions[index];

    total += parseInt(contribution.amount);
    
 }
   
    return (
         <div>
            <div className="row justify-content-center my-4">
       <div className="col-md-10">
       <p className="my-3"> Total Contributions: <strong>Sh {total}</strong></p>
      
       <div className="table-responsive">
                <table className="table table-sm table-bordered table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <Contribution/>
                    </tbody>
                    
                </table>
            </div>
       </div>
            </div>
         </div> 
         
         );
}
 
export default ContributionList;