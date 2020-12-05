import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component {
    state = {
        email : '',
        password : ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({ [name]:value })
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span> Sign In with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    label="email"
                    handleChange={this.handleChange}
                    required />

                    
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    label="password"
                    handleChange={this.handleChange} 
                    required /> 

                    <CustomButton type="submit"> Submit Form </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignIn;