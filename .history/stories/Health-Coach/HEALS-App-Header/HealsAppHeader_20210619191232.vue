<template>
  <header class="header-global" style="background: white; width: 100%;">
    <BackButton />
    <BaseNav
      type="primary"
      style="background-color: white;"
      vow-menu1-model="sh"
    >
      <NuxtLink
        slot="brand"
        class="navbar-brand top-bar topbar-center-logo"
        varia-label="Heals Health Advisor"
        style="width: 100%;"
        to="/"
      >
        <img
          :src="require('~/assets/heals-header@2x.png')"
          alt="HEALS Health Advisor"
          style="width: 40%;  height: auto; display: block; margin-left: auto; margin-right: auto;"
        />
      </NuxtLink>

      <ul class="navbar-nav" style="padding: 4% 4% 0 9%;">
        <li v-for="(page, index) in pages" :key="index" class="nav-item active">
          <NuxtLink class="nav-link" :to="page.route">
            {{ page.label }}
          </NuxtLink>
        </li>

        <li>
          <h5 class="menu-section">Settings</h5>
        </li>

        <li
          v-for="(page, index) in settingsPages"
          :key="index"
          class="nav-item active"
        >
          <NuxtLink class="nav-link" :to="page.route">
            {{ page.label }}
          </NuxtLink>
        </li>
      </ul>
    </BaseNav>
  </header>
</template>
<script>
import BaseNav from "~/components/argon/BaseNav";
import CloseButton from "~/components/argon/CloseButton";
import BackButton from "~/components/BackButton.vue";
export default {
  components: {
    BaseNav,
    CloseButton,
    BackButton
  },
  data() {
    return {
      pages: [
        {
          label: "Home",
          route: "/"
        },
        {
          label: "Dietary Goals",
          route: "/guideline"
        },
        {
          label: "Performance",
          route: "/psummary"
        },
        {
          label: "Recommended Recipes",
          route: "/recipe"
        },
        {
          label: "Chat With Advisor",
          route: "/chat"
        }
      ],
      settingsPages: [
        {
          label: "Profile",
          route: "/profile"
        },
        {
          label: "Integrations and Permissions",
          route: "/integrations"
        },
        {
          label: "Log Out",
          route: "/logout"
        }
      ]
    };
  }
};
</script>
<style>
.name-plate {
  color: #fff;
}
.nav-modal-name-plate {
  color: blue;
}
</style>
