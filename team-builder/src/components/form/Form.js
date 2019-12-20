import React, {useState} from "react";

const Form = (props) => {
	// console.log("Form:", props)
	const [member, setMember] = useState({
		name: "",
		email: "",
		role: ""
	});

	const handleChange = (event) => {
		setMember({...member, [event.target.name]: event.target.value});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		props.addMember(member)
		setMember({ name: "", email: "", role: "" });
	}

	return (
		<div>
			<form onSubmit={handleSubmit} aria-label="Form">
				<label htmlFor="name">
					Name:
					<input
						id="name"
						type="text"
						name="name"
						value={member.name}
						onChange={handleChange}/>
				</label>
				<br/>
				<label htmlFor="email">
					eMail:
					<input
						id="email"
						type="text"
						name="email"
						value={member.email}
						onChange={handleChange}/>
				</label>
				<br/>
				<label htmlFor="role">
					Role:
					<input
						id="role"
						type="text"
						name="role"
						value={member.role}
						onChange={handleChange}/>
				</label>
				<br/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
export default Form;