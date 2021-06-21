import Button from './Button.vue';

export default {
  component: Button,
  title: 'Interfacing Objects/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }, 
    label: {
        control: {type: 'text'}
    }
  }

};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Button },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Button v-bind="args" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  options: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  options: secondary,
  label: 'Secondary Button',
};