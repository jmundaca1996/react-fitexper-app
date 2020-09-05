import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCateogrias}) => {
    const [inputValue, setinputValue] = useState('');
    const handledInputChange = (e) => {
        setinputValue(e.target.value);
    }
    const handledSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCateogrias( cat => [inputValue, ...cat]);
            setinputValue('');
        }
    }
    return (
        <form onSubmit={handledSubmit}>
            <input 
                type="text"
                value={ inputValue}
                onChange={ handledInputChange }
            />
        </form>
    )
}
//para llamar las propTypes
AddCategory.propTypes = {
    setCateogrias: PropTypes.func.isRequired
}
