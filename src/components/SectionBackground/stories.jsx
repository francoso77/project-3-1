import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti omnis repellat commodi explicabo laborum, natus suscipit fuga, ex voluptas saepe doloribus necessitatibus quam. Laboriosam odio ipsum, sit veritatis beatae illo?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
