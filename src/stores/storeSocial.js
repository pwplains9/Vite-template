import {defineStore} from 'pinia'

export const useDefinedStore = defineStore({
    id: 'storeSocial',
    state: () => ({
        twitter: '/',
        discord: '/',
    }),
    actions: {},
    getters: {}
})
