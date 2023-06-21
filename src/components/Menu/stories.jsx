import { Menu } from '.';

import linksMock from '../NavLinks/mock';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#',
      srcImg: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
