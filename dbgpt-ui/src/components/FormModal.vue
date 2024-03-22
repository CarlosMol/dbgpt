<template>
  <div>
    <v-dialog :max-width="`${maxWidth}px`" v-if="open" v-model="open" persistent>
      <v-card>
        <v-card-title class="title">
          {{ title }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <AutoForm
            ref="autoForm"
            :form="form"
            :initialData="initialData"
            @update-form-data="updateFormData"
          ></AutoForm>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions class="justify-end">
          <v-btn text @click="closeModal()">CANCELAR</v-btn>
          <v-btn @click="save()" color="primary">ACEPTAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AutoForm from "../components/AutoForm";
import swalMixin from "@/mixins/swalMixin";
import Swal from "sweetalert2";

export default {
  mixins: [swalMixin],
  components: {
    AutoForm,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    form: {},
    open: {
      type: Boolean,
      default: false,
    },
    maxWidth:{
      type:Number,
      default:600
    },
    initialData: {
      type: Object,
      default: () => ({}),
    },
    service: {},
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {},
    };
  },
  watch: {
    initialData: {
      deep: true,
      handler() {
        if (this.$refs.autoForm) {
          this.$refs.autoForm.emitFormData();
        }
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    async save() {
      this.showLoading();
      try {
        const operation = this.isEditing
          ? this.service.update
          : this.service.create;
        const result = await operation(this.formData);
        console.log(result);
        this.$emit("reload")
        this.showSuccessMessage();
      } catch (error) {
        console.log(error);
        this.showErrorMessage();
      } finally {
        Swal.hideLoading();
      }
    },

    updateFormData(data) {
      if (Object.keys(this.initialData).length > 0) {
        this.formData = data;
      }
    },
  },
};
</script>

<style>
</style>