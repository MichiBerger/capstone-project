import FilterList from './FilterList.js';

export default {
  title: 'components/FilterList',
  component: FilterList,
};

const Template = args => <FilterList {...args} />;

export const Default = Template.bind({});
Default.args = {
  phrases: [
    {
      name: 'Max',
      date: '25. März 2022',
      id: 'PYaHT9ymtyVHW2tCollee',
      isBookmarked: false,
      photo: 'https://source.unsplash.com/random',
      text: 'ahh kackscheisse!',
    },
  ]
};
