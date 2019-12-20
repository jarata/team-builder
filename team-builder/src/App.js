import React, { useState } from 'react';
import './App.css';
import Form from "./components/form/Form";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Justin",
      email: "justin@forms.management",
      role: "developer"
    }
  ]);

  const addMember = (member) => {
    const newMember = {
      id: 1,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }
  console.log("App:", members)
  return (
    <div className="App">
      <Form addMember={addMember}/>
      <div className="members">
        <h3>Member Output:</h3>
        {members.map(m =>
          <ul className="member" key={m}>
            <p>{m.id}</p>
            <p>{m.name}</p>
            <p>{m.email}</p>
            <p>{m.role}</p>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;