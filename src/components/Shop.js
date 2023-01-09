import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/empActionAmtIndex';

const Shop = () => {
    const dispatch=useDispatch();
    const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch)

  return (
    <>
    <div className="conatainer ">
        <h2>Employee - Deposite/Withdraw Money</h2>
      {/* <button className="btn btn-primary mx-2 my-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>Withdraw Amount (-)</button> <br />  <br />
     
      <button className="btn btn-primary mx-2 my-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}} >Add Amount (+)</button>
    </div> */}
     <button className="btn btn-secondary mx-2 my-2" onClick={()=>{withdrawMoney(50)}}>Withdraw Amount (-)</button> <br />  <br />
     
     <button className="btn btn-secondary mx-2 my-2" onClick={()=>{depositMoney(100)}} >Add Amount (+)</button>
   </div>
   </>
    
  )
}

export default Shop
