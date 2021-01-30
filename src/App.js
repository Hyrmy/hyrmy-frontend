import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import Applies from "./components/Applies";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Events from "./components/Events";
import Event from "./components/Event";
import EventForm from "./components/EventForm";
import ApplyForm from "./components/ApplyForm";
import Contact from "./components/Contact";


//Reducers
import { setLoginFromToken } from "./reducers/loginReducer";
import { initializeEvents } from "./reducers/eventReducer";
import { initializeApplies } from "./reducers/applyReducer";

//Services
import eventService from "./services/events";
import applyService from "./services/applies";


const App = props => {
	const loggedLoginJSON = window.localStorage.getItem("loggedEventappLogin");

	useEffect(() => {
		props.initializeEvents();

		if (loggedLoginJSON) {
			const login = JSON.parse(loggedLoginJSON);
			props.setLoginFromToken(login);
			eventService.setToken(login.token);
			applyService.setToken(login.token);
			props.initializeApplies();

		}
	}, []);

	return (
		<div>
			<Router>
				<div>
					<Header />
				</div>
				<div class="container">

					<Notification />
					<Switch>
						<Route path="/events/:id">
							<Event />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/applyform">
							<ApplyForm />
						</Route>
						<Route path="/events">
							<Events />
						</Route>

						{props.login ? (
							<Route path="/addevent">
								<EventForm />
							</Route>
						) : (
								<Route path="/login">
									<LoginForm />
								</Route>
							)}
						{props.login ? (
							<Route path="/applies">
								<Applies />
							</Route>
						) : (null)}
						<Route path="*">
							<FrontPage />
						</Route>
						<Route>
							<FrontPage />
						</Route>
					</Switch>

				</div>
				<div>
					<Footer />
				</div>
			</Router>
		</div>
	);
};

const dispatchToProps = {
	setLoginFromToken,
	initializeEvents,
	initializeApplies
};
const mapStateToProps = state => {
	return {
		login: state.login,
		users: state.users
	};
};

export default connect(mapStateToProps, dispatchToProps)(App);
