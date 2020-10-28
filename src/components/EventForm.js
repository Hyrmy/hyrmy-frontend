import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createEvent } from '../reducers/eventReducer'
import { createSuccessNotification, clearNotification } from '../reducers/notificationReducer'
import { Form, Button } from 'react-bootstrap'


const EventForm = (props) => {
	const [newTitle, setNewTitle] = useState('')
	const [newTime, setNewTime] = useState('')
	const [newDate, setNewDate] = useState('')
	const [newInfo, setNewInfo] = useState('')

	const titleChange = (event) => {
		setNewTitle(event.target.value)
	}
	const infoChange = (event) => {
		setNewInfo(event.target.value)
	}
	const timeChange = (event) => {
		setNewTime(event.target.value)
	}
	const dateChange = (event) => {
		setNewDate(event.target.value)
	}


	const addEvent = (event) => {
		event.preventDefault()
		console.log("props.user: ",props.user)
		
		props.createEvent({
			title: newTitle,
			info: newInfo,
			time: newTime,
			date: newDate
		}, props.user)

		props.createSuccessNotification(`Created new event: ${newTitle}.`)
		setTimeout(() => {
			props.clearNotification()
		}, 5000)


		setNewTitle('')
		setNewInfo('')
		setNewTime('')
		setNewDate('')

	}


	return (
		<div>
			<h3>Add new event </h3>
			<Form onSubmit={addEvent}>
				<Form.Group>

					<Form.Label> Title:</Form.Label>
					<Form.Control
						id="title"
						type="text"
						value={newTitle}
						name="title"
						onChange={titleChange}
					/>

					<Form.Label> info:</Form.Label>
					<Form.Control
						id="info"
						type="text"
						value={newInfo}
						name="info"
						onChange={infoChange}
					/>
					<Form.Label> time:</Form.Label>
					<Form.Control
						id="time"
						type="text"
						value={newTime}
						name="time"
						onChange={timeChange}
					/>
					<Form.Label> date:</Form.Label>
					<Form.Control
						id="date"
						type="text"
						value={newDate}
						name="date"
						onChange={dateChange}
					/>
					<Button id="submit-button" variant="primary" type="submit">
						Create Event
          </Button>
				</Form.Group>
			</Form>
		</div >
	)
}

const dispatchToProps = {
	createEvent,
	createSuccessNotification,
	clearNotification
}
const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	dispatchToProps
)(EventForm)

