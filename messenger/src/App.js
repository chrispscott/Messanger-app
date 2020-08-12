import React, { useState, useEffect } from 'react';
import { makeStyles, Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import  Message  from "./components/Message";
import db from './firebase';

function App() {
  // holding input valut in state
  // name of state and variable name
const [input, setInput ] = useState('');
//  storeing messages inside of state array 
const [messages, setMessages] = useState([]);

const [username, setUsername] = useState('');

useEffect(() => {
// this use effect will run once when the app component loads
db.collection('messages').onSnapshot(snapshot => {
  setMessages(snapshot.docs.map(doc => doc.data()))
});
}, [] )




// useState = is tempory memory set up as a variable in react
// useEffect = run code on a condition in react 
useEffect(() => {
  // run code here
  //  if its blank inside [], this code runs once when the app component loads
  setUsername(prompt('Please enter your username'))

}, []) //condition 

console.log(input);
console.log(messages);

// function to send messages on click 
const sendMessage = (event) => {
  // ! this line of code will prevent the defefualt setting of the broswer refreshing the page when you submit the form with enter
  event.preventDefault();
  // all the logic to send a message goes here
  // !sends entire message with out cutting messsage off 
  setMessages([...messages, {username: username, text: input}]);
  // !clears  input after messsage is sent
  setInput('')
}

  return (
    <div className="App">
      {/*  this is just a title */}
      <h1> Messenger </h1>
  <h2> Welcome {username}</h2>


      <form>
        {/* this is material ui styleing for the form  */}
          <FormControl>
                <InputLabel >Enter a message ...</InputLabel>
                 {/*  maps input to the the state saves the imput in state  */}
                <Input value={input} onChange={event => setInput(event.target.value)}/>
                {/* button with on click to send message to sendMessage function  */}
                <Button disabled={!input} variant="outlined" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
                {/* ! form will make the browser refresh on submit  */ }
          </FormControl>
      </form>


      {/* messages themselves */}

      {
        //  brackets to write java script
        //  this is basicly a function that takes the messages array and useing map to loop thru array and return a p tag with the message
        messages.map(message => (
          // returns the message
          // padding the propery message to component Message
          <Message username={username} message={message} />

        // <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
