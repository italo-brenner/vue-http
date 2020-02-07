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
    async created() {
      const tarefa1 = await axios.get(`${config.apiURL}/tarefas/1`)
      const tarefa2 = await axios.get(`${config.apiURL}/tarefas/2`)
      console.log('Requisições simutaneas')
      console.log('Tarefa 1', tarefa1)
      console.log('Tarefa 2', tarefa2)
    }
}
</script>
