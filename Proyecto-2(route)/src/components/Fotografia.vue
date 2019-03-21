<template>
    <div>   
        <h1>Foto desde componente: {{$route.params.id}} </h1>    
    </div>   
</template>
<script>
export default {
    name:'Foto'
}
</script>
<!-- $route.params.id para obtener el id del parametro que le paso en la ruta-->