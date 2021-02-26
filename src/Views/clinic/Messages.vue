<template>
  <div class="dashboard">
    <Sidebar home="/clinic/home" />

    <main class="ui-dashboard-body sdbr--open">
      <div>
        <div>
          <div class="body">
            <DashboardNav title="Messages" />

            <section class="ui-body-content">
              <div class="ui-body-content-inner">
                <div class="ui-separate"></div>
                <section class="mt-2">
                  <div class="ui-dashboard-card">
                    <div class="ui-dashboard-card-header">
                      <div>
                        <form class="d-flex align-items-center frm--card">
                          <input
                            type="text"
                            placeholder="Find message by title"
                            class=" form-control ctrl--fnd"
                            id="searchRef"
                          />
                        </form>
                      </div>
                      <div class="ui-card-header-options">
                        <div class="ui-group-button d-flex align-items-center">
                          <div class="ui-group-button pl-1">
                            <router-link
                              to="/clinic/tips/add"
                              class="btn btn--xs bg-brand-green onwhite "
                              >Add Message</router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ui-dashboard-card-body">
                      <div class="text-center">
                        <h5 class="text__h5">
                          You currrently have no scheduled messages
                        </h5>
                      </div>
                      <div class="table-responsive"></div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
        <!-- footer -->
        <DashboardFooter />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import DashboardNav from "@/components/DashboardNav";
import DashboardFooter from "@/components/DashboardFooter";
export default {
  components: {
    Sidebar,
    DashboardNav,
    DashboardFooter,
  },
};
</script>

<style lang="scss" scoped>
@import "../../design/";
.body {
  background: #f5f8fd;
}
.text__h5 {
  color: rgb(51, 66, 97);
}

.onsilverlight {
  color: #7cafa0;
}
</style>
