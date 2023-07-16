import { useParams, Link } from "react-router-dom";

const Color = () => {

    const params = useParams();

    console.log(params.color);

    const divStyles = {
        backgroundColor: params.color,
        color: 'white',
        height: '100vh',
        margin: '0px',
        padding: '0px',
        position: 'absolute',
        width: '100%',
        fontSize: '50px',
    }

    const linkStyles = {
        color: 'white',
        fontSize: '40px',
    }

    return (
        <div style={divStyles}>
            <h1>This is the color {params.color}! Isn't it beautiful?!</h1>
            <Link style={linkStyles} to={'/colors'}>Go Back?</Link>
        </div>
    )
}

export default Color;