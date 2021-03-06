const API_URL = 'http://tim.maximumstock.net/api/v1/';

export default {

  loadJodels(ctx, sort) {
    return ctx.$http.get(`${API_URL}jodels?sort=${sort}`);
  },

  loadComments(ctx, jodel_id) {
    return ctx.$http.get(`${API_URL}jodels/${jodel_id}/comments`);
  }

}
