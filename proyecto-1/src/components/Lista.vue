<template>
    <div>
        <ul class="list-group">
            <li v-for="(item,index) of arrayOrdenado" :key="item.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center">
               {{index}} {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
            
        </ul>
        <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
    </div>
</template>
<script>

    /*:key="item.id" usamos esto aunque no tengamos id, solo para que nos quite el error*/
    /*para poder usar los maps debemos importarlos */

    import{mapState, mapMutations} from 'vuex';
    export default {
        name:'Lista',/*nombre del componente */
        computed:{
            ...mapState(['frutas']),
            arrayOrdenado(){
                //compara a y b y con la funcion de flechas retorno el array ordenado
                return this.frutas.sort((a, b) => b.cantidad - a.cantidad);
            }
        },
        methods:{
            ...mapMutations(['aumentar','reiniciar'])
        }
    }
</script>

<style>

</style>
   