<template>
  <div class="jodel-footer" v-bind:style="{ background: `#${jodel.hex_color}`}">
    <span class="glyphicon glyphicon-chevron-up"></span> {{jodel.vote_count}}
    <span class="pull-right">{{jodel.location_name}} - {{formatDate(jodel.created_at)}}</span>
    <br/>
    <span>{{jodel.child_count}} Kommentare</span> - {{jodel.pin_count}} Pins
  </div>

</template>

<script>

import moment from 'moment'

export default {
  name: 'jodel-footer',
  data () {
    return {}
  },
  props: {
    jodel: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).locale('de').format('DD.MM.YY HH:mm');
    }
  }
}
</script>

<style>

.jodel-footer {
  text-align: left;
  padding: 3px 10px 3px 10px;
  margin-bottom: 15px;
  color: white;
  opacity: .7;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

</style>
