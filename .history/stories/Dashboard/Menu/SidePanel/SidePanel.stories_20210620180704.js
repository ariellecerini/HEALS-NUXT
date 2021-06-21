import SidePanel from './SidePanel.vue';

export default {
  title: 'Dashboard/Side Panel',
  component: SidePanel,
  argTypes: {
    siteTitle: { control: 'String'},
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SidePanel },
  template: '<side-panel v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  showing: true,
  
};

