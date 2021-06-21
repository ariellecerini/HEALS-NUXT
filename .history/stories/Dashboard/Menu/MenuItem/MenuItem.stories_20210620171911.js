import MenuItem from './MenuItem';

export default {
  title: 'Dashboard/Menu Item',
  component: MenuItem,
  argTypes: {
    active:{ control: { type: 'boolean'}},
    round:{ control: { type: 'boolean'}},
  }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MenuItem },
    template:
      '<menu-item v-bind="$props" />',
  });

  export const Active = Template.bind({});
Active.args = {
  active: true,
  round: true, 
  type: 'primary',
  pageName: 'Active'
};

export const Inactive = Template.bind({});
Inactive.args ={
    active: false,
    round: true, 
    type: 'primary',
    pageName: 'Active'
};

