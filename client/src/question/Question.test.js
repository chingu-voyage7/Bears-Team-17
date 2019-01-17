import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import Question from '.';
import * as actions from './actions';

afterEach(() => cleanup());

describe('Question', () => {
  it.only('should request question save', () => {
    actions.saveQuestion = jest.fn();
    const { getByLabelText, getByText } = render(<Question />);
    const qentry = getByLabelText('Title');
    fireEvent.change(qentry, { target: { value: 'test title' }});
    expect(qentry.value).toBe('test title');
    const dentry = getByLabelText('Description');
    fireEvent.change(dentry, { target: { value: 'test description' }});
    expect(dentry.value).toBe('test description');
    const submit = getByText('Submit');
    submit.click();
    expect(actions.saveQuestion).toBeCalledWith({
      title: 'test title',
      text: 'test description',
    });
  });
});

