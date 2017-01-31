<template>
  <div class="jodel">
    <div @click="showModal = true">
      <jodel-content :jodel="this.jodel"></jodel-content>
      <jodel-footer :jodel="this.jodel"></jodel-footer>
    </div>

    <jodel-modal :jodel="this.jodel" v-if="showModal" @close="showModal = false">
    </jodel-modal>

  </div>

</template>

<script>

import moment from 'moment'
import JodelModal from './JodelModal'
import JodelContent from './JodelContent'
import JodelFooter from './JodelFooter'

export default {
  name: 'jodel',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).locale('de').format('DD.MM.YY HH:mm');
    }
  },
  props: {
    jodel: {
      type: Object,
      required: true
    }
  },
  components: {
    JodelModal,
    JodelContent,
    JodelFooter
  }
}
</script>

<style>

.jodel {
  width: 96%;
  margin: auto;
}

</style>
