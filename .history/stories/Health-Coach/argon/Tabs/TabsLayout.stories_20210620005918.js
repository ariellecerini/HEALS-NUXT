import TabsLayout from './TabsLayout';

export default {
  title: 'Argon/TabsLayout',
  component: TabsLayout,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TabsLayout },
  template:
    '<tabs-layout> {{ slot }} </tabs-layout>',
});

export const LoggedIn = Template.bind({});
Default.args = {
  slot: "Placeholder Text",
};
  