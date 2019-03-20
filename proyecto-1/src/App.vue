<template>
  <div id="app" class="container">
    <Cabecera></Cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue' //importamos nuestro componente
import Lista from './components/Lista.vue' //importamos nuestro componente

export default {
  name: 'app',
  components: {
    Cabecera,
    Lista /*agregamos el componente*/
  }
}
</script>

