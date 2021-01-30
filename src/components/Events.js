import React from 'react'
import { connect } from 'react-redux'
import { removeEvent } from '../reducers/eventReducer'
import { createSuccessNotification, createErrorNotification, clearNotification } from '../reducers/notificationReducer'
import { Link } from "react-router-dom"




const Events = (props) => {
	const rowStyle = {
		borderRadius: '25px',
		background: "black",
		padding: "25px",
		width: "600px",
	};
	const tableStyle = {
		borderCollapse: "separate",
		borderSpacing: "50px"

	};



	const now = new Date().toISOString();
	const pastEvents = props.visibleEvents.filter(hyrmyEvent => hyrmyEvent.endDate < now)
	const futureEvents = props.visibleEvents.filter(hyrmyEvent => hyrmyEvent.endDate > now)


	futureEvents.sort(function (a, b) {
		return new Date(a.startDate) - new Date(b.startDate)
	 })

	const nextEvent = futureEvents.shift();


	console.log('pastevents: ', pastEvents)
	console.log('futureEvents: ', futureEvents)
	console.log('now: ', now)


	console.log('nextEvent: ', nextEvent);
	return (
		<div style={{ height: "900px" }}>
			
			<h2>Events</h2>
			<h3>Next Event</h3>
			
			{!nextEvent ? <h3>Ei tulevia tapahtumia</h3>
				:
				<div>
					
					<h3> {`${nextEvent.title}`}</h3>
					<p>{`${nextEvent.startDate.slice(8, 10)}.${nextEvent.startDate.slice(5, 7)}.${nextEvent.startDate.slice(0, 4)} ${nextEvent.startDate.slice(11, 16)} - ${nextEvent.endDate.slice(11, 16)}`}</p>
					<p>{`${nextEvent.info}`}</p>
					<h3>Muut tulevat tapahtumat</h3>

					<table style={tableStyle}>
						{futureEvents.map(event =>
							<tr key={event.id} style={rowStyle}>
								<td style={rowStyle}>
									<Link to={`events/${event.id}`} style={{ color: "white" }} ><h3>{`${event.title}`}</h3></Link>
								</td>
							</tr>
						)}
					</table>
					<h3>Menneet tapahtumat</h3>
					<table style={tableStyle}>
						{pastEvents.map(event =>
							<tr key={event.id} style={rowStyle}>
								<td style={rowStyle}>
									<Link to={`events/${event.id}`} style={{ color: "white" }} ><h3>{`${event.title}`}</h3></Link>
								</td>
							</tr>
						)}
					</table>
				</div>			
			}
		</div>
		
	)
}


const eventsToShow = ({ events }) => {
	return events

}


const dispatchToProps = {
	removeEvent,
	createSuccessNotification,
	clearNotification,
	createErrorNotification
}
const mapStateToProps = (state) => {
	return {
		visibleEvents: eventsToShow(state),
		login: state.login
	}
}

export default connect(
	mapStateToProps,
	dispatchToProps
)(Events)
