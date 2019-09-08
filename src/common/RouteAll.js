import React from "react";
import { Router, browserHistory } from "react-router";
import Employee from '../components/Employee';
import Report from '../components/Report';
const Template = ({ title }) => (
  <div>
    <p className="page-info">This is the {title} page.</p>
  </div>
);
const Home = props => <Template title="Login" />;

const NotFound = props => <h1>404.. This page is not found!</h1>;
const RouteAll = () => (
  <Router history={browserHistory}>
    <Router path="/" component={Home} />
    <Router path="/reports" component={Report} />
    <Router path="/employee" component={Employee} />
    <Router path="*" component={NotFound} />
  </Router>
);

export default RouteAll;
