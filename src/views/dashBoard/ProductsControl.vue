<template>
  <div>
    <p>This is product page</p>
    <div class="container">
      <div class="row mt-4">
        <div class="col-12">
          <div class="d-flex justify-content-end mt-3">
            <button
              type="button"
              class="btn btn-primary"
              @click="openModal('new')"
            >
              New Product
            </button>
          </div>

          <table class="table table-hover mt-4">
            <thead>
              <tr>
                <th width="100">Category</th>
                <th width="150">Product</th>
                <th width="120">Reg Price</th>
                <th width="120">Price</th>
                <th width="150">In Stock</th>
                <th width="120">Edit Item</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td width="100">{{ product.category }}</td>
                <td width="150">{{ product.title }}</td>
                <td width="120">
                  <del>{{ product.origin_price }}</del>
                </td>
                <td width="120">{{ product.price }}</td>
                <td
                  width="150"
                  :class="product.is_enabled ? 'text-success' : 'text-danger'"
                >
                  {{ product.is_enabled ? "In Stock" : "Out Of Stock" }}
                </td>
                <td width="120">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm"
                      @click="openModal('edit', product)"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="openModal('delete', product)"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row align-items-center">
            <div class="col">
              <p>
                Total of
                <span>{{ Object.keys(products).length }}</span> products
              </p>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <product-modal
          :temp-product="tempProduct"
          :update-product="updateProduct"
          :del-picture="delPicture"
          :add-picture="addPicture"
          :new-picture-url="newPictureUrl"
        >
        </product-modal>
        <!--delModal-->
        <del-product-modal
          :temp-product="tempProduct"
          :del-product="delProduct"
        ></del-product-modal>
      </div>
    </div>
    <RouterView></RouterView>
    <!-- productModal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title fs-5" id="productModalLabel">New Product</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4">
                <div class="mb-3">
                  <label for="imageInput" class="form-label h6"
                    >Main image for product</label
                  >
                  <img :src="tempProduct.imageUrl" class="img-fluid" />
                  <input
                    type="text"
                    class="form-control"
                    id="imageInput"
                    name="imageInput"
                    placeholder="enter image url"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <div class="bg-secondary" style="height: 1px"></div>
                <div class="mt-3">
                  <h6>Place more Images</h6>
                  <input
                    type="text"
                    class="form-control"
                    id="imagesInput"
                    name="imagesInput"
                    v-model="newPictureUrl"
                  />
                  <button
                    type="button"
                    class="mt-1 btn btn-outline-primary w-100"
                    @click="addPicture"
                  >
                    Add more picture
                  </button>
                </div>
                <div
                  v-for="(pic, key) in tempProduct.imagesUrl"
                  :key="key"
                  class="mt-3"
                >
                  <img :src="pic" :alt="tempProduct.title" class="img-fluid" />
                  <button
                    type="button"
                    class="btn btn-outline-danger w-100"
                    @click="delPicture(key)"
                  >
                    Delete picture
                  </button>
                </div>
              </div>
              <div class="col-8">
                <div class="mb-3">
                  <label for="productTitle" class="form-label"
                    >Product Title</label
                  >
                  <input
                    type="text"
                    id="productTitle"
                    name="productTitle"
                    class="form-control"
                    placeholder="enter product title"
                    v-model="tempProduct.title"
                  />
                </div>
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="productCategory" class="form-label"
                      >Category</label
                    >
                    <input
                      type="text"
                      id="productCategory"
                      name="productCategory"
                      class="form-control"
                      placeholder="enter category"
                      v-model="tempProduct.category"
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="productUnit" class="form-label">Unit</label>
                    <input
                      type="text"
                      id="productUnit"
                      name="productUnit"
                      class="form-control"
                      placeholder="enter unit"
                      v-model="tempProduct.unit"
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="productReg" class="form-label"
                      >Regular Price</label
                    >
                    <input
                      id="productReg"
                      name="productReg"
                      class="form-control"
                      type="number"
                      min="0"
                      placeholder="enter regular price"
                      v-model.number="tempProduct.origin_price"
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <label for="productPrice" class="form-label"
                      >Sale Price</label
                    >
                    <input
                      id="productPrice"
                      name="productPrice"
                      class="form-control"
                      type="number"
                      min="0"
                      placeholder="enter price"
                      v-model.number="tempProduct.price"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="productDescription" class="form-label"
                    >Product Description</label
                  >
                  <textarea
                    type="text"
                    id="productDescription"
                    name="productDescription"
                    class="form-control"
                    v-model="tempProduct.description"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="productContent" class="form-label"
                    >Product Content</label
                  >
                  <textarea
                    type="text"
                    id="productContent"
                    name="productContent"
                    class="form-control"
                    v-model="tempProduct.content"
                  ></textarea>
                </div>
                <div class="form-check mb-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="is_enabled"
                    name="is_enabled"
                    v-model="tempProduct.is_enabled"
                  />
                  <label for="is_enabled" class="form-check-label"
                    >In Stock</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- delProductModal -->
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      aria-labelledby="delProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-danger text-white">
            <h1 class="modal-title fs-5" id="delProductModalLabel">
              Delete Product
            </h1>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Delete product
            <strong class="text-danger">{{ tempProduct.title }} </strong>(cannot
            be recovered after deletion).
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="delProduct(tempProduct.id)"
            >
              Confirm Deletion
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Modal } from 'bootstrap'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      products: [],
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      newPictureUrl: '',
      productModal: null,
      delProductModal: null
    }
  },
  methods: {
    getProducts () {
      axios
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    selectProduct (product) {
      this.tempProduct = product
    },
    openModal (status, product) {
      if (status === 'new') {
        this.isNew = true
        this.tempProduct = {}
        this.productModal.show()
      } else if (status === 'edit') {
        this.tempProduct = { ...product }
        this.isNew = false
        this.productModal.show()
      } else if (status === 'delete') {
        this.tempProduct = { ...product }
        this.delProductModal.show()
      }
    },
    updateProduct () {
      this.tempProduct.price = parseInt(this.tempProduct.price)
      this.tempProduct.origin_price = parseInt(this.tempProduct.origin_price)
      let way = 'post'
      if (this.isNew) {
        // 新增產品
        axios[way](`${VITE_URL}/v2/api/${VITE_PATH}/admin/product`, {
          data: { ...this.tempProduct }
        })
          .then((res) => {
            this.productModal.hide()
            this.getProducts()
            this.tempProduct = {
              imagesUrl: []
            }
            alert(res.data.message)
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      } else {
        // 變更產品
        way = 'put'
        axios[way](
          `${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`,
          {
            data: this.tempProduct
          }
        )
          .then((res) => {
            console.log(res)
            this.productModal.hide()
            this.getProducts()
            this.tempProduct = {
              imagesUrl: []
            }
            alert(res.data.message)
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }
    },
    delProduct (id) {
      axios
        .delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${id}`)
        .then((res) => {
          alert(res.data.message)
          this.delProductModal.hide()
          this.tempProduct = {
            imagesUrl: []
          }
          this.getProducts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    addPicture () {
      if (this.newPictureUrl.trim() !== '') {
        this.tempProduct.imagesUrl.push(this.newPictureUrl.trim())
        this.newPictureUrl = ''
        console.log('Success')
      }
    },
    delPicture (index) {
      this.tempProduct.imagesUrl.splice(index, 1)
    }
  },
  mounted () {
    this.getProducts()
    this.productModal = new Modal(document.getElementById('productModal'), {
      keyboard: false,
      backdrop: 'static'
    })
    this.delProductModal = new Modal(
      document.getElementById('delProductModal'),
      {
        keyboard: false,
        backdrop: 'static'
      }
    )
  }
}
</script>
