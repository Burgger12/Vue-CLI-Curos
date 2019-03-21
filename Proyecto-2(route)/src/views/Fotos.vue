<template>
    <div>
        <h1>Galeria de fotos</h1>

        <router-link :to="{name: 'fotos', params:{id: item}}" 
            v-for="(item,index) of fotosArreglo" :key="index">
            <button>Foto {{item}}</button>
        </router-link>

        <Foto />

        <button  @click="home">Home</button>
        <button  @click="anterior">Anterior</button>
        <button  @click="siguiente">Siguiente</button>
    </div> 
</template>
<!-- 
Comentarios:
    router-link to="1" toma la ruta en la que esta parado y le agrega el parametro
    <router-link :to="{name: 'fotos', params:{id: item}}" cuando necesitamos hacer rutas dinamicas
     usamos :to y le pasamos un objeto que contendra, name que es el nombre de la ruta, params que recibe un 
     objeto con los parametros en este caso el nombre del parametro y el valor que tendra en este caso item
-->
<script>
//importo el componente que voy a llamr foto
import Foto from "@/components/Fotografia.vue";

export default {
    name: 'Fotos',
    components:{
        Foto
    },
    data(){
        return{
            fotosArreglo:[1,2,3,4]
        }
    },
    methods: {
        home(){
            this.$router.push('/');
        },
        anterior(){
            this.$router.go(-1);
        },
        siguiente(){
            this.$router.go(1);
        }
    }
}

</script>

<style>

</style>
