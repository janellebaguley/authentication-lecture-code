import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {clearUser} from '../redux/reducer';

const Dashboard = props => {
    // console.log(props)

    const logout = () => {
        axios.get('/api/logout')
            .then(() => {
                props.clearUser();
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <main className='dashboard'>
            <section className='user-info'>
                <h3>{props.user.email}</h3>
                <button onClick={logout}>Log Out</button>
            </section>
        </main>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {clearUser})(Dashboard);