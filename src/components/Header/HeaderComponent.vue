<template>
    <header class="header" :class='{active: menuOpen}'>
        <div class="container df alg-center js-between">
            <router-link class="header-logo" to="/" @click="menuOpen = false">
                <svg-icon name="main-logo"/>
            </router-link>
            <ul class="header-menu df alg-center" v-if="!isDevices()">
                <li v-for="(item, index) in headerMenu" :key="index">
                    <router-link :to="item.link" class="h-link m-0-16 link">
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>
            <div class="header-button" v-if="isDevices()" @click="menuOpen = !menuOpen" :class='{active: menuOpen}'>
                <svg-icon name="menu-open"/>
                <svg-icon name="menu-close"/>
            </div>
        </div>
    </header>
    <transition name="slide-fade">
    <ul class="header-menu df alg-center" v-if="menuOpen">
        <li v-for="(item, index) in headerMenu" :key="index">
            <router-link :to="item.link" class="h-link m-0-16 link" target="_blank">
                {{ item.name }}
            </router-link>
        </li>
    </ul>
    </transition>
    <transition name="slide-fade">
        <div class="header-bg" v-if="menuOpen"></div>
    </transition>

</template>

<script>
import {customMixins} from "@/mixins/generalMixin";
import NavigationLink from "@/components/UI/Link.vue";

export default {
    name: "HeaderView",
    components: {NavigationLink},
    mixins: [customMixins],
    data() {
        return {
            menuOpen: false,
            headerLink: '/',
            headerMenu: [
                {
                    link: '/app',
                    name: 'App',
                    disabled: true,
                },{
                    link: '/',
                    name: 'Home',
                    disabled: true,
                },
            ],
        }
    }
}
</script>

<style scoped lang="scss">
@import "styles";
</style>