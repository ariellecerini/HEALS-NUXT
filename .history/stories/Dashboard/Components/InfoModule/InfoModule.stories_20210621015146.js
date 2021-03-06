import InfoModule from './InfoModule.vue';

export default {
  title: 'Dashboard/InfoModule',
  component: InfoModule
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InfoModule },
  template: '<info-module v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Medical History"
};

