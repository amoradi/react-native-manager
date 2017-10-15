import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.emailChange.bind(this);
    this.onPasswordChange = this.passwordChange.bind(this);
    this.onLogin = this.login.bind(this);
  }

  emailChange(txt) {
    this.props.emailChanged(txt);
  }

  passwordChange(txt) {
    this.props.passwordChanged(txt);
  }

  login() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderBtn() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onLogin}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.props.password}
            onChangeText={this.onPasswordChange}
          />
        </CardSection>
        <Text style={styles.errorStyles}>{ this.props.error }</Text>
        <CardSection>
          {this.renderBtn()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyles: {
    fontSize: 20, 
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, 
  { 
    emailChanged,
    passwordChanged,
    loginUser 
  })(LoginForm);
