<template>
    <a :href=this.url class="link">
        <slot/>
    </a>
</template>

<script>
export default {
    name: "navigation-link",
    props: {
        url: {
            require: true,
            type: String,
        }
    }
}
</script>

<style lang="scss">
.link {
  font-family: var(--font-poppins);
  font-weight: 500;
  color: var(--vt-c-white);
}

.h-link {
  font-size: 14px;
  line-height: 24px;

  @include devices {
    display: block;
    margin: 0 0 32px;
    font-size: 20px;
    line-height: 32px;
  }
}

.f-link {
  display: flex;
  font-size: 12px;
  line-height: 16px;

  @include devices {

    margin-right: 0;
    margin-left: 4px;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>