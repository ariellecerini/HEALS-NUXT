import Card from './Card.vue';

export default {
    title: 'Components/Card',
    component: Card
  };

  export const Default = () => ({
    components: { Card },
    template: '<Card primary content="card" />',
  });