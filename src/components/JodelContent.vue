<template>
    <div class="jodel-content" v-bind:style="{ background: `#${jodel.hex_color}`}">
      <img v-if="jodel.image_url" class="img-responsive" :src="jodel.image_url" />
      <p v-else>{{jodel.message}}</p>
    </div>
</template>

<script>

export default {
  name: 'jodel-content',
  data () {
    return {}
  },
  props: {
    jodel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

.jodel-content {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.jodel-content > * {
  margin-bottom: 1px;
}

.jodel-content > p {
  text-align: left;
  padding: 5px 10px 5px 10px;
  color: white;
  background-color: inherit;
  font-family: inherit;
  font-size: inherit;
  border: 0px;
  white-space: pre-wrap;
}

.jodel-content > img{
    padding: 4px;
    margin: auto;
}

</style>
