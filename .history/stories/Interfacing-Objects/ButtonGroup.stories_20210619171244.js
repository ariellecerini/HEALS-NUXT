// /ButtonGroup.stories.js

import ButtonGroup from './ButtonGroup.vue';

//👇 Imports the Button stories
import * as ButtonStories from 'Button.stories';

export default {
  component: ButtonGroup,
  title: 'ButtonGroup',
};

const Template = (args, { argTypes }) => ({
  components: { ButtonGroup },
  props: Object.keys(argTypes),
  template: '<ButtonGroup v-bind="$props" />',
});

export const Pair = Template.bind({});
Pair.args = {
  buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.Secondary.args }],
  orientation: 'horizontal',
};