import MenuItem from './MenuItem';

export default {
  title: 'Dashboard/Menu Item',
  component: MenuItem,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MenuItem },
    template:
      '<menu-item :active="active" :type="type" :round="round">{{slot}}</menu-item>',
  });

  export const Active = Template.bind({});
Active.args = {
  active: true,
  slot: "Active Menu Item",
  round: true, 
  type: "primary"
};

export const Inactive = Template.bind({});
Inactive.args ={
    active: false,
    slot: "Inactive Menu Item",
    round: true, 
    type: "primary"

};
