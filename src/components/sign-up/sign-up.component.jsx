import React from 'react';

import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = setState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={this.handleChange}
          label='display name'
          required
        />

        <FormInput
          type='text'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={this.handleChange}
          label='password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={this.handleChange}
          label='confirm password'
          required
        />
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
