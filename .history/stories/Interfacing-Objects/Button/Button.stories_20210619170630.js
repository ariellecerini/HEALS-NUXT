// Button.stories.js

import Button from './Button.vue';

export default {
  component: Button,
  title: 'Components/Button',
};

export const Primary = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="Button" />',
});
export const Secondary = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="😄👍😍💯" />',
});
export const Tertiary = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="📚📕📈🤓" />',
});