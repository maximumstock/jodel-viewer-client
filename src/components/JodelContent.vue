<template>
    <div class="jodel-content" v-bind:style="{ background: `#${jodel.hex_color}`}">
      <img v-if="jodel.is_image" class="img-responsive" :src="jodel.image_url" />
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
}

.jodel-content > img{
  padding: 4px;
}

</style>
