import { connect } from 'react-redux';
import {getFormValues} from 'redux-form';

const App = (props) => {
      console.log(props.formStates);
}

function mapStateToProps(state) {
    return {
         formStates: getFormValues('SimpleForm')(state) // here 'form' is the name you have given your redux form 
    }
}

export default connect(mapStateToProps)(App)