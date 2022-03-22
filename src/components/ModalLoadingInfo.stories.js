import ModalLoadingInfo from './ModalLoadingInfo.js';

export default {
  title: 'Components/ModalLoadingInfo',
  components: ModalLoadingInfo,
};

const Template = args => <ModalLoadingInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  loadingStatus: ""
};
