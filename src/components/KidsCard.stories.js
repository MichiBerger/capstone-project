import KidsCard from './KidsCard.js';

export default {
  title: 'components/KidsCard',
  component: KidsCard,
};

const Template = args => <KidsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  kidsData: [
    {
      id: 0,
      name: 'Max',
      birthDate: '24.3.2022',
    },
    {
      id: 1,
      name: 'Paul',
      birthDate: '24.3.2022',
    },
  ]
};
