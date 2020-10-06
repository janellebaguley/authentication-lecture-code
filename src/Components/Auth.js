import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {getUser} from '../redux/reducer';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        axios.post('/api/login', {email: this.state.email, password: this.state.password})
            .then(res => {
                // Place user info somewhere (local state, redux state)
                this.props.getUser(res.data);
                // Navigate user to dashboard
                this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    }

    register = (e) => {
        e.preventDefault();
        // Run register axios request
        axios.post('/api/register', {email: this.state.email, password: this.state.password})
            .then(res => {
                // Place user info somewhere (local state, redux state)
                this.props.getUser(res.data);
                // Navigate user to dashboard
                this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    }

    render(){
        const {username, email, password} = this.state;

        return (
            <main className='auth-flex'>
                <form className='auth-form'>
                    <input name='email' placeholder='Email' value={email} onChange={e => this.handleInput(e)}/>
                    <input type='password' name='password' placeholder='Password' value={password} onChange={e => this.handleInput(e)}/>
                    <button onClick={e => this.login(e)}>Log In</button>
                    <button onClick={e => this.register(e)}>Register</button>
                </form>
            </main>
        )
    }
}

export default connect(null, {getUser})(Auth);