<template>
  <BaseWrapper
    dashboardName="Agents"
    :menuIcons="menuIcons"
    :toogleMenu="toogleMenu"
    bg__img="bg__img"
    bg__color="primary-color"
    profile="/provider/profile"
    notification="/provider/notifications"
  >
    <section class="mt-2">
      <div class="ui-dashboard-card">
        <div class="ui-dashboard-card-header">
          <div>
            <form class="d-flex align-items-center frm--card">
              <input
                type="text"
                placeholder="Find by name, email, phone etc"
                class=" form-control ctrl--fnd"
                id="searchRef"
              />
            </form>
          </div>
          <div class="ui-card-header-options">
            <div class="ui-group-button d-flex align-items-center"></div>
          </div>
        </div>
        <div class="ui-dashboard-card-body">
          <div class="table-responsive ">
            <table class="table">
              <thead>
                <tr>
                  <th class=" ui-capitalize fs-14">
                    Agent name
                  </th>
                  <th class=" pd-1 ui-capitalize fs-14">
                    Email
                  </th>
                  <th class=" pd-1 ui-capitalize fs-14">
                    Phone number
                  </th>
                  <th class=" pd-1 ui-capitalize fs-14">
                    Address
                  </th>
                  <th class=" pd-1 ui-capitalize fs-14">
                    State
                  </th>
                  <th class="pd-1"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="tr--lnk">
                  <td>calvin job</td>
                  <td>
                    cpuram1@gmail.com
                  </td>
                  <td>09032435465</td>
                  <td>
                    2, omiyale Ibadan
                  </td>
                  <td>Oyo</td>
                </tr>
                <tr class="tr--lnk">
                  <td>Dele Giwa</td>
                  <td>
                    seun@gmail.com
                  </td>
                  <td>08183938024</td>
                  <td>
                    65, Adebiyi street Joyce-B Road Mobil bus stop Ring road
                    Ibadan
                  </td>
                  <td>Oyo</td>
                </tr>
                <tr class="tr--lnk">
                  <td>Deola Ade</td>
                  <td>
                    Winnerokpere+998@gmail.com
                  </td>
                  <td>08096742583</td>
                  <td>test</td>
                  <td>Kaduna</td>
                </tr>
                <tr class="tr--lnk">
                  <td>
                    Olanrewaju Ola
                  </td>
                  <td>
                    lanreola011+777@gmail.com
                  </td>
                  <td>08055443322</td>
                  <td>
                    No 10 Adenugba street
                  </td>
                  <td>Lagos</td>
                </tr>
                <tr class="tr--lnk">
                  <td>
                    Olanrewaju Olanipekun
                  </td>
                  <td>
                    lanreola011+666@gmail.com
                  </td>
                  <td>08059397616</td>
                  <td>
                    no 3 Adenugba Street, Oregun, Lagos
                  </td>
                  <td>Lagos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="ui-dashboard-card-footer">
          <div class="ui-group-button npv--btn">
            <button disabled="" class="fs-14">
              <i class="fas fa-chevron-left onwhite"></i></button
            ><button disabled="" class="fs-14">
              <i class="fas fa-chevron-right onwhite"></i>
            </button>
          </div>
          <div class="ui-card-footer-options">
            <p class="onmineshaft mb-0  fs-14">
              Showing 1 0f 1 pages
            </p>
          </div>
        </div>
      </div>
    </section>
  </BaseWrapper>
</template>

<script>
export default {
  props: {
    menuIcons: {
      type: Boolean,
      required: true,
    },
    toogleMenu: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
