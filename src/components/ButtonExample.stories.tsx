import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import ButtonExample from './ButtonExample';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default {
  title: 'Example/ButtonExample',
  component: ButtonExample,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <ButtonExample {...args} />;

export const PrimaryExample = Template.bind({});
PrimaryExample.args = {
  label: 'Primary Button',
  onClick: () => alert('Primary button clicked!'),
};

PrimaryExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const button = await canvas.getByRole('button', { name: /Primary Button/i });

  const onClickMock = jest.fn();
  button.onclick = onClickMock;

  await userEvent.click(button);

  expect(onClickMock).toHaveBeenCalled();
};

export const SecondaryExample = Template.bind({});
SecondaryExample.args = {
  label: 'Secondary Button',
  onClick: () => alert('Secondary button clicked!'),
};
