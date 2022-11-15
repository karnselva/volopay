import React from 'react'
import{MdOutlineLoop} from 'react-icons/md'
import{AiFillFire} from 'react-icons/ai'
import './index.css'

export default function Card(props) {
    const {carddetail}=props
    
    const{name,budgetName,managedBy,
      spent,availableToSpend,cardType,expiry,limit}=carddetail
    const dateObj=new Date(expiry)
    const year=(dateObj.getFullYear()) % 100;
    const month= dateObj.toLocaleString("default", { month: "short" });
    const day =dateObj.getDate()
    
    const spentVal= Math.ceil( (spent.value /(spent.value+availableToSpend.value)) * 100 )
    
    const spentPercent= `${spentVal}%`

  return (
    <div className='card-container'>
        <div className='card-vendor'>
          <div>
          <h3>{name}</h3>
           <p>{managedBy} <span ></span> {budgetName}</p>
           <button>{cardType}</button>
          </div>
          
           <div className='card-logo' >
           <div> { (cardType==="BURNER") ? <AiFillFire /> : <MdOutlineLoop /> } </div>
           
            <p>{ (cardType==="BURNER") ? `Expires: ${day} ${month},${year}`: `${month} Limit: ${limit} ${availableToSpend.currency}` }</p>
           </div>
         </div>
         <div style={{height:8,
                         width: "100%",
                      backgroundColor: "#009E60",borderRadius:15}}>
           <div style={{height:8,
                         width: spentPercent,
                      backgroundColor: "#ff5a83",borderRadius:15}}></div>
        </div>
         <div className='card-spent'>
            <p><span ></span>Spent</p>
            <p>{spent.value} {availableToSpend.currency}</p>
         </div>
         <div className='card-available'>
            <p><span ></span>Available to spend</p>
            <p>{availableToSpend.value} {availableToSpend.currency}</p>
         </div>
      
    </div>
  )
}
