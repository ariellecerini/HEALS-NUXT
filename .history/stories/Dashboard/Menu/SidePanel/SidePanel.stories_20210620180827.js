import SidePanel from './SidePanel.vue';

export default {
  title: 'Dashboard/Side Panel',
  component: SidePanel,
  argTypes: {
    siteTitle: { control: {type: 'String'}}
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

