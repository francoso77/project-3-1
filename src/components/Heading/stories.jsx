/* eslint-disable import/no-anonymous-default-export */
import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Aqui o texto está escuro...',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'Aqui o texto está CLARooooo',
  colorDark: false,
};