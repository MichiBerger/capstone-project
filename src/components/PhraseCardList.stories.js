import PhraseCardList from './PhraseCard.js';

export default {
  title: 'components/PhraseCardList',
  component: PhraseCardList,
};

const Template = args => <PhraseCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  phraseText: 'Das ist mein Papapa!',
  date: '22. Feb. 2022',
};
