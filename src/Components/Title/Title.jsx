import PropTypes from 'prop-types'
import "./Title.css"

const Title = ({title, description}) => {
  return (
    <div className="title">
        <p>{title}</p>
        <h2>{description}</h2>
    </div>
  )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Title