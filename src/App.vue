<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

</script>

<template>
    <div class="site">
        <HeaderComponent/>

        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <FooterComponent/>
    </div>
</template>

<style scoped>
.fade-enter-from {
    opacity: 0;

}
.fade-enter-active,
.fade-leave-active {
    transition: all .2s ease-out
}
.fade-leave-to {
    opacity: 0;

}
</style>
