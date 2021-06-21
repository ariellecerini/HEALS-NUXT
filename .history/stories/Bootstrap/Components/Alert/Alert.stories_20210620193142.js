import Alert from './Alert.vue';

export default {
  title: 'Bootstrap/Alert',
  component: Alert
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Alert },
  template: '<alert v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  status: "primary",
  Message: "this is an alert"
};
export const Secondary = Template.bind({});
Secondary.args = {
    status: "secondary",
    Message: "this is an alert"
  
};

export const Success = Template.bind({});
Success.args = {
    status: "success",
    Message: "this is an alert"
  
};

export const Danger = Template.bind({});
Danger.args = {
    status: "Danger",
    Message: "this is an alert"
  
};

export const Warning = Template.bind({});
Warning.args = {
    status: "Warning",
    Message: "this is an alert"
  
};

export const info = Template.bind({});
info.args = {
    status: "info",
    Message: "this is an alert"
  
};

