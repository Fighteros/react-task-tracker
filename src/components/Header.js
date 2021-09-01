import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1 style={headingStyle}>{title}</h1>
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

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}


export default Header
