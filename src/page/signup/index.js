import React from 'react';
import {SignUpForm} from './Form'
import {LoginForm} from '../login/Form'

class SignUp extends React.Component {

    render() {
        return (
            <>
                <SignUpForm history={this.props.history} />
                <LoginForm history={this.props.history} />
                
            </>
        )
    }
}

export default SignUp;