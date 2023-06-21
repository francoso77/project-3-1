/* eslint-disable import/no-anonymous-default-export */
import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
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
    <div style={{ height: '400vh' }}>
      <GoTop {...args} />
    </div>
  );
};
