<template>
  <div>
    <v-row align="center" justify="space-between" class="flex-wrap d-flex fill-height" v-if="form !== undefined"
      :ref="'layout'">
      <template>
        <v-col class="px-1" v-for="(item, index) in form.fields" :key="index" :cols="item.size">

          <v-text-field v-if="item.type === 'text'" v-model="currentData[item.value]" :label="item.label"
            :type="item.auxType"></v-text-field>

          <v-menu v-if="item.type === 'date'" ref="menuBirthDate" v-model="menuBirthDate"
            :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="currentData[item.value]" :label="item.label" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="currentData[item.value]"
              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10)"></v-date-picker>
          </v-menu>
          
          <div v-if="item.type === 'table'">
            <editable-table :headers="item.headers" :items="options" :subform="item.subform"
              @update-items="currentData[item.value] = $event"></editable-table>
          </div>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import EditableTable from "./EditableTable.vue";
export default {
  props: {
    form: {},
    initialData: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { EditableTable },
  data() {
    return {
      currentData: {},
      options: [],
      date: null,
      menuBirthDate: false,
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  beforeMount() {
    if (this.initialData) {
      this.currentData = this.initialData;
    }
  },
  methods: {
    emitFormData() {
      this.$emit("update-form-data", this.currentData);
    },
    saveRef(date,ref) {
      this.$refs[ref].save(date)
    },
  },
};
</script>

<style></style>