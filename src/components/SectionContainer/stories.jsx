import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
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
      <SectionContainer {...args} />
    </div>
  );
};
