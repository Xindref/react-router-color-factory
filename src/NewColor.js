import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewColor = () => {
    const [color, setColor] = useState('#aabbcc');

    const colorPickerStyles = {
        margin: 'auto',
    }

    const colors = JSON.parse(localStorage.getItem('colors')) || [];

    const divStyles = {
        backgroundColor: color,
        margin: '0px',
        padding: '0px',
        height: '100vh',
        width: '100%',
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '3px 3px 2px black'
    }

    const handleLinkClick = () => {
        const newColor = { hex: color };
        colors.push(newColor);
        localStorage.setItem('colors', JSON.stringify(colors));
    };

    return (
        <div style={divStyles}>
            <h1>Pick a color!</h1>
            <HexColorPicker style={colorPickerStyles} color={color} onChange={setColor} />
            <p>Color code: {color}</p>
            <Link style={{ color: 'white' }} to={`/colors`} onClick={handleLinkClick}>Add Color</Link>
        </div >
    )
}

export default NewColor;