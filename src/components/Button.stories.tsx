import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Primary button clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  onClick: () => alert('Secondary button clicked!'),
};
