import EmptyPhraseMessage from './EmptyPhraseMessage.js';

export default {
  title: 'components/EmptyPhraseMessage',
  component: EmptyPhraseMessage,
};

const Template = args => <EmptyPhraseMessage {...args} />;

export const Default = Template.bind({});
