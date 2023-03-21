import React, { useState } from 'react'

function RadioButton() {
    const [gender,setGender]=useState()
    return (
        <div>
            <strong>Gender</strong>
            <div className='flex gap-3'>
                <label>male</label>
                <input type='radio' name='gender' value='male' onChange={(e)=>setGender(e.target.value)} />
            </div>
            <div className='flex gap-3'>
                <label>female</label>
                <input type='radio' name='gender' value='female' onChange={(e)=>setGender(e.target.value)} />
            </div>
            <h1>{gender}</h1>
        </div>
    )
}

export default RadioButton