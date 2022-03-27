import PhraseCard from './PhraseCard.js';

export default {
  title: 'components/PhraseCard',
  component: PhraseCard,
};

const Template = args => <PhraseCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Max",
  text: 'Das ist mein Papapa!',
  date: '22. Feb. 2022',
  isBookmarked: true
};
