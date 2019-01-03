import React from 'react';
import { render } from 'react-testing-library';
import PrimaryButton from '.';

describe('PrimaryButton', () => {
  it('renders', () => {
    const { getByText } = render(<PrimaryButton>Click Me</PrimaryButton>);
    const text = getByText('Click Me');
    expect(text).toBeDefined();
  });
});

