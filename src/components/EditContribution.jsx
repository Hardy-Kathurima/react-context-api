import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link,useParams } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';
import Header from './Header';

const EditContribution = (route) => {

    let navigate = useNavigate();

    const { contributions, editContribution } = useContext(GlobalContext);
  
    const [selectedUser, setSelectedUser] = useState({
      id: null,
      name: "",
      amount:""
    });

    const { id } = useParams();
  
    const currentUserId = id;
  
    useEffect(() => {
      const contributionId = currentUserId;
      const selectedUser = contributions.find(
        (currentContributionTraversal) => currentContributionTraversal.id === parseInt(contributionId)
      );
      setSelectedUser(selectedUser);
    }, [currentUserId, contributions]);
  
    const onSubmit = (e) => {
      e.preventDefault();
      editContribution(selectedUser);
      navigate("/");
    };
  
    const handleOnChange = (userKey, newValue) =>
      setSelectedUser({ ...selectedUser, [userKey]: newValue });
  
    if (!selectedUser || !selectedUser.id) {
      return <div>Invalid Contribution ID.</div>;
    }
    return ( 
    <>
    <Header/>
        <form onSubmit={onSubmit} className="my-4">
          <div className="row justify-content-center">
         <div className="col-8">
          <div className="row">
          <div className="col-md mb-3">
              <input type="text" name="name" id="name" className="form-control"
               placeholder='name...'
               value={selectedUser.name}
               onChange={(e) => handleOnChange("name", e.target.value)}
                />
            </div>
            <div className="col-md mb-3">
              <input type="number" name="amount" id="amount" className="form-control" 
              placeholder='amount..' 
              min="100"
              max="10000"
              step="50"
              value={selectedUser.amount}
              onChange={(e) => handleOnChange("amount", e.target.value)}
              />
            </div>
            <div className="col-md"><button className='btn btn-info ' type="submit">Submit</button></div>
          </div>
         </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/">Cancel</Link>
          </div>
        </form>
    
    </>
     );
}
 
export default EditContribution;