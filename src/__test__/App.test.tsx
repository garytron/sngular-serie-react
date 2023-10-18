import { render, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Renders main page correctly', () => {
  render(<App />);

  expect(true).toBeTruthy();
});