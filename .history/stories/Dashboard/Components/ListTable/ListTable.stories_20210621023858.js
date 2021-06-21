import ListTable from './ListTable.vue';

export default {
  title: 'Dashboard/ListTable',
  component: ListTable
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ListItem },
  template: '<list-item v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  entry: "Insert line-item here"
};

