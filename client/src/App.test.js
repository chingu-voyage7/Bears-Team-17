import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitForElement } from 'react-testing-library';
import { FetchMock } from '@react-mock/fetch';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const renderComponent = () =>
  render(
    <FetchMock
      mocks={[
        { matcher: '/test', method: 'GET', response: { success: true, message: 'ok' } },
      ]}
    >
      <App />
    </FetchMock>
  );

it('communicates with backend', async () => {
  const { getByText } = renderComponent();
  const msg = getByText(/waiting for backend response/);
  expect(msg).toBeDefined();
  await waitForElement(() => getByText(/backend is responding/));
});

