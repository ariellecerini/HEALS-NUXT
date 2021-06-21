import card from './Card.vue';
import "./Card.css";

export default {
    title: 'Components/Card',
    component: card
  };

  export const Default = () => ({
    components: { card },
    template: '<card primary content="card" />',
  });

 