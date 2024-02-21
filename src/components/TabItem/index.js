import './index.css'

const TabItem = props => {
  const {tabDetails, tabChange, isActive} = props
  const {tabId, displayText} = tabDetails

  const changeTab = () => {
    tabChange(tabId)
  }

  const activeBtn = isActive ? 'active-btn' : ''

  return (
    <li>
      <button
        className={`${activeBtn} tab-btn`}
        type="button"
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
