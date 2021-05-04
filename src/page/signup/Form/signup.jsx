import React from 'react';
import {userService} from '../../../services';
import Button from '../../../components/button';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
            first_name: "",
            last_name:"",
            email: "",
            password: "",
            role: "",
            error: null
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleClick = async (e) => {
        const {first_name,last_name,email,password,role} = this.state;

        try {
            const response = await userService.signup(first_name,last_name,email,password,role);
            //localStorage.setItem('token', response.data.token);
            this.props.history.push('/login');
        } catch(e) {
            this.setState({error: e.message});
        }
    }
    
    render() {
        return (
        <div className="signupForm">
            {this.state.error && <h6>{this.state.error}</h6>}
            <label for="email">Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            <label for="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <label for="first_name">First Name</label>
            <input type="first_name" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
            <label for="last_name">Last Name</label>
            <input type="last_name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
            
            <Button size="small" value="Sign In" handleClick={this.handleClick} />
        </div>
        )}
}
export default SignUp;