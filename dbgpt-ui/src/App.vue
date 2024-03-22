<template>
  <div id="app">
    <v-app>
      <v-toolbar color="primary" dark :max-height="toolbarHeight">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>DB-GPT</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" app absolute clipped :style="{ top: toolbarHeight + 'px' }">
        <v-list>
          <template v-for="(item, i) in items">
            <!-- Renderiza v-list-group o v-list-item según isGroup -->
            <v-list-group v-if="item.isGroup" :key="i" :prepend-icon="item.icon">
              <template v-slot:activator>
                <v-list-item-content @click="toggleSubItems(item)">
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </template>
              <!-- Renderiza subopciones aquí -->
              <v-list-item v-for="(subItem, j) in item.subItems" :key="j" style="margin-left:20px"  @click="goTo(subItem.route)">
                <v-list-item-icon>
                  <v-icon v-text="subItem.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content @click="goTo(subItem)">
                  <v-list-item-title v-text="subItem.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <v-list-item v-else :key="i" :prepend-icon="item.icon" @click="goTo(item.route)">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content @click="goTo(item)">
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import menu from "@/assets/js/menuLateral";
export default {
  name: "App",
  data: () => ({
    selectedItem: 0,
    drawer: false,
    mini: true,
    toolbarHeight: 64,
    items: menu.items,
  }),
  methods: {
    toggleSubItems(item) {
      item.active = !item.active;
    },
    goTo(item) {
      this.$router.push(item.route);
    },
  },
};
</script>

<style></style>
