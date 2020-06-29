import React, { useState } from 'react';


const SearchBar = (props) => {
    
    const [term, setTerm] = useState('')
    
    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(term)
        // todo: call callback
        props.onFormSubmit(term)

    }

    return (
        <form className="w-100" onSubmit={onFormSubmit}>
            <div className="form-group border rounded py-2 px-3">
                <label>Video Search</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Search for a video"
                    value={term}
                    onChange={onInputChange}
                />
            </div>
        </form>
    )
}
export default SearchBar;