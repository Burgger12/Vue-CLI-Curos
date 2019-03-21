<template>
    <div class="mt-5 container">
        <h1>Formularios</h1>
        <form>
            <b-row>
               <b-col cols="12" class="mx-auto text-center p-2">
                    <h2>Primera clase de form</h2>
               </b-col>
                <b-col cols="12" md="6">
                    <b-form-input type="number" v-model="numero"></b-form-input>
                </b-col>
                <b-col cols="12" md="6">
                    <b-form-input type="text" v-model="texto" placeholder="Texto" 
                        :state="comprobar"
                    ></b-form-input>
                    <small>Minimo 3 caracteres</small>
                </b-col>
            </b-row>
        </form>
        <b-row>
            <b-col cols="12" md="6">
                <div class="mt-2">
                    <p>numero: {{numero}}</p>
                </div>
            </b-col>
            <b-col cols="12" md="6">
                <div class="mt-2">
                    <p>Texto: {{texto}}</p>
                </div>
            </b-col>
        </b-row>
        <hr>
        <form>
            <b-row>
                <b-col cols="12" md="12" class="text-center p-3">
                    <h2>Segunda clase de form</h2>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-select v-model="select" :options="animales"/>
                    <div v-if="select !== null">
                        <p class="alert alert-success p-2 mt-2">Selecciono: {{select}}</p>
                    </div>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                    <div v-if="radio !== null">
                        <p class="alert alert-primary mt-1 p-2 ">Selecciono: {{radio}}</p>
                    </div>
                </b-col>
                <b-col cols="12" md="4">
                    <b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
                    <div v-if="check.length > 0 ">
                        <p class="alert alert-primary mt-1 p-2 ">Selecciono: {{check}}</p>
                    </div>
                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
export default {
    name:'Form',
    data(){
        return{
            texto:'',
            numero: 0,
            select: null,
            animales:[
                {value: null, text: 'selecciones un animal'},
                {value: 'perro', text: 'Guau guau'},
                {value: 'gato', text: 'Miau miau'},
                {value: 'pato', text: 'Cuack Cuack'}
            ],
            radio:null,
            check:[],
            animalesRadio:[
                {value: 'perro', text: 'Guau guau'},
                {value: 'gato', text: 'Miau miau'},
                {value: 'pato', text: 'Cuack Cuack'}
            ]
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
