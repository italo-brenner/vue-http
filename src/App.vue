<template>
  <div id="app">

    <div class="jumbotron jumbrotron-fluid">
      <div class="container">
        <h1 class="display-4">Requisições HTTP no Vue</h1>
        <p class="lead">Usando biblioteca Axios para fazer chamada Ajax à uma API REST</p>
      </div>
    </div>

    <div class="container">

      <TarefasLista />

      <button
        class="btn btn-primary mt-4 mb-2"
        @click="download">
        Baixar Imagem
      </button>

      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: progresso + '%' }"
          :aria-valuenow="progresso"
          aria-valuemin="0"
          aria-valuemax="100">

          {{ progresso }} %
        </div>
      </div>
      
      <div v-if="imagem">
        <img :src="imagem" style="max-width: 100%">
      </div>

    </div>
  </div>
</template>

<script>

import axios from 'axios'
import config from './config/config'

import TarefasLista from './components/TarefasLista.vue'

export default {
    components: {
        TarefasLista
    },
    data() {
      return {
        progresso: 0,
        imagem: undefined
      }
    },
    async created() {
      const tarefa1 = await axios.get(`${config.apiURL}/tarefas/1`)
      const tarefa2 = await axios.get(`${config.apiURL}/tarefas/2`)
      console.log('Requisições simutaneas')
      console.log('Tarefa 1', tarefa1)
      console.log('Tarefa 2', tarefa2)
    },
    methods: {
      download(event) {
        axios.get(
          `http://localhost:8080/15-papel-de-parede-de-alta-qualidade-com-vista-para-a-ponte-queensboro.jpg`,
          {
            responseType: 'blob',
            onDownloadProgress: (progressEvent) => {
              console.log('Fazendo download...', progressEvent)
              this.progresso = ((progressEvent.loaded / progressEvent.total) * 100).toFixed(0)
            }
          }
        ).then(response => {
          console.log('Download concluído!', response)

          const reader = new window.FileReader()
          reader.readAsDataURL(response.data)
          reader.onload = () => {
            this.imagem = reader.result
          }
        })
      }
    }
}
</script>
