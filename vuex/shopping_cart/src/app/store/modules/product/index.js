import axios from 'axios';

// STATE
const state = {
  productItems: []
};

// MUTATIONS
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  }
};

// ACTIONS
const actions = {
  getProductItems({ commit }) {
    axios
      .get('/api/products')
      .then(response => commit('UPDATE_PRODUCT_ITEMS', response.data));
  }
};

// GETTERS
const getters = {
  productItems: state => state.productItems
};

// STORE
const productModule = {
  state,
  mutations,
  actions,
  getters
};

export default productModule;
