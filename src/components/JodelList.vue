<template>
  <div class="jodel-list col-md-4">
    <div class="jodel-list-header">
      <h3>
        {{sort}}
        <button v-on:click="refresh" style="vertical-align: middle;" class="btn btn-default">
          <span style="margin-top: 4px;" class="glyphicon glyphicon-refresh"></span>
        </button>
      </h3>

    </div>
    <ul class="list-unstyled jodel-list">
      <li v-for="jodel in jodels">
        <jodel :jodel="jodel"></jodel>
      </li>
    </ul>
  </div>
</template>

<script>
import Jodel from './Jodel'
import Api from '../api'

export default {
  name: 'jodel-list',
  data () {
    return {
      jodels: []
    }
  },
  methods: {
    loadJodels: function loadJodels() {
      Api.loadJodels(this, this.sort)
        .then((res) => {
          this.jodels = res.body;
        })
    },
    refresh: function refresh() {
      return this.loadJodels();
    }
  },
  mounted() {
    this.loadJodels();

  },
  components: {
    Jodel
  },
  props: {
    sort: {
      type: String,
      required: true
    },
    refreshDuration: {
      type: Number,
      required: false
    }
  }
}

</script>

<style>

h3 {
  text-align: center;
}

.jodel-list {
  padding-left: 0px;
  padding-right: 0px;
  overflow: scroll;
  max-height: 780px;
}

.jodel-list:nth-child(2n-1) {
  background-color: #eee;
}

</style>
