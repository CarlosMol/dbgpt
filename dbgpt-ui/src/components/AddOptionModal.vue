<!-- AddOptionDialog.vue -->
<template>
  <v-dialog v-model="internalDialog" max-width="400px" @keydown.stop="">
    <v-card>
      <v-card-title>Agregar opción</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="newOption.type"
                label="Tipo"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="newOption.min"
                label="Valor mínimo"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="newOption.max"
                label="Valor máximo"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="cancel">Cancelar</v-btn>
        <v-btn color="blue darken-1" text @click="addOption">Agregar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
  },
  data() {
    return {
      internalDialog: this.dialog,
      newOption: {
        type: "",
        min: "",
        max: "",
      },
    };
  },
  watch: {
    dialog(val) {
      this.internalDialog = val;
    },
    internalDialog(val) {
      if (!val) this.$emit("update:dialog", val);
    },
  },
  methods: {
    cancel() {
      this.internalDialog = false;
    },
    addOption() {
      this.$emit("add-option", { ...this.newOption });
      this.newOption.type = "";
      this.newOption.min = "";
      this.newOption.max = "";
      this.internalDialog = false;
    },
  },
};
</script>
