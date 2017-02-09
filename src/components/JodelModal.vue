<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="jodel-modal">
            <!-- <div class="jodel-parent">
                <jodel-content :jodel="this.jodel"></jodel-content>
                <jodel-footer :jodel="this.jodel"></jodel-footer>
            </div> -->

            <div class="jodel-comments">
              <ul class="list-unstyled jodel-list">
                <li v-for="comment in comments">
                  <jodel-content :jodel="comment"></jodel-content>
                  <jodel-footer-small :jodel="comment"></jodel-footer-small>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import moment from 'moment'
import Api from '../api'
import JodelContent from './JodelContent'
import JodelFooter from './JodelFooter'
import JodelFooterSmall from './JodelFooterSmall'

export default {
  name: 'jodel-modal',
  data () {
    return {
      comments: []
    }
  },
  methods: {
    loadComments: function loadComments(jodel_id) {
      return Api.loadComments(this, jodel_id)
        .then((res) => {
          this.comments = res.body.map(e => {
            var o = e;
            o.oj = (this.jodel.user_handle === e.user_handle) ? true : false;
            return o;
          });
        })
    }
  },
  mounted() {
    this.loadComments(this.jodel.post_id);
  },
  props: {
    jodel: {
      type: Object,
      required: true
    }
  },
  components: {
    JodelContent,
    JodelFooter,
    JodelFooterSmall
  }
}
</script>

<style>

.jodel-list {
  overflow: scroll;
  background-color: white !important;
}

.jodel-list > li {
  margin-top: 5px;
}


.jodel-parent {
  margin-bottom: 10px;
}

.jodel-comments {
  margin-top: 5px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90%;
  max-width: 600px;
  margin: 20px auto;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
