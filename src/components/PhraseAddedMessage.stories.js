import PhraseAddedMessage from './PhraseAddedMessage.js';

export default {
  title: 'Components/PhraseAddedMessage',
  components: PhraseAddedMessage,
};

const Template = args => <PhraseAddedMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Dein Spruch wurde hinzugefügt',
};
