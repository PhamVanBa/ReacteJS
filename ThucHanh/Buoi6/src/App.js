import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/nav/Nav';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {

    // const handleClickButton = () => {
    //     alert('Button has just clicked')
    // }

    // return (
    //     <div className="App">
    //         <h1 className="title">Buoi4 Demo ReactJS</h1>
    //         <button onClick={handleClickButton}>Click Me</button>
    //     </div>
    // );

    // const divStyle = {
    //     color: 'red'
    // }

    // const divElement = React.createElement('div', {style: divStyle}, 'Hello ReactJS');

    // return divElement;

    // const imgUrl = 'http://saohaivuong.com/wp-content/uploads/' + 
    // '2021/08/google-chrome-change-profile-picture-avatar-585x380-1.jpg';
    
    // const user = {
    //     firstName: 'Nguyen Quang',
    //     lastName: 'Hai'
    // }
    
    // const getFullName = (user) => {
    //     return user.firstName + ' ' + user.lastName;
    // }

    const getTime = (time) => {
        alert(time);
    }

    return (
        /** Fragment */
        // <>
        //     <div>Buoi4 Demo ReactJS
                
        //     </div>
        //     <img src="http://saohaivuong.com/wp-content/uploads/2021/08/google-chrome-change-profile-picture-avatar-585x380-1.jpg" />
        // </>
        // <div>
        //     <div className='title'>Buoi4 Demo ReactJS
                
        //     </div>
        //     <h3>
        //         Hello&nbsp;{getFullName(user)}
        //     </h3>
        //     <img src= { imgUrl }/>
        //     <input 
        //         type='text' 
        //         placeholder='Input value...'
        //         style={{
        //             color: 'green',
        //             fontSize: '1.2rem',
        //             height: '1.8rem',
        //             outline: 'none'
        //         }}
        //     />
        //     <input type='email' style={{height:'1.8rem'}} value='quanghai@gmail.com'/>
            
        // </div>

        <div className='App'>
            {/* Truyền props */}
            <Nav 
                title='Demo Component' 
                username='Nguyen Van A'
                functionProp = {getTime}
            />

            <Sidebar 
                title="Sidebar"
            />

            <Main title='Main'/>
        </div>
    )
}

export default App;
