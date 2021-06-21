import card from './Card.vue';

export default {
    title: 'Components/Card',
    component: card
  };

  export const Default = () => ({
    components: { card },
    template: '<Card primary content="card" />',
  });