import Card from './CardComponent.vue';

export default {
  title: 'Dashboard/Components/Card',
  component: Card,

};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<card v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  content: placeholder
};

