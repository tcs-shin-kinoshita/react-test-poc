import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  
  test('renders button with provided label', () => {
    render(<Button label="Submit" />);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  });

  test('displays label correctly', () => {
    const { getByText } = render(<Button label="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick event handler when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click" onClick={onClickMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('triggers onClick event handler on click', () => {
    const onClick = jest.fn();
    render(<Button label="Click" onClick={onClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
