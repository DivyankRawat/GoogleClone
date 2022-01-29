import React, { useState } from "react";
import './SearchBox.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';

function Search(hideButtons = false) {   //props
    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        console.log("Yay")

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        navigate('/search');  // uselocation changesd to useNavigate
    }

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <KeyboardVoiceIcon />
            </div>

            {!hideButtons ? (
                <div className="search_buttons">
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button className="search_buttonHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button className="search_buttonHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )
            }
        </form>
    )
}

export default Search