// Write your code here
import './index.css'

const TabItem = props => {
  const {key, tabDetails, onChangeState, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTextStyle = isActive ? 'tab-text-glow' : 'tab-text'
  const onClickEventTriggered = () => {
    onChangeState(tabId)
  }
  return (
    <li className="tab-item">
      <button className={activeTextStyle} onClick={onClickEventTriggered}>
      {displayText}
      </button>
    </li>
  )
}

export default TabItem
