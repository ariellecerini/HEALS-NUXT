import MenuItem from './MenuItem';

export default {
  title: 'Dashboard/Menu Item',
  component: MenuItem,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MenuItem },
    template:
      '<menu-item :active="active"/>',
  });

  export const Active = Template.bind({});
Active.args = {
  active: true
};

export const Inactive = Template.bind({});
Inactive.args ={
    active: false
};
