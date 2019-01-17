import React from 'react';
import { cleanup, render, wait } from 'react-testing-library';

import List from './List';
import * as actions from './actions';

afterEach(() => cleanup());

describe('Question list', () => {
  it('should request questions', async () => {
    actions.getQuestions = jest.fn(() => Promise.resolve({
      success: true,
      list: [
        { title: 'item 1', text: 'text 1' },
        { title: 'item 2', text: 'text 2' },
      ],
    }));
    const { getAllByText } = render(<List />);
    await wait(() => {
      const items = getAllByText(/item/);
      expect(items.length).toBe(2);
      expect(actions.getQuestions).toBeCalled();
    });
  });
});
