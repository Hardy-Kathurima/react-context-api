import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';



const AddContribution = () => {
  const { addContribution, contributions } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    const newContribution = {
      id: contributions.length + 1,
      name,
      amount,
    };
    addContribution(newContribution);
  };


    return (
         
      <div>
  
        <form onSubmit={onSubmit}>
          <div className="row justify-content-center">
         <div className="col-8">
          <div className="row">
          <div className="col-md mb-3">
              <input type="text" name="name" id="name" className="form-control"
               placeholder='name...'
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
                />
            </div>
            <div className="col-md mb-3">
              <input type="number" name="amount" id="amount" className="form-control" 
              placeholder='amount..' 
              value={amount}
               onChange={(e) => setAmount(e.target.value)}
               required
               min="100"
              max="10000"
              step="50"
              />
            </div>
            <div className="col-md"><button className='btn btn-info ' type="submit">Submit</button></div>
          </div>
         </div>
          </div>
        </form>
      </div>
    );
}
 
export default AddContribution;