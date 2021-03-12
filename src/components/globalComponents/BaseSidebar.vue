<template>
  <section class="ui-sidebar ssbar--open ">
    <div class="ui-sidebar-primary ssbar--open">
      <div class=" ui-sidebar-primary-header">
        <div
          class="d-flex align-items-center justify-content-between ui__header"
        >
          <img src="@/assets/img/medbarn.svg" alt="Logo" width="100px" />

          <div class="mobileHambuger" @click="toogleMenu">
            <img
              src="@/assets/img/bar.svg"
              alt="mobile hamburger"
              width="20px"
              height="20px"
            />
          </div>
        </div>
      </div>
      <div class="sidebar ">
        <ul
          class="ui-sidebar-primary-links"
          v-for="Icons in sidebarIcons"
          :key="Icons.title"
        >
          <li v-if="Icons.title !== 'Notifications'">
            <router-link
              class="ui-icon-animate"
              :title="Icons.title"
              :to="Icons.to"
              ><img
                :src="Icons.img"
                :alt="Icons.title"
                width="20px"
                height="20px"
              /><span class="lnk--text brand-dblue  fs-16">{{
                Icons.title
              }}</span>

              <span
                v-if="Icons.title === 'Clinics'"
                class="lnk--text brand-orange ui-pull-right ml-3  fs-14"
                >18</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["menuIcons"]),
  props: {
    sidebarIcons: {
      type: Array,
      required: true,
    },
    showProfile: {
      type: String,
      required: false,
    },
  },
  methods: {
    ...mapActions(["toogleMenu"]),
  },
};
</script>
<style lang="scss">
@import "../../design/";
.ui__header {
  width: 80%;
  margin: 1rem auto;
}

.sidebar {
  margin-top: 2rem;
}

@media screen and (max-width: 1024px) {
  .ui-sidebar-primary-body {
    top: 190px;
    height: 100%;
  }
}

@media (max-width: 789px) {
  .ui-sidebar {
    margin-left: 65px;
    width: 220px !important;
  }

  .ui-sidebar-primary-body {
    height: 700% !important;
  }
}

@media (max-width: 360px) {
  .ui-sidebar {
    margin-left: 65px;
    width: 220px !important;
    z-index: 2000;
  }

  .ui-sidebar-primary-body {
    height: 700% !important;
  }
}
</style>
