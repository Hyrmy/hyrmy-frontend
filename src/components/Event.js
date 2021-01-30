import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, useParams } from "react-router-dom";
import {
	createSuccessNotification,
	createErrorNotification,
	clearNotification
} from "../reducers/notificationReducer";
import { newLike, removeEvent, newComment } from "../reducers/eventReducer";

import { Button, Form } from "react-bootstrap";

const Event = props => {
	const [redirect, setRedirect] = useState(false);

	const id = useParams().id;
	const event = props.events.find(event => event.id === id);

	const removeHandler = async () => {
		if (!window.confirm(`Do you really want to remove ${event.title}?`)) {
			return;
		}
		setRedirect(true);
		props.createErrorNotification(`Removed ${event.title}.`);
		props.removeEvent(event.id);
		setTimeout(() => {
			props.clearNotification();
		}, 5000);
	};

	if (!event) {
		return null;
	} else {
		const startYear = event.startDate.slice(0, 4)
		const startMonth = event.startDate.slice(5, 7)
		const startDay = event.startDate.slice(8, 10)
		const startHour = event.startDate.slice(11, 13)
		const startMinute = event.startDate.slice(14, 16)
		const endYear = event.endDate.slice(0, 4)
		const endMonth = event.endDate.slice(5, 7)
		const endDay = event.endDate.slice(8, 10)
		const endHour = event.endDate.slice(11, 13)
		const endMinute = event.endDate.slice(14, 16)



		return (
			<div style={{ height: "1000px" }}>
				<h2>{event.title}</h2>
				<p>Event date: {startDay}.{startMonth}.{startYear} {startHour}:{startMinute} - { endHour }:{endMinute}</p>			

				<p>Tapahtuma: {event.info}</p>

				{props.login ? (
					<Button onClick={() => removeHandler()}>Remove</Button>
				) : null}
			</div>
		);
	}
};

const dispatchToProps = {
	createSuccessNotification,
	createErrorNotification,
	clearNotification,
	removeEvent
};

const mapStateToProps = state => {
	return {
		login: state.login,
		events: state.events
	};
};

export default connect(mapStateToProps, dispatchToProps)(Event);
