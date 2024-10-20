<script setup>
  import WishButton from '@components/common/WishButton.vue';
  import { useRouter } from 'vue-router';
  import { useProductStore } from '@/store/product/useProductStore.js';
  import { formatLocalString } from '@/utils/Common.js';

  const useProduct = useProductStore();
  const router = useRouter();
  const props = defineProps({
    product: {
      default: () => {},
      type: Object,
    },
  });
  const handleProductDetail = product => {
    router.push(`/product/detail/${product.goods_seq}`);
  };
</script>

<template>
  <div
    v-if="props.product"
    class="default_prod prod_item"
    @click="handleProductDetail(props.product)"
  >
    <div class="prod_img">
      <WishButton
        :product="props.product"
        class-name="wish_box"
        icon-size="sm"
      ></WishButton>
      <div class="brand_img">
        <img :src="props.product.brand_img" class="" />
      </div>
      <img
        :alt="`${props.product.goods_name} 상품 이미지`"
        :src="
          Array.isArray(props.product.goods_image)
            ? props.product.goods_image[0]
            : props.product.goods_image
        "
      />
      <ul class="badge_list">
        <li v-if="props.product.best_label === 'Y'" class="badge blue">BEST</li>
        <li v-if="props.product.new_label === 'Y'" class="badge orange">NEW</li>
        <li v-if="props.product.pg_label === 'Y'" class="badge gray">PG</li>
      </ul>
      <!-- TODO 특별문구 하드코딩 수정할 것 -->
      <!--      <p class="special_phrase">무상대여</p>-->
    </div>
    <div class="prod_info">
      <p class="prod_type flex-center">
        <span v-if="props.product.order_visit_flag === 'Y'"> 방문</span>
        <span v-if="props.product.order_parcel_flag === 'Y'">택배</span>
      </p>
      <div class="prod_title">
        <p class="title ellipsis_clamp">{{ props.product.goods_name }}</p>
        <p class="title ellipsis_clamp">{{ props.product.goods_name02 }}</p>
        <p class="sub_title ellipsis_clamp">
          {{ props.product.description_kr_01 }}
        </p>
      </div>
      <div v-if="props.product.goods_type === 'sale'" class="prod_price">
        <div class="day goods_sale">
          <p>
            <span class="consumer_price"
              >{{ formatLocalString(props.product?.consumer_price) }} </span
            ><i class="won">원</i>
          </p>
          <span class="price"
            >{{ formatLocalString(props.product?.price)
            }}<i class="won">원</i></span
          >
        </div>
      </div>
      <div v-else class="prod_price">
        <div class="day half">
          <p>
            <span class="hour">12H/ </span>
            <span class="consumer_price"
              >{{ formatLocalString(props.product?.rental_12_price) }} </span
            ><i class="won">원</i>
          </p>
          <span class="price"
            >{{ formatLocalString(props.product?.rental_12_sale)
            }}<i class="won">원</i></span
          >
        </div>
        <div class="day">
          <p>
            <span class="hour">24H/ </span>
            <span class="consumer_price"
              >{{ formatLocalString(props.product?.rental_24_price) }} </span
            ><i class="won">원</i>
          </p>
          <span class="price"
            >{{ formatLocalString(props.product?.rental_24_sale)
            }}<i class="won">원</i></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
