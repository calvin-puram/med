]<template>
  <section class="ui-sidebar  sdbr--cllps">
    <div class=" ui-sidebar-primary1">
      <div class="ui-sidebar-primary-header ui-text-center">
        <div class="showcolumn ui__header">
          <div class="mobileHambuger" @click="toogleMenu">
            <img
              src="@/assets/img/bar.svg"
              alt="mobile hamburger"
              width="20px"
              height="20px"
            />
          </div>
          <img src="@/assets/img/medbarn.svg" alt="Logo" width="100px" />
        </div>

        <div class="pr-1 d-sm-none">
          <div class="hmb--btn but1">
            <span class=" fs-20 onsilverlight ui-hide-mobile-only"
              ><i class="fas fa-bars"></i
            ></span>
          </div>
          <div class="hmm--btn but2">
            <span class=" fs-20 brand-lendlot-blue ui-show-mobile-only"
              ><i class="fas fa-bars"></i
            ></span>
          </div>
        </div>
      </div>
      <div class="ui-sidebar-primary-body">
        <ul
          class="ui-sidebar-primary-links"
          v-for="Icons in sidebarIcons"
          :key="Icons.title"
        >
          <li v-if="Icons.title !== 'Notifications'">
            <router-link
              :to="Icons.to"
              class="ui-icon-animate "
              :title="Icons.title"
            >
              <img
                :src="Icons.img"
                :alt="Icons.title"
                width="20px"
                height="20px"
              />
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

<style lang="scss" scoped>
@import "../../design/";
.ui-sidebar-primary {
  position: relative;
  display: inline-block;
  width: 100% !important;
  height: 100%;
  vertical-align: top;
  background-color: #ffffff;
  z-index: 1;
}

.ui-sidebar-primary-body {
  width: 100%;
  display: block;
  padding-top: 2.85rem;
  position: absolute;
  bottom: 10px;
  top: 100px;
  overflow: scroll;
  height: 500px;
}

.showcolumn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mobileHambuger {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
</style>
