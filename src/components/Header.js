import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add' />
        </header>
    )
}

// in-case i didn't send anything

Header.defaultProps = {
    title: 'Task Tracker'
}

// object 
// warngs in the console if the sent value isn't as the
// set datatype 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }


export default Header