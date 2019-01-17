import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import EntryForm from '.';
import * as actions from './actions';

afterEach(() => cleanup());

describe('Question entry form', () => {
  it('should request question save', () => {
    actions.saveQuestion = jest.fn();
    const { getByLabelText, getByText } = render(<EntryForm />);
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
