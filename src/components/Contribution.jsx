import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from 'react-router-dom';


const Contribution = () => {
    const  {contributions,removeContribution}= useContext(GlobalContext);
    return ( 

       

    <>
          {contributions.map((contribution)=>(
              <tr key={contribution.id}>
              <td>{contribution.name}</td>
              <td className="fw-bold">Sh {contribution.amount}</td>
              <td className="text-center">
                 <Link
                 to={`/edit/${contribution.id}`}
                 title="Edit Contribution"
                 >
                 <button className="btn btn-sm  btn-primary me-2">Edit</button>
                 </Link>
                  <button className="btn btn-sm btn-danger" onClick={() => removeContribution(contribution.id)}>Delete</button>
              </td>          
              </tr>
          ))}
    </> 


    );
}
 
export default Contribution;