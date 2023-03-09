<template>
    <table>
        <tr>
            <th v-for="campo in campos">
                <button @click="ordena(campo)"
                    class="cursor-pointed rounded text-lg bg-red-500 text-gray-200 hover:bg-amber-100 hover:text-gray-700">
                    {{ campo }}
                </button>
            </th>
        </tr>
        <tr v-for="fila in filas">
            <td v-for="valor in fila">{{ valor }}</td>
            <td><button v-on:click="borrar(fila.id)">Borrar</button></td>
            <td><button @click="editar(fila.id)">Editar</button></td>
        </tr>
    </table>
</template>

<script>
import axios from "axios";
export default {

    name: "tabla",
    props: ["filas_serializado", "columnas_serializado", "nombre"],
    data() {
        return {
            filas: [],
            campos: [],
            nombre: "",
        }
    },
    mounted() {
        this.filas = JSON.parse(this.filas_serializado);
        this.campos = JSON.parse(this.columnas_serializado);
    },
    methods: {
        ordena: function (campo) {
            this.filas = this.filas.sort((a, b) => {
                if (a[campo] > b[campo])
                    return 1;
                else
                    return -1
            })
        },
        editar: function (fila) {
            var url = window.location.href;
            url = url + "/" + fila + "/edit";
            window.location.href = url;
        },
        borrar: function (id) {
            var url = window.location.href;
            url = url + "/" + id;
            var self = this;

            axios.delete(url)
                .then((response) => {
                    var datos = response.data;

                    self.filas = response.data.alumnos;
                })
                //.catch((error =>
                //    alert(error)))
        },
    },
}

</script>

<style scoped></style>
