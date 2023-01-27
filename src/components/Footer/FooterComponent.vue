<template>
    <footer class="footer">
        footer
    </footer>
</template>

<script>
import {customMixins} from "@/mixins/generalMixin";

export default {
    name: "FooterComponent",
    mixins: [customMixins],
    data() {
        return {
            footerLinks: [
                {
                    url: '',
                    name: 'Privacy Policy',
                    nameMobile: 'Policy',
                },
                {
                    url: '',
                    name: 'Terms of Service',
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "styles";
</style>