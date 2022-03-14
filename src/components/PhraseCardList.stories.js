import PhraseCardList from './PhraseCard.js';

export default {
  title: 'components/PhraseCardList',
  component: PhraseCardList,
};

const Template = args => <PhraseCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Das ist mein Papapa!',
  date: '22. Feb. 2022',
};
