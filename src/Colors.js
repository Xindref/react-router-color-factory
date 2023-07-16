import { Link } from "react-router-dom";

const Colors = () => {

    const colors = JSON.parse(localStorage.getItem('colors')) || ['red', 'blue', 'green'];

    return (
        <div>
            <h1>Welcome to the color factory.</h1>
            <Link to={'/colors/new'}>Add a color</Link>
            <h3>Please select a color.</h3>
            <div>
                {colors.map((color, index) => (
                    <p key={index}>
                        <Link to={`/colors/${encodeURIComponent(color.hex)}`}>{color.hex}
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '20px',
                                    height: '20px',
                                    marginLeft: '10px',
                                    backgroundColor: color.hex,
                                }}
                            ></span>
                        </Link>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Colors;