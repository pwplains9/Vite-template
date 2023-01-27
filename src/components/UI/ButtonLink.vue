<template>
    <a :href="link" :class="!link ? 'is-disabled button' : 'button'">
        <slot/>
    </a>

</template>

<script>
export default {
    name: "button-link",
    props: {
        link: {
            require: true,
            type: String,
        }
    }
}
</script>

<style scoped lang="scss">
.button {
  background: linear-gradient(135deg, #00FFAA 0%, #4579F5 51.65%, #9C42F5 99.83%);
  box-shadow: 0px 0px 1px rgba(69, 121, 245, 0.24), 0px 2px 4px -1px rgba(27, 10, 82, 0.12), 0px 16px 24px rgba(69, 121, 245, 0.24), 0px 8px 8px -4px rgba(69, 121, 245, 0.12);
  border-radius: 20px;

  &-lg {
    display: block;
    margin: 0 auto;
    padding: 22px 0;
    max-width: 220px;
    font-family: var(--font-poppins);
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.4px;
    color: var(--vt-c-white);
  }
}
</style>