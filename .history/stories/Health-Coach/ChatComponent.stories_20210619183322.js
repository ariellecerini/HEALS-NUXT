// Button.stories.js

import ChatComponent from './ChatComponent.vue';

export default { 
  component: ChatComponent,
  title: 'Health Coach App/Chat Component'
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { ChatComponent },
  props: Object.keys(argTypes),
  template: '<ChatComponent :class="chatclass" />',
});

//👇 Each story then reuses that template
export const TopLeft = Template.bind({});
TopLeft.args = { chatclass: 'chat top-left-chat' };

export const BottomLeft = Template.bind({});
BottomLeft.args = { chatclass: 'chat bottom-left-chat' };

export const BottomRight = Template.bind({});
BottomRight.args = { class: 'chat bottom-right-chat' };

export const TopRight = Template.bind({});
TopRight.args = { chatclass: 'chat top-right-chat' };

export const Right = Template.bind({});
Right.args = { chatclass: 'chat right-chat' };

export const Left = Template.bind({});
Left.args = { chatclass: 'chat left-chat' };
