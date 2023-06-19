import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Illo excepturi labore iure, inventore quam ipsa et cumque 
    sit maiores impedit aliquam dignissimos at? Saepe illum 
    officia enim velit quisquam illo?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
