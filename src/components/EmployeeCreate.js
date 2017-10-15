import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  
  render() {
    const { name, phone, shift,  } = this.props;
    return (
      <Card>
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

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
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

const mapStateToProps = ({ EmployeeForm }) => {
  const { name, phone, shift } = EmployeeForm;

  return { name, phone, shift }; 
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
