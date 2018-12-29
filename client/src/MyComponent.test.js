import React from 'react';
import { render } from 'react-testing-library';
import MyComponent from './MyComponent';

const cross_symbol = String.fromCharCode( 10799);

describe('MyComponent', () => {
  it('renders MyComponent', () => {
    const { container, getByText } = render(<MyComponent />);
    expect(container.firstChild).toMatchSnapshot();
    const text = getByText('Click Me');
    expect(text).toBeDefined();
    const cross = getByText(cross_symbol);
    expect(cross).toBeDefined();
  });
});

