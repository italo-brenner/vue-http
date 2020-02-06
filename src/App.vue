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

import TarefasLista from './components/TarefasLista.vue'

export default {
    components: {
        TarefasLista
    }
}
</script>
