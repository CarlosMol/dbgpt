export default {
  methods: {
    async getAllData() {
      try {
        let result = await this.service.list();
        console.log("result", result);
        if (result.data) {
          this.items = result.data;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Aquí puedes manejar el error de acuerdo a tus necesidades
      }
    },
    async deleteItem(id) {
      try {
        let result = await this.service.delete(id);
        console.log(result);
      } catch (error) {
        console.error("Error deleting item:", error);
        // Aquí puedes manejar el error de acuerdo a tus necesidades
      }
    },
  },
  beforeMount() {
    this.getAllData();
  },
};
