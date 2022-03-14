import EmptyPhraseMessage from './EmptyPhraseMessage.js';

export default {
  title: 'components/EmptyPhraseMessage',
  component: EmptyPhraseMessage,
};

const Template = args => <EmptyPhraseMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleText: "22. Feb. 2022",
  emptyPhrasetext: "das ist mein..."
};