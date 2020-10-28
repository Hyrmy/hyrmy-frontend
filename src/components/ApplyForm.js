import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createApply } from '../reducers/applyReducer'
import { createSuccessNotification, clearNotification } from '../reducers/notificationReducer'
import { Form, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'


const ApplyForm = (props) => {
	const [newName, setNewName] = useState('')
	const [newResidence, setNewResidence] = useState('')
	const [newNotes, setNewNotes] = useState('')
	const [newEmail, setNewEmail] = useState('')
	const [newHyyMember, setNewHyyMember] = useState(false)


	const nameChange = (event) => {
		setNewName(event.target.value)
	}
	const emailChange = (event) => {
		setNewEmail(event.target.value)
	}
	const residenceChange = (event) => {
		setNewResidence(event.target.value)
	}
	const notesChange = (event) => {
		setNewNotes(event.target.value)
	}
	const hyyMemberChange = () => {
		(newHyyMember ? setNewHyyMember(false)
			: setNewHyyMember(true))
	}



	const addApply = (event) => {
		event.preventDefault()
		props.createApply({
			name: newName,
			email: newEmail,
			residence: newResidence,
			notes: newNotes,
			hyyMember: newHyyMember
		})

		props.createSuccessNotification(`Created new apply: ${newName}.`)
		setTimeout(() => {
			props.clearNotification()
		}, 5000)


		setNewName('')
		setNewEmail('')
		setNewResidence('')
		setNewNotes('')

	}


	return (
		<div>
			<h3>Add new apply </h3>
			<Form onSubmit={addApply}>
				<Form.Group>

					<Form.Label> Name:</Form.Label>
					<Form.Control
						id="name"
						type="text"
						value={newName}
						name="name"
						onChange={nameChange}
					/>

					<Form.Label> Email:</Form.Label>
					<Form.Control
						id="email"
						type="text"
						value={newEmail}
						name="email"
						onChange={emailChange}
					/>
					<Form.Label>Current city:</Form.Label>
					<Form.Control
						id="residence"
						type="text"
						value={newResidence}
						name="residence"
						onChange={residenceChange}
					/>
					<Form.Label>Notes:</Form.Label>
					<Form.Control
						id="notes"
						type="text"
						value={newNotes}
						name="notes"
						onChange={notesChange}
					/>
					<Form.Label>Hyy-member: </Form.Label>
					<Form.Check
						style={{ display: "inline", padding:"30px"}}
						id="hyyMember"
						type="checkbox"
						value={newHyyMember}
						name="hyyMember"
						onChange={hyyMemberChange}

					/>

					<br />
					<Button id="submit-button" variant="primary" type="submit">
						Create Apply
          			</Button>
				</Form.Group>
			</Form>
		</div >
	)
}

const dispatchToProps = {
	createApply,
	createSuccessNotification,
	clearNotification
}
const mapStateToProps = state => {
	return {
		login: state.login,
		users: state.users
	};
};


export default connect(
	mapStateToProps,
	dispatchToProps
)(ApplyForm)
