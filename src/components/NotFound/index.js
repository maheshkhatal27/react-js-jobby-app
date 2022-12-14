import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="content-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        className="img-resize"
      />
      <h1 className="not-found">Page Not Found</h1>
      <p className="not-found-desc">
        we're sorry, the page you requested could not be found.
      </p>
    </div>
  </div>
)

export default NotFound
