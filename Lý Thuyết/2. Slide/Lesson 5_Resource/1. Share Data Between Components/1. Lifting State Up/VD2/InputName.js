import React from 'react';

function InputName(props) {

    const handleChangeInput = (event) => {
        // send data to parent component
        props.changeInputName(event.target.value);
    }

    return (
        <div>
            <label>
                Name:
                <input type="text" value={props.name} onChange={handleChangeInput}></input>
            </label>
        </div>
    );
}

export default InputName;


