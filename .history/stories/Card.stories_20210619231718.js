import card from './Card.vue';

export default {
    title: 'Components/Card',
    component: card
  };

  export const Default = () => ({
    components: { card },
    template: '<card primary content="card" />',
  });

  <stlye> 
      .card {
        width: 330px;
        border-radius: 16px;
        background: #553333;
}
  </stlye>