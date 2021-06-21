import InfoModule from './InfoModule.vue';

export default {
  title: 'Dashboard/InfoModule',
  component: CardComponent
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InfoModule },
  template: '<info-module v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  content: {
      this: "this is stuff"
  },
  
  
};

