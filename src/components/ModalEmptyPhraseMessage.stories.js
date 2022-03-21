import ModalEmptyPhraseMessage from './ModalEmptyPhraseMessage.js';

export default {
  title: 'components/ModalEmptyPhraseMessage',
  component: ModalEmptyPhraseMessage,
};

const Template = args => <ModalEmptyPhraseMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleText: "Upps...da fehlt noch was!",
  emptyPhrasetext: "Gehe zurück und markiere deinen Lieblingspruch einfach durch klicken auf das Herzsymbol!"
};