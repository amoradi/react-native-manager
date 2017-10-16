import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';

import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    const { name, phone, employeeUpdate } = this.props;

    return (
      <View>
        <CardSection>
          <Input
            value={name}
            label="Name"
            placeholder="Jane"
            onChangeText={value => employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            value={phone}
            label="Phone"
            placeholder="555-555-5555"
            onChangeText={value => employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.pickerLabelStyle}>Select Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  cardSectionStyle: {
    flexDirection: 'column'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
