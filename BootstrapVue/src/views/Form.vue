<template>
    <div class="mt-5 container">
        <h1>Formularios</h1>
        <form>
            <b-row>
                <b-col cols="12" md="6">
                    <b-form-input type="number" v-model="numero"></b-form-input>
                </b-col>
                <b-col cols="12" md="6">
                    <b-form-input type="texto" v-model="texto" placeholder="Texto" 
                        :state="comprobar"
                    ></b-form-input>
                    <small>Minimo 3 caracteres</small>
                </b-col>
            </b-row>
        </form>
        <hr>
        <div class="mt-2">
            <p>numero: {{numero}}</p>
        </div>
        <div class="mt-2">
            <p>Texto: {{texto}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Form',
    data(){
        return{
            texto:'',
            numero: 0
        }
    },
    computed: {
        comprobar(){
            return  this.texto.length > 2 ? true : false
        }
    },
}
</script>

<style>

</style>
