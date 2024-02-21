import './index.css'

const AppItem = props => {
  const {details} = props
  const {imageUrl, appName} = details

  return (
    <li className="app-card">
      <img className="app-card-img" alt={appName} src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
