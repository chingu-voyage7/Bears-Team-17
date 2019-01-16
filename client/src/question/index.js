import React from 'react'

import PrimaryButton from '../common/buttons/Primary';
import {
  FormArea,
  FormBlock,
  FormInput,
  FormLabel,
  FormSubmit
} from './styled';

class Question extends React.Component {
  state = {
    title: "",
    description: "",
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  };
  onSubmit = () => {
    console.log('submit state:', this.state);
  };
  render () {
    return (
      <FormBlock>
        <FormLabel forHtml="title" >Title</FormLabel>
        <FormInput name="title" onChange={this.onChange} type="text" ></FormInput>
        <FormLabel forHtml="description" >Description</FormLabel>
        <FormArea
          cols="60"
          name="description"
          onChange={this.onChange}
          rows="8"
        >
        </FormArea>
        <FormSubmit>
          <PrimaryButton onClick={this.onSubmit} >Submit</PrimaryButton>
        </FormSubmit>
      </FormBlock>
    );
  }
}

export default Question;
