import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Button from './Button';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => console.log('Button clicked'),
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Primary Button/i });
  await userEvent.click(button);
  expect(button).toHaveTextContent('Primary Button');
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  onClick: () => console.log('Secondary button clicked'),
};

Secondary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Secondary Button/i });
  await userEvent.click(button);
  expect(button).toHaveTextContent('Secondary Button');
};
