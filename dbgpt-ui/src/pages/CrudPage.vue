<template>
    <div>
        <crud-table :headers="headers" :items="items" :title="nombre" :form="form" :service="service"
            @reload="getAllData"></crud-table>
    </div>
</template>

<script>
import CrudTable from "@/components/CrudTable";
import dataMixin from "@/mixins/dataMixin";
import crudConfig from "@/config/crudConfig.js";

export default {
    mixins: [dataMixin],
    components: {
        CrudTable,
    },
    props: {
        nombre: String,
    },
    data() {
        return {
            items: [],
        };
    },
    watch:{
        nombre(oldVal,newVal){
            if(newVal!=oldVal){
                this.getAllData();
                this.$forceUpdate();
            }
        }
    },
    computed: {
        form() {
            return crudConfig[this.nombre]?.form || null;
        },
        service() {
            return crudConfig[this.nombre]?.service || null;
        },
        headers() {
            return crudConfig[this.nombre]?.headers || null;

        }
    }
};
</script>