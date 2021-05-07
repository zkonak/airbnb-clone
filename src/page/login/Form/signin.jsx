import React from 'react';
import {userService} from '../../../services';
import Button from '../../../components/button';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: null
        }
    }
    

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleClick = async (e) => {
        const {email,password} = this.state;

        try {
            const response = await userService.login(email,password);
            localStorage.setItem('token', response.data.token);
             localStorage.setItem('user_id', response.data.user.id_user);
             cookies.set('authcookie', response.data.token, { path: '/' });
            this.props.history.push('/');
        } catch(e) {
            this.setState({error: e.response.data.message });
        }
    }

    render() {
        return (
        <div class="loginForm">
            <h1>Login</h1>
            {this.state.error && <h6>{this.state.error}</h6>}
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <Button size="small" value="Login" handleClick={this.handleClick} />
        </div>
        )
    }
}

export default LoginForm;
