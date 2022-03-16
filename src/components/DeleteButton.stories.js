import DeleteButton from './DeleteButton.js';

export default {
  title: 'components/DeleteButton',
  component: DeleteButton,
};

const Template = args => <DeleteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  fill: '#000',
  disabled: false,
};
