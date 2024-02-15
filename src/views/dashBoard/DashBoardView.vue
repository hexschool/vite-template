<!-- eslint-disable no-useless-escape -->
<template>
  <div>
    <RouterLink to="/admin">DashBoard</RouterLink> |
    <RouterLink to="/admin/products">Products Control Panel</RouterLink>
    <h1>這是後台頁</h1>
    <RouterView></RouterView>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      products: [],
      tempProduct: {
        imagesUrl: []
      }
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
        .then((res) => {
          console.log('驗證成功')
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkStatus()
  }
}
</script>
