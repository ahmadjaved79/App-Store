// Write your code here
import './index.css'

const AppItem = props => {
  const {key, appDetails} = props
  const {appName, imageUrl, category} = appDetails
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
