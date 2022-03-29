import PhraseCard from './PhraseCard.js';

export default {
  title: 'components/PhraseCard',
  component: PhraseCard,
};

const Template = args => <PhraseCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Max',
  date: '25. März 2022',
  id: 'PYaHT9ymtyVHW2tCollee',
  isBookmarked: false,
  photo: "https://source.unsplash.com/random",
  text: 'ahh kackscheisse!',
};
