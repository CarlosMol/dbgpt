<template>
  <v-container mt-5>
    <v-card class="mx-auto">
      <h2 style="text-align: center" class="pt-4">{{ title }}</h2>
      <v-card-title>
        <v-text-field label="Buscar" single-line hide-details prepend-icon="mdi-magnify"
          v-model="search"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="openModal()">CREAR</v-btn>
      </v-card-title>

      <v-data-table :headers="headers" :items="items" :search="search">
        <template v-slot:header.actions>
          <span>Acciones</span>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon @click="openModal(true, item)" size="16">mdi-pencil</v-icon>
          <v-icon class="ml-2" @click="confirmDelete(item)" size="16">mdi-delete</v-icon>
        </template>
        <template slot="no-data">
          <v-alert :value="true">No hay registros</v-alert>
        </template>
      </v-data-table>
    </v-card>
    <FormModal @close="closeModal()" @reload="reloadData()" :title="title" :form="form" :open="open" :service="service"
      :initialData="initialData" :isEditing="isEditing"></FormModal>
  </v-container>
</template>

<script>
import FormModal from "@/components/FormModal";
import Swal from "sweetalert2";
import dataMixin from "@/mixins/dataMixin";

export default {
  mixins: [dataMixin],
  components: {
    FormModal,
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
    form: {},
    service: {},
  },
  beforeMount() { },
  data() {
    return {
      search: "",
      isEditing: false,
      open: false,
      initialData: {},
    };
  },
  watch: {},
  methods: {
    openModal(isEditing, item) {
      if (isEditing) {
        //-- FIXME --:
        if (item.FechaNacimiento) {
          const tzIndex = item.FechaNacimiento.indexOf("T")
          item.FechaNacimiento = item.FechaNacimiento.substring(0, tzIndex)
        }
        this.initialData = Object.assign({}, item);
        this.isEditing = true;
      }
      this.open = true;
    },
    confirmDelete(item) {
      //FIXME:
      Swal.fire({
        title: "¿Está seguro que desea eliminar este elemento?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteItem(item).then(() => {
            this.reloadData();
          });
        }
      });
    },
    closeModal() {
      this.initialData = {};
      this.open = false;
      this.isEditing = false;
    },
    reloadData() {
      this.$emit("reload");
    },
  },
};
</script>

<style></style>