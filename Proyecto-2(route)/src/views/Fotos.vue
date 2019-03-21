<template>
    <div>
        <h1>Galeria de fotos</h1>
        <Foto />
    </div> 
</template>

<script>
//importo el componente que voy a llamr foto
import Foto from "@/components/Fotografia.vue";

export default {
    name: 'Fotos',
    components:{
        Foto
    }
}

</script>

<style>

</style>
