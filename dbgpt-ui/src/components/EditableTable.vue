<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn small color="secondary" @click="addEditableRow">
        <v-icon small left>mdi-plus</v-icon>
        Agregar
      </v-btn>
    </div>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :items-per-page="10"
    >
      <template
        v-for="(column, index) in subform"
        v-slot:[`item.${column.value}`]="{ item }"
      >
        <v-edit-dialog
          :key="index"
          @save="saveItem(item, column.value)"
          return-value.sync="item[column.value]"
        >
          <div :class="{ 'cell-empty': !item[column.value] }">
            {{ item[column.value] || column.noDataMessage }}
          </div>
          <template v-slot:input>
            <v-text-field
              v-model="item[column.value]"
              :label="column.label"
              single-line
              counter
              required
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    headers: Array,
    items: Array,
    subform: Array,
  },
  data() {
    return {};
  },
  methods: {
    addEditableRow() {
      const newRow = {};
      this.subform.forEach((column) => {
        newRow[column.value] = "";
      });
      this.items.push(newRow);
    },
    saveItem() {
      this.$emit("update-items", this.items);
    },
  },
};
</script>

<style scoped>
.cell-empty {
  color: grey;
  font-style: italic;
}
</style>
