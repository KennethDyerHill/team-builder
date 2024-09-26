import React, { useState } from 'react';

function Form(props){

    const [newMember, setNewMember] = useState({
        name:'',
        email:'',
        role:''
    });

    const changeHandler = event => {
        setNewMember({...newMember, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        const member = {...newMember};
        props.newMember(member);
    }

    return (
        <div className='divForm'>
            <h2>Please fill out form</h2>

            <form className='form' onSubmit={submitForm}>

                <label htmlFor='name' className='name'>
                    name:
                    <input type="text"
                            name='name'
                            placeholder='enter first name'
                            value={newMember.name}
                            onChange={changeHandler}
                    />
                </label>

                <label htmlFor='email' className='email'>
                    email:
                    <input type="text" 
                            name='email'
                            placeholder='enter email address'
                            onChange={changeHandler}
                            value={newMember.email}
                    />
                </label>
                <label htmlFor='role' className='role'>
                    role:
                    <input type="text" 
                            name='role'
                            placeholder='enter your role'
                            onChange={changeHandler}
                            value={newMember.role}
                    />
                </label>
                <button type='submit' className="submitButton">add member</button>
            </form>
        </div>
    )
}

export default Form;