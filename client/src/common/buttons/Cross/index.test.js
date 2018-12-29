import React from 'react';
import { render } from 'react-testing-library';
import CrossButton from '.';

const cross_symbol = String.fromCharCode( 10799);

describe('Cross Button', () => {
  it('renders button', () => {
    const { container, getByText } = render(<CrossButton/>);
    expect(container.firstChild).toMatchSnapshot();
    const cross = getByText(cross_symbol);
    expect(cross).toBeDefined();
  });
});


