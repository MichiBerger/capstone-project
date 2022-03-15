import ModalPhraseAddedMessage from './ModalPhraseAddedMessage.js';

export default {
  title: 'Components/ModalPhraseAddedMessage',
  components: ModalPhraseAddedMessage,
};

const Template = args => <ModalPhraseAddedMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Dein Spruch wurde hinzugefügt',
};
