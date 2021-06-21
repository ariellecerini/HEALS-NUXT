// Button.stories.js

import HealsAppHeader from './HealsAppHeader.vue';
import '../healthcoach.css';
import './heals-header@2x.png';

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

