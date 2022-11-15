import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

import Card from '../card/index'
import './index.css'


export default function Cards(props) {
  const[carddetails,setCardDetails]=useState([])
  let {isActive} = props
  isActive=isActive.toLowerCase()
  
  console.log(isActive)
 

  
  useEffect( () => {
    async function fetchdata(){
      
     
       

    const apiUrl = `https://6372229707858778618b8e49.mockapi.io/virtualcards/${isActive}`
    const options = {
      
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      
      const updatedData = fetchedData.map(card => ({
        name: card.name,
        budgetName: card.budget_name,
        ownerId: card.owner_id,
        managedBy: card.managed_by,
        spent: card.spent,
        availableToSpend: card.available_to_spend,
        cardType:card.card_type,
        expiry: card.expiry,
        limit: card.limit,
        status: card.status,
        id: card.id,


      }))

      
      setCardDetails( () => 
         [...updatedData]
        )
    }
    /*if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }*/
  
      
    }
    fetchdata()

  },[isActive]);








  return (
    <div className='cards-container'>
    
     { carddetails &&  carddetails.map(eachCard => (
     <Card carddetail={eachCard} key={uuidv4()}/>))  }
     
      
    </div>
  )
}
