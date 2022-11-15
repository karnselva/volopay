
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props


  const onClickTab = () => {
    setActiveTabId(tabDetails)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <div>
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {tabDetails}
      </button>
    </li>
    
    </div>
  )
}

export default TabItem