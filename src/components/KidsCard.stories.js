import KidsCard from './KidsCard.js';

export default {
  title: 'components/KidsCard',
  component: KidsCard,
};

const Template = args => <KidsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Max',
  birthdate: '22.12.2022',
};
