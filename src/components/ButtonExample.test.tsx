import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './ButtonExample.stories';
import ButtonExample from './ButtonExample';

beforeAll(() => {
  window.alert = jest.fn();
});

const { PrimaryExample } = composeStories(stories);

describe('ButtonExample Component', () => {
  
  test('renders button with provided label', () => {
    render(<ButtonExample label="Submit" />);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  });

  test('displays label correctly', () => {
    const { getByText } = render(<ButtonExample label="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick event handler when clicked', () => {
    const onClickMock = jest.fn();
    render(<ButtonExample label="Click" onClick={onClickMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('triggers onClick event handler on click', () => {
    const onClick = jest.fn();
    render(<ButtonExample label="Click" onClick={onClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  test('PrimaryExample play function interaction', async () => {
    const { container } = render(<PrimaryExample />);
    
    await PrimaryExample.play({ canvasElement: container } as any);
  });
});
