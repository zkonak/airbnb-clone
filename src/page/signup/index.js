import React from 'react';
import {SignUpForm} from './Form'

class SignUp extends React.Component {

    render() {
        return (
            <>
                <SignUpForm history={this.props.history} />
                
            </>
        )
    }
}

export default SignUp;