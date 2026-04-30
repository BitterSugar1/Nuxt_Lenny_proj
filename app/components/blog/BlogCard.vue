<template>
  <article class="article-card">
    <NuxtLink :to="`/blog/${data.slug}`" class="article-card">
     
 <div class="article-card__link">
<picture class="article-card__picture">
        <source type="image/webp" :srcset="data.img_webp" />

        <img :src="data.img" :alt="data.alt" class="article-card__img" />
      </picture>
 </div>
      
     <div class="article-card__info">
      <time v-if="date" :datetime="data.date" class="article-card__time">
        {{ date }}
      </time>
      
      <h4 class="article-card__title-link">{{ data.title }}</h4>

       <div class="article-card__arrow ">
        
        <SvgIcon
        class="arrow__icon1"
        name="arrow"
        width="91"
        height="60"
        />

      </div>

      <p class="article-card__description">{{ data.description }}</p>
      
     </div>
      
    </NuxtLink>
  </article>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      default: () => ({}),
    },
  });

 const date = computed(() => {
    try {
      const date = new Date(props.data.date);
      return `${date.toLocaleDateString()}`;
    } catch {
      return null;
    }
  });
</script>

<style lang="less">
  .article-card {
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  text-decoration: none;

  @media @bw1170 {
    flex-direction: column;
    max-width: 708px;
  }

  @media @bw500 {
    max-width: 280px;
  }

  &:hover {
    @media @bw1170 {
      .article-card_picture {
        box-shadow: 0px 0px 30px 0px #1f1f1e8c;
      }
    }
  }

  &+.article-card {
    margin-top: 120px;

    @media @bw1170 {
      margin-top: 100px;
    }

    @media @bw500 {
      margin-top: 80px;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      margin: 0 auto 60px;
      bottom: 100%;
      left: 0;
      right: 0;
      max-width: 1255px;
      width: 100%;
      height: 1px;
      background-color: @black;
      pointer-events: none;

      @media @bw1170 {
        margin-bottom: 50px;
      }

      @media @bw500 {
        margin-bottom: 40px;
      }
    }
  }

  &__link {
    flex-shrink: 0;
    align-self: flex-start;
    display: block;
    width: 467px;
    margin-right: 60px;
    font-size: 0;
    text-decoration: none;
    

    @media @bw1660 {
      margin-right: 40px;
    }

    @media @bw1340 {
      margin-right: 30px;
    }

    @media @bw1170 {
      width: 100%;
      align-items: center;
    }

    @media @bw768 {
      max-width: 467px;
    }

    @media @bw500 {
      max-width: 280px;
    }

    &:hover {
      &~.article-card__info {
        .article-card__title-link {
          color: @red;
          text-decoration-color: @red;
        }
      }
    }
  }

  &__picture {
    display: block;
    position: relative;
    width: 100%;
    transition: box-shadow 0.2s;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 62.3126%;
    }

  }

  &__img {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding: 30px 0;
    padding-right: 150px;
    

    @media @bw1660 {
      padding-right: 130px;
    }

    @media @bw1340 {
      padding-right: 95px;
    }

    @media @bw1170 {
      padding-top: 0;
      padding-bottom: 0;
    }

    @media @bw500 {
      padding-right: 0;
      padding-bottom: 60px;
    }
  }

  &__time {
    color: @black;
    margin: 0 0 40px;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;

    @media @bw1170 {
      margin: 25px 0 0;
    }

    @media @bw500 {
      margin-top: 10px;
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__title-link,
  &__description {
    max-width: 470px;
  }

  &__title-link {
    margin: auto 0 40px;
    color: @black;
    text-decoration-color: transparent;
    transition: color 0.2s, text-decoration-color 0.2s;
    font-weight: 600;
    font-size: 24px;

    @media @bw1170 {
      margin: 40px 0 20px;
      font-size: 20px;
      line-height: 22px;
    }

    @media @bw768 {
      max-height: 44px;
    }

    @media @bw500 {
      margin: 20px 0 10px;
      font-size: 16px;
      line-height: 22px;
      font-weight: 700;
    }

    &:hover {
      color: @red;
      text-decoration-color: @red;
    }
  }

  &__title {
    margin: 0;
    color: inherit;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;

    @media @bw1170 {
      font-size: 20px;
      line-height: 22px;
    }

    @media @bw500 {
      font-size: 16px;
      line-height: 22px;
      font-weight: 700;
    }
  }

  &__description {
    margin: 0;
    font-size: 16px;
    line-height: 22px;

    @media @bw768 {
      margin-bottom: 50px;
    }

    @media @bw500 {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 56px;
    }
  }

  &__arrow {
    position: absolute;
    right: 0;
    bottom: 30px;
    color: inherit;
    transition: none;

    &:active {
    color: @red;
  }
  &:hover {
    @media (hover: hover) {
      color: @red;
    }
  }

    @media @bw1340 {
      right: 20px;
    }

    @media @bw1170 {
      margin-bottom: 0;
    }

    @media @bw768 {
      position: relative;
      left: 370px;
      top: 120px;
    }
@media @bw370 {
      position: relative;
      left: 175px;
      top: 150px;
    }

  }
}

.arrow {
  flex-shrink: 0;
  position: relative;
  display: inline-block;
  width: 92px;
  height: 60px;
  padding: 0;
  border: none;
  background: none;
  color: @black;
  font-size: 0;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
  @media @bw1340 {
    width: 67px;
    height: 40px;
  }
  &__icon1 {
    display: flex;
    
  }
  
}
</style>