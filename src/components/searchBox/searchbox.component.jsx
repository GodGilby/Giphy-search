import React from 'react';


const SearchBox = ({cb}) => {

    const onChange = (e) => {
        cb(e.target.value)
    }

    return (
        <input style={{width: "90%",margin: "20px 5px",padding: "20px"}} placeholder="Search Giphy...." onChange={(e) => onChange(e)} ></input>
    )
}

export default SearchBox;