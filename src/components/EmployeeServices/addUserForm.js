import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm,getFormValues } from 'redux-form'
import './addUser.css';

class SimpleForm extends Component {
    constructor(props) {
    super(props);
    this.state = {values: "null"};
    
  }

  render (){
const { handleSubmit, pristine, reset, submitting } = this.props;

  return (
      <div>
    <form onSubmit={<handleSubmit></handleSubmit>}>
      <div>
        <label>Employee ID</label>
        <div>
          <Field
            name="OrgId"
            component="input"
            type="text"
            placeholder="Org ID"
          />
        </div>
      </div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>OrgClient ID</label>
        <div>
          <Field
            name="OrgClientId"
            component="input"
            type="text"
            placeholder="OrgClient VDI"
          />
        </div>
      </div>
      <div>
        <label>Project Name</label>
        <div>
          <Field name="projectDetail" component="select">
            <option />
            <option value="NextGen_Stab">NextGen_Stab</option>
            <option value="NextGen_Rcv">NextGen_Rcv</option>
            <option value="NextGen">NextGen</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Shore information</label>
        <div>
          <Field
            name="shoreDetails"
            component="input"
            type="text"
            placeholder="Onshore / Ofshore Detail"
          />
        </div>
      </div>
      <div>
        <label>Billing Rate</label>
        <div>
          <Field
            name="billRate"
            component="input"
            type="text"
            placeholder="Billing Rate Details"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
    {this.state.values}
    </div>
  );
  }
};

SimpleForm= reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);

export default SimpleForm