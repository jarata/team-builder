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
      id: members.length + 1,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }

  const deleteMember = (id) => {
    setMembers(members.filter(m => m.id !== id))
  }

  return (
    <div className="App">
      <Form addMember={addMember}/>
      <div><h3>Member Output:</h3></div>
      <div className="members">
        {members.map((m, i) =>
          <ul className="member" key={i}>
            <p><span>ID: </span>{m.id}</p>
            <p><span>Name: </span>{m.name}</p>
            <p><span>eMail: </span>{m.email}</p>
            <p><span>Role: </span>{m.role}</p>
            <div>
              <button>Edit</button>
              <button onClick={() => deleteMember(m.id)}>Delete</button>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
