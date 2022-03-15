import ModalDeleteMessage from './ModalDeleteMessage.js';

export default {
  title: 'Components/ModalDeleteMessage',
  components: ModalDeleteMessage,
};

const Template = args => <ModalDeleteMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  deleteText: 'Dein Spruch wurde hinzugefügt',
  cancleText: '',
  messageTitle: '',
  messageText: '',
};
