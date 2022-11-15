import { useState } from 'react';
import {MdOutlineVideocam} from 'react-icons/md';
import {GrAdd} from 'react-icons/gr';
import Cards from './components/cards/index';
import './Virtualcard.css'
import {BsGridFill} from 'react-icons/bs';
import {FaBars} from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import {IoFilterSharp} from 'react-icons/io5';

import {BiChevronDown} from 'react-icons/bi';

import TabItem from './components/tab/index'
;

const tabsList = [
   "Your","All","Blocked"
]

function VirtualCard() {
  const [details, setDetails] = useState({
   
    isfilter: false,
    activeTabId: tabsList[0],
  

  })
  const setActiveTabId = tabId => {
    setDetails({...details,activeTabId:tabId})
    
    
  }
  const filter = () =>{
  
      setDetails( prevState => ({...details, isfilter: !(prevState.isfilter)}))
   
     
  }
  const filtercontainer= details.isfilter ? "filter-container show" : "filter-container"
 
  return (
    <div className="virtual-card-container">
      <div className="virtual-card-header">
        <div className="virtual-card-heading">
          <h2 >Virtual cards</h2>
          <div >
              <MdOutlineVideocam/>
              <p>Learn more</p>
          </div>
        </div>
        <button> <GrAdd  style={{ marginRight: '6px'}}/> virtual card</button>
      </div>
    <div className='tabs-container'>
      <ul className="tabs-list">
            {tabsList.map( (eachTab,index) => (
              <TabItem
                key={index}
                tabDetails={eachTab}
                setActiveTabId={setActiveTabId}
                isActive={details.activeTabId === eachTab}
              />
            ))}
            </ul>
            <div style={{ marginBottom: '8px'}}>
            <BsGridFill size={16} style={{ marginRight: '12px' , color:"#17191d"}} />
            <FaBars size={16}   />
            </div>
      </div>
      <div  className='filter'>
      
      <BiSearch size={16} style={{ marginRight: '12px'}}/>
      <button onClick={filter}><IoFilterSharp size={14} /><span>Filter</span></button>
      <div className={filtercontainer}>
        <h5>Filters</h5>
        <hr />
        
        <div className='checkbox'> 
        <h6>Type</h6>
        <input type="checkbox" id="check-subscription"/> 
        <label htmlFor="check-subscription">Subscription</label>
        <input type="checkbox" id="check-buffer"/> 
        <label htmlFor="check-buffer">Buffer</label>
        </div>
       
       
        
        
        <div class="dropdown">
        <h6>Cardholder</h6>
      <div class="dropdown-select">
        <span class="select">Select cardholder</span>
        <BiChevronDown style={{color:"grey"}}/>
      </div>
     
    </div>
    
    <button className='btn-apply'>Apply</button>
    <button className='btn-clr'>Clear</button>
      </div>
      </div>
      
      <Cards isActive={details.activeTabId}/>
      
    </div>
  );
}

export default VirtualCard;
