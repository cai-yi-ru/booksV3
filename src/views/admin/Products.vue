<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        增加一個產品
      </button>
  </div>
  <div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td class="text-right">
            {{$filters.currency(item.origin_price)}}
          </td>
          <td class="text-right">
            {{$filters.currency(item.price)}}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getProdutcts"></Pagination>
    <ProductModal ref="productModal" :product="tempProduct"
    @update-product="updateProduct"></ProductModal>
    <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct"></DelModal>
  </div>
</template>

<script>
import ProductModal from '../../components/ProductModal.vue';
import DelModal from '../../components/DelModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  inject: ['emitter'],
  methods: {
    getProdutcts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      console.log(api);
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      console.log(this.temProduct);
      if (isNew) {
        this.temProduct = {};
      } else {
        this.tempProduct = { ...item };
      }

      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      // console.log(item);
      this.tempProduct = item;
      this.isLoading = true;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let hpptMethod = 'post';
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        hpptMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[hpptMethod](api, { data: this.tempProduct }).then((response) => {
        console.log(response);
        this.isLoading = false;
        productComponent.hideModal();
        this.getProdutcts();
        this.$httpMessageState(response, '更新產品');
      });
      this.tempProduct = {};
    },
    // 開啟刪除 Modal
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      const productComponent = this.$refs.delModal;
      // 開啟讀取效果
      this.isLoading = true;
      this.$http.delete(api).then((response) => {
        this.isLoading = false;
        productComponent.hideModal();
        this.getProdutcts();
        this.$httpMessageState(response, '刪除資料');
      });
    },
  },
  created() {
    this.getProdutcts();
  },
};
</script>
