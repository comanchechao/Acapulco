import Vuex from 'vuex'
import axios from 'axios'
import { auth } from '@/plugins/firebase'

export const store = new Vuex.Store({
  state: {
    accessToken: null,
    refreshToken: null,
    Products: [],
    Product: null,
    Cart: [],
    CartDisplay: false,
    user: null,
  },
  mutations: {
    setAuthUser(state, user) {
      state.user = user
    },
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
      const productInCart = state.Cart.find((item) => {
        return item.Product.id === Product.id
      })

      if (productInCart) {
        productInCart.quantity += quantity
        return
      }

      state.Cart.push({
        Product,
        quantity,
      })
    },
    ToggleShowCart(state) {
      state.CartDisplay = !state.CartDisplay
    },
  },
  // getters: {
  //   loggedIn(state) {
  //     return state.accessToken != null;
  //   },
  // },
  actions: {
    SET_AUTH_USER: async ({ commit }) => {
      try {
        const user = auth().currentUser
        if (user) {
          await commit('setAuthUser', {
            id: user.uid,
            email: user.email,
            name: user.displayName,
          })
        } else {
          commit('setAuthUser', null)
        }
      } catch (error) {
        console.log(error)
      }
    },
    CREATE_USER_WITH_EMAIL_AND_PASSWORD: async (_, data) => {
      try {
        const { email, displayName, password } = data
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password
        )
        if (response.user) {
          await response.user.updateProfile({ displayName })
          return Promise.resolve()
        }
      } catch (error) {
        return Promise.reject(error)
      }
    },
    SIGN_IN_WITH_EMAIL_AND_PASSWORD: async (_, data) => {
      try {
        const { email, password } = data
        const response = await auth().signInWithEmailAndPassword(
          email,
          password
        )
        if (response.user) {
          return Promise.resolve()
        }
      } catch (error) {
        return Promise.reject(error)
      }
    },
    SIGN_OUT: async () => {
      try {
        return await auth()
          .signOut()
          .then(() => {
            return Promise.resolve()
          })
      } catch (error) {
        return Promise.reject(error)
      }
    },
    RESET_PASSWORD: async () => {
      try {
        const user = auth().currentUser
        return await auth()
          .sendPasswordResetEmail(user.email)
          .then(() => {
            return Promise.resolve()
          })
      } catch (error) {
        return Promise.reject(error)
      }
    },
    DELETE_USER: async () => {
      try {
        const user = auth().currentUser
        return await user.delete().then(() => Promise.resolve())
      } catch (error) {
        return Promise.reject(error)
      }
    },
    getProducts({ commit }) {
      axios.get('http://127.0.0.1:8000/api/store/').then((response) => {
        commit('setProducts', response.data)
      })
    },
    addProductToCart({ commit }, { Product, quantity }) {
      commit('AddToCart', { Product, quantity })
    },
    getProduct({ commit }, ProductId) {
      axios.get(`http://127.0.0.1/api/store/${ProductId}/`).then((response) => {
        commit('setProduct', response.data)
      })
    },
  },
  getters: {
    user: (state) => {
      return state.user
    },
    cartItemCount(state) {
      return state.Cart.length
    },
    cartTotal(state) {
      let total = 0

      state.Cart.forEach((item) => {
        total += item.Product.price * item.quantity
      })
      return total
    },
  },
})
