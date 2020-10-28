import React from 'react'
import { connect } from 'react-redux'
import { createSuccessNotification, createErrorNotification, clearNotification } from '../reducers/notificationReducer'
import { Link } from "react-router-dom"
import { Table } from 'react-bootstrap'



const Applies = (props) => {

	return (
		<div style={{ height: "900px" }}>
			<h2>Applies</h2>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Residence</th>
						<th>Notes</th>
						<th>Hyy-member</th>
					</tr>
				</thead>
				<tbody>

					{props.visibleApplies.map(apply =>
						<tr key={apply.name}>
							<td>{apply.name}</td>
							<td>{apply.email}</td>
							<td>{apply.residence}</td>
							<td>{apply.notes}</td>
							{apply.hyyMember ? (<td>Yes</td>) : (<td>No</td>)}


						</tr>

					)}

				</tbody>

			</Table>

		</div >

	)
}


const appliesToShow = ({ applies }) => {
	return applies

}


const dispatchToProps = {
	createSuccessNotification,
	clearNotification,
	createErrorNotification
}
const mapStateToProps = (state) => {
	return {
		visibleApplies: appliesToShow(state),
		login: state.login
	}
}

export default connect(
	mapStateToProps,
	dispatchToProps
)(Applies)