import './LoadingSpinner.css';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LoadingSpinner = () => {


  return (
    <div className="spinner-box">
      <FontAwesomeIcon icon={faRotate} spin size="2xl" />
    </div>
  )
}

export default LoadingSpinner;