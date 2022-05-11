import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem, } from '@mui/material';
import languages from '../../languages';


export default function Header({ word, setWord, setMeanings, meanings, handleClick, setCategory }) {
    const handleText = (e) => {
        setWord(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    console.log(word);

    return (
        <div>
            <Box>
                <TextField
                    className="search"
                    id="filled-basic"
                    value={word}
                    label="Search a Word"
                    onChange={handleText}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        {
                            languages.map((language) => {
                                return <MenuItem key={language.label} value={language.label} onChange={handleCategory}
                                >{language.value}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>
                <button onClick={handleClick}>Get meanings</button>
            </Box>
        </div>
    )
}
