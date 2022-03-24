import Header from './Header.js';

export default {
  title: 'Components/Header',
  components: Header,
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});

