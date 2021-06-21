import MyButton from './Button.vue';

export default {
  title: 'Dashboard/Button',
  component: MyButton
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  rounded: true,
  label: 'Button',
  active: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
