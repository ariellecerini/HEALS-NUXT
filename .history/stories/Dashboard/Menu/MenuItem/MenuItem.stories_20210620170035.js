import MenuItem from './MenuItem';

export default {
  title: 'Dashboard/Menu Item',
  component: MenuItem,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MenuItem },
    template:
      '<menu-item :active="active" :type="type" :round="round" :pageName="pageName" />',
  });

  export const Active = Template.bind({});
Active.args = {
  active: true,
  round: true, 
  type: "primary", 
  pageName: "Active"
};

export const Inactive = Template.bind({});
Inactive.args ={
    active: false,
    round: true, 
    type: "primary"

};

