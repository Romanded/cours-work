const products = (axios) => {
  return {
    list() {
      return axios.get('https://dummyjson.com/products')
    },
    read(id) {
      return axios.get(`https://dummyjson.com/products/${id}`)
    }
  }
}

const cart = (axios) => {
  return {
    list() {
      return axios.get('http://localhost:5000/api/cart')
    },
    create(product) {
      return axios.post('http://localhost:5000/api/cart', product)
    }
  }
}

export default (axios) => {
  return {
    products: products(axios),
    cart: cart(axios)
  }
}
