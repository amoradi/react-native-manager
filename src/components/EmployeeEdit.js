import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `You upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, shift, phone } = state.EmployeeForm;

  return { name, shift, phone };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
