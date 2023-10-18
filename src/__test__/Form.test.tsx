import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from '../components/Form';

test('Should get the value 88 when user enters 1', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '1');

  // Get span
  const spanResult = screen.getByText('8');

  // Verify that the input value has been updated
  expect(input).toHaveValue('1');
  expect(spanResult).toBeInTheDocument();
});

test('Should get the value 20 when user enters 2', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '2');

  // Get span
  const spanResult = screen.getByText('20');

  // Verify that the input value has been updated
  expect(input).toHaveValue('2');
  expect(spanResult).toBeInTheDocument();
});

test('Should get the value 33 when user enters 3', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '3');

  // Get span
  const spanResult = screen.getByText('33');

  // Verify that the input value has been updated
  expect(input).toHaveValue('3');
  expect(spanResult).toBeInTheDocument();
});

test('Should get the value 51 when user enters 4', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '4');

  // Get span
  const spanResult = screen.getByText('51');

  // Verify that the input value has been updated
  expect(input).toHaveValue('4');
  expect(spanResult).toBeInTheDocument();
});

test('Should get the value 67 when user enters 5', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '5');

  // Get span
  const spanResult = screen.getByText('67');

  // Verify that the input value has been updated
  expect(input).toHaveValue('5');
  expect(spanResult).toBeInTheDocument();
});

test('Should get the value 93 when user enters 6', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '6');

  // Get span
  const spanResult = screen.getByText('93');

  // Verify that the input value has been updated
  expect(input).toHaveValue('6');
  expect(spanResult).toBeInTheDocument();
});

test('Should get the value 116 when user enters 7', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '7');

  // Get span
  const spanResult = screen.getByText('116');

  // Verify that the input value has been updated
  expect(input).toHaveValue('7');
  expect(spanResult).toBeInTheDocument();
});

test('Should get the value 147 when user enters 8', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '8');

  // Get span
  const spanResult = screen.getByText('147');

  // Verify that the input value has been updated
  expect(input).toHaveValue('8');
  expect(spanResult).toBeInTheDocument();
});

test('Should get the value 172 when user enters 9', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '9');

  // Get span
  const spanResult = screen.getByText('172');

  // Verify that the input value has been updated
  expect(input).toHaveValue('9');
  expect(spanResult).toBeInTheDocument();
});

test('Should get the value 188 when user enters 10', async () => {
  render(<Form />);
  const input = screen.getByPlaceholderText('Ingrese un número');

  // Simulate typing the number
  await userEvent.type(input, '10');

  // Get span
  const spanResult = screen.getByText('188');

  // Verify that the input value has been updated
  expect(input).toHaveValue('10');
  expect(spanResult).toBeInTheDocument();
});