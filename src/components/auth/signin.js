import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form'; 

class Signin extends Component {
    render() {
        return (
            <div className='sign-in'>
                sign in 
            </div>
        )
    }
}

Signin = reduxForm({
    form: 'Signin'
})(Signin); 

export default Signin;