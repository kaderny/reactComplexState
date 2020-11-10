import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
  const {name , value} = event.target;//destructering event.target
  // console.log(value);
  // console.log(name);

  setContact((preValue)=>{
        return {
          ...preValue,
          //if we dont use [] , will create a new variable in the object .
          [name]: value // using spread opeartor , we have to use braket to add it asa key on our object instead of being treated as a string 
                }
            });
            }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" value = {contact.fName} onChange={handleChange} placeholder="First Name" />
        <input name="lName" value = {contact.lName} onChange={handleChange} placeholder="Last Name" />
        <input name="email" value = {contact.email} onChange={handleChange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
