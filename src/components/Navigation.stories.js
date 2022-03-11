import Navigation from './Navigation'

export default {
  title: 'Components/Navigation',
  components: Navigation,
}

const Template = args => <Navigation {...args} />;

export const Default = Template.bind({})
Default.args = {
  background: '#ff0', label: 'Button'
};