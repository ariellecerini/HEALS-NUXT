import MenuItem from './MenuItem.vue';

export default {
  title: 'Dashboard/Menu Item',
  component: MenuItem
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MenuItem },
  template: '<menu-item @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  rounded: true,
  label: 'Button',
  active: true
};

