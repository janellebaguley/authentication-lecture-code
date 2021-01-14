import React, {Component} from 'react';
import {connect} from 'react-redux';
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

    }

    register = (e) => {
        e.preventDefault();

    }

    render(){
        const {email, password} = this.state;

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