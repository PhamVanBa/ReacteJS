import { useState } from 'react';
import './DemoForm.css';

const DemoForm = (props) => {
    const [username, setUsername] = useState('quanghai');
    const [password, setPassword] = useState('123abc');

    const onChangeInput = (e)=> {
        console.log(e.target.name);
        if (e.target.name === 'name') setUsername(e.target.value);
        else setPassword(e.target.value);
    }

    const handleSumitForm = (e) => {
        e.preventDefault();
        //alert(username + ';' + password);
    }

    return (
        <form>
            <h1>Demo From</h1>
            <div className='form-control'>
                <label labelfor='name'>Username</label>
                <input 
                    type='text' 
                    name='name' 
                    id='name' 
                    placeholder='username'
                    // defaultValue='quanghai'
                    value={username}
                    onChange={onChangeInput}
                />
            </div>
            <div className='form-control'>
                <label labelfor='password'>Password</label>
                <input 
                    type='password' 
                    name='password' 
                    id='password' 
                    placeholder='password'
                    // defaultValue='123abc'
                    value={password}
                    onChange={onChangeInput}
                />
            </div>
            <button className='btn-submit' type='submit' onClick={handleSumitForm}>Submit</button>
        </form>
    )
}

export default DemoForm;