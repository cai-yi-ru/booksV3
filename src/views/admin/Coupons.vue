<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        新增優惠券
      </button>
  </div>
  <div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>優惠券名稱</th>
          <th>優惠碼</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.code}}</td>
          <td>
            {{item.percent}}%
          </td>
          <td>
            {{$filters.date(item.due_date)}}
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
    <CouponModal ref="couponModal" :coupon="tempCoupon"
    @update-coupon="updateCoupon"></CouponModal>
    <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupon"></DelModal>
  </div>
</template>

<script>
import CouponModal from '../../components/CouponModal.vue';
import DelModal from '../../components/DelModal.vue';

export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isNew: false,
      isLoading: false,
    };
  },
  props: {
    config: Object,
  },
  components: {
    CouponModal,
    DelModal,
  },
  inject: ['emitter'],
  methods: {
    getCoupons() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          // console.log(res.data);
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          // 先預設輸入現在時間
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      const couponComponent = this.$refs.couponModal;
      couponComponent.showModal();
    },
    // 新增或修改
    updateCoupon(item) {
      this.tempCoupon = item;
      const couponComponent = this.$refs.couponModal;
      this.isLoading = true;
      if (this.isNew) {
        // 新增
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(api, { data: this.tempCoupon }).then((response) => {
          this.$httpMessageState(response, '新增優惠券');
          this.getCoupons();
        });
      } else {
        // 修改
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        this.$http.put(api, { data: this.tempCoupon }).then((response) => {
          this.$httpMessageState(response, '更新優惠券');
          this.getCoupons();
        });
      }
      this.isLoading = false;
      couponComponent.hideModal();
    },
    // 開啟刪除 Modal
    openDelModal(item) {
      this.tempCoupon = { ...item };
      console.log(this.tempCoupon);
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delCoupon() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      const productComponent = this.$refs.delModal;
      this.isLoading = true;
      this.$http.delete(api).then((response) => {
        // this.isLoading = false;
        productComponent.hideModal();
        this.getCoupons();
        this.isLoading = false;
        this.$httpMessageState(response, '刪除資料');
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
