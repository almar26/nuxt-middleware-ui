<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#01579B"
      mini-variant
      mini-variant-width="90"
      dark
    >
      <v-avatar class="d-block text-center mx-auto mt-4" size="45">
        <v-icon color="white" size="45">mdi-coffee</v-icon>
      </v-avatar>
      <v-list flat class="mt-4">
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            active-class="border"
            :ripple="false"
            :to="item.to"
            router
            exact
          >
            <v-list-item-content>
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-subtitle align="center" class="mt-1 caption">
                {{ item.title }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div
        style="
          position: absolute;
          bottom: 20px;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          text-align: center;
        "
        
      >
        <!-- <v-icon>mdi-logout</v-icon><br /><span class="caption white--text">Logout</span> -->
        <!-- <v-btn @click="$auth.logout()" icon><v-icon>mdi-logout</v-icon></v-btn> -->

        <v-list flat class="mt-4">
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            active-class="border"
            :ripple="false"
            router
            @click="$auth.logout()"
          >
            <v-list-item-content>
              <v-icon>mdi-logout</v-icon>
              <v-list-item-subtitle align="center" class="mt-1 caption">
                Logout
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      </div>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />

    </v-app-bar>
    <v-main class="mt-2">
      <Nuxt />
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  middleware: ['auth', 'isBasic'],
  data() {
    return {
      selectedItem: 0,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-clipboard-list",
          title: "Inventory",
          to: "/inventory",
        },
        {
          icon: "mdi-shopping",
          title: "Product",
          to: "/product",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Inventory System",
    };
  },
};
</script>

<style>
.border {
  margin-left: 8px;
  margin-right: 8px;
  background: #0d47a1;
  border-radius: 10px;
  text-decoration: none;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle,
.theme--light.v-list-item .v-list-item__action-text {
  color: white !important;
}
</style>