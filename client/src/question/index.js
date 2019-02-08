import React from 'react'

import PrimaryButton from '../common/buttons/Primary';
import { saveQuestion } from './actions';
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
    text: "",
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  };
  onSubmit = e => {
    e.preventDefault();
    const { title, text } = this.state;
    saveQuestion({ question: { title, text } });
  };
  render () {
    return (
      <FormBlock action="">
        <FormLabel htmlFor="title" >Title</FormLabel>
        <FormInput id="title" name="title" onChange={this.onChange} type="text" ></FormInput>
        <FormLabel htmlFor="text" >Description</FormLabel>
        <FormArea
          name="text"
          id="text"
          cols="60"
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
