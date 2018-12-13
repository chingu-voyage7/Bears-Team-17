import React from 'react';
import { render } from 'react-testing-library';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders MyComponent', () => {
    const { getByText } = render(<MyComponent />);
    const text = getByText('MyComponent Text');
    expect(text).toBeDefined();
  });
});
