<!-- eslint-disable no-unused-vars -->
<template>
    <div>
        <div class="container text-center">
        <h1 class="p-4">Please Log In</h1>
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <div class="form">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control mb-3"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  v-model="user.username"
                />
                <label for="email">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control mb-3"
                  name="password"
                  id="password"
                  placeholder="Password"
                  v-model="user.password"
                />
                <label for="password">Password</label>
              </div>

              <button
                type="button"
                class="btn btn-lg btn-primary w-100"
                @click="signIn(user)"
              >
                Sign In
              </button>
            </div>
            <p class="mt-5 mb-3 text-muted">© 2024~∞∞- Hexschool Cuisine</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script >
import axios from 'axios'
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      product: []
    }
  },
  methods: {
    signIn () {
      axios.post(`${VITE_URL}/v2/admin/signin`, this.user)
        .then(res => {
          const { token, expired } = res.data
          // const hexToken = document.cookie.replace(
          //   /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
          //   '$1'
          // )
          document.cookie = `hexToken=${token}; expires= ${new Date(expired)}`
          this.$router.push('/admin')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
