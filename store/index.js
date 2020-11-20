import Vuex from 'vuex'
import axios from 'axios'

export const store = new Vuex.Store({
  state: {
    accessToken: null,
    refreshToken: null,
    Products: [],
    Product: null,
    Cart: [],
  },
  mutations: {
    setProducts(state, Products) {
      state.Products = Products
    },
    setProduct(state, Product) {
      state.Product = Product
    },
    updateStorage(state, { access, refresh }) {
      state.accessToken = access
      state.refreshToken = refresh
    },
    destroyToken(state) {
      state.accessToken = null
      state.refreshToken = null
    },
    AddToCart(state, { Product, quantity }) {
      state.Cart.push({
        Product,
        quantity,
      })
    },
  },
  actions: {
    getProducts({ commit }) {
      axios.get('http://127.0.0.1:8000/api/store/').then((response) => {
        commit('setProducts', response.data)
      })
    },
    addProductToCart({ commit }, { Product, quantity }) {
      commit('AddToCart', {
        Product,
        quantity,
      })
    },
    getProduct({ commit }, ProductId) {
      axios.get(`http://127.0.0.1/api/store/${ProductId}/`).then((response) => {
        commit('setProduct', response.data)
      })
    },
  },
})
