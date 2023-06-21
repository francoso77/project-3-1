/* eslint-disable import/no-anonymous-default-export */
import { GridTwoColum } from '.';

export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: {
    title: 'JANUARY BRINGS US FIREFOX 85',
    text: `To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.`,
    srcImg: 'assets/images/gridtwocolum.svg',
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColum {...args} />
    </div>
  );
};
