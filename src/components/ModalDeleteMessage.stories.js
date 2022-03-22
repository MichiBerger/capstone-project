import ModalDeleteMessage from './ModalDeleteMessage.js';

export default {
  title: 'Components/ModalDeleteMessage',
  components: ModalDeleteMessage,
};

const Template = args => <ModalDeleteMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  deleteText: 'Löschen',
  cancelText: 'Abbrechen',
  messageTitle: 'Spruch löschen',
  messageText: 'Möchtest du wirklich löschen',
};
