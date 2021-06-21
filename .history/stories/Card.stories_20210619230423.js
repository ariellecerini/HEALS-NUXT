import Card from './Card.vue';

export default { 
    component: Card,
    title: 'Components/Card'
  };
  
  //👇 We create a “template” of how args map to rendering
  const Template = (args, { argTypes }) => ({
    components: { Card },
    props: Object.keys(argTypes),
    template: '<Card />',
  });