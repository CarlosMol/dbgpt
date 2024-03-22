// swalMixin.js
import Swal from "sweetalert2";

export default {
  methods: {
    showLoading() {
      Swal.fire({
        title: "Procesando...",
        text: "Por favor espera.",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
    },
    showSuccessMessage(message = "Operación completada") {
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: true,
        confirmButtonText: "Cerrar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.closeModal();
        }
      });
    },
    showErrorMessage(
      message = "Ha ocurrido un error al realizar la operación. Por favor, inténtalo de nuevo."
    ) {
      Swal.fire({
        icon: "error",
        title: "Error en la operación",
        text: message,
      });
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
