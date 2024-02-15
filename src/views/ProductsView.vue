<template>
  <div>
    <h1>This is Product Page.</h1>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-6">
          <h2>Products List</h2>
          <table class="table table-hover mt-4">
            <thead>
              <tr>
                <th width="150">Product</th>
                <th width="120">Reg Price</th>
                <th width="120">Price</th>
                <th width="150">In Stock</th>
                <th width="120">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td width="150">{{ product.title }}</td>
                <td width="120">{{ product.origin_price }}</td>
                <td width="120">{{ product.price }}</td>
                <td
                  width="150"
                  :class="product.is_enabled ? 'text-success' : 'text-danger'"
                >
                  {{ product.is_enabled ? "In Stock" : "Out Of Stock" }}
                </td>
                <td width="120">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="selectProduct(product)"
                  >
                    See More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Total of <span>{{ Object.keys(products).length }}</span> products
          </p>
        </div>
        <div class="col-md-6">
          <h2>Single Product Details</h2>

          <div class="card" v-if="tempProduct.title">
            <img
              :src="tempProduct.imageUrl"
              class="card-img-top object-fit"
              :alt="tempProduct.title"
            />
            <div class="card-body">
              <h3 class="card-title">
                {{ tempProduct.title }}
                <span class="badge rounded-pill text-bg-primary ms-2">{{
                  tempProduct.category
                }}</span>
              </h3>
              <p class="card-text">OverView : {{ tempProduct.description }}</p>
              <p class="card-text">Description : {{ tempProduct.content }}</p>
              <div class="d-flex">
                <p class="me-2">{{ tempProduct.price }}</p>
                <del class="text-secondary"
                  ><p>{{ tempProduct.origin_price }}</p></del
                >
                <p class="ms-2">元 /{{ tempProduct.unit }}</p>
              </div>
              <template class="d-flex">
                <div
                  v-for="(item, key) in tempProduct.imagesUrl"
                  :key="key"
                  class="me-2"
                >
                  <img class="small-img" :src="item" />
                </div>
              </template>
            </div>
          </div>
          <div v-else>
            <p>Please select a product to view</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.object-fit {
  object-fit: contain;
  height: 300px;
  width: 100%;
}
.small-img {
  height: 100px;
  width: 100%;
  object-fit: contain;
}
</style>

<script>
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      products: [],
      tempProduct: {}
    }
  },
  methods: {
    checkStatus () {
      const hexToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      axios.defaults.headers.common.Authorization = hexToken
      axios
        .post(`${VITE_URL}/v2/api/user/check`)
        .then((res) => {})
        .catch((err) => {
          console.log(err)
          alert('Login fail')
          window.location = 'index.html'
        })
    },
    getProducts () {
      axios
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    },
    selectProduct (product) {
      this.tempProduct = product
    }
  },
  mounted () {
    this.checkStatus()
    this.getProducts()
  }
}
</script>
