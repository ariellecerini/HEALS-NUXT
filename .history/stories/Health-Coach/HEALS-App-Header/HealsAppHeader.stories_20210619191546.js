// Button.stories.js

import HealsAppHeader from './HealsAppHeader.vue';
import '../healthcoach.css';
import './heads-header@2x.png';

export default { 
  component: ChatComponent,
  title: 'Health Coach App/Chat Component'
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { ChatComponent },
  props: Object.keys(argTypes),
  template: '<ChatComponent :class="chatclass">{{ slots }}</ChatComponent>',
});

//👇 Each story then reuses that template
export const TopLeft = Template.bind({});
TopLeft.args = { chatclass: 'chat top-left-chat', slots: "Placeholder" };

export const BottomLeft = Template.bind({});
BottomLeft.args = { chatclass: 'chat bottom-left-chat', slots: "Placeholder" };

export const BottomRight = Template.bind({});
BottomRight.args = { class: 'chat bottom-right-chat', slots: "Placeholder" };

export const TopRight = Template.bind({});
TopRight.args = { chatclass: 'chat top-right-chat', slots: "Placeholder" };

export const Right = Template.bind({});
Right.args = { chatclass: 'chat right-chat', slots: "Placeholder" };

export const Left = Template.bind({});
Left.args = { chatclass: 'chat left-chat', slots: "Placeholder" };
