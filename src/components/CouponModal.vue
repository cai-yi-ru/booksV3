<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="couponsModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close" @click.prevent="cancel()"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input type="text" class="form-control" id="title"
                  placeholder="請輸入標題" v-model="tempCoupon.title" />
                </div>

                <div class="mb-3">
                  <label for="coupon_code" class="form-label">優惠碼</label>
                  <input type="text" class="form-control" id="coupon_code"
                  placeholder="請輸入優惠碼" v-model="tempCoupon.code" />
                </div>
                <div class="mb-3">
                  <label for="due_date">到期日</label>
                  <input type="date" class="form-control" id="due_date" v-model="due_date" />
                </div>
                <div class="mb-3">
                  <label for="percent" class="form-label">折扣百分比</label>
                  <input type="number" class="form-control" id="percent"
                  placeholder="請輸入折扣百分比" v-model="tempCoupon.percent" />
                </div>

                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempCoupon.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
            data-bs-dismiss="modal" @click.prevent="cancel()">取消</button>
            <button type="button" class="btn btn-primary"
            @click="$emit('update-coupon', tempCoupon)">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  name: 'couponModal',
  props: {
    coupon: {},
  },
  mixins: [modalMixin],
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      // 將時間格式轉換為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    };
  },
  methods: {
    cancel() {
      this.tempProduct = {};
    },
  },
};
</script>
