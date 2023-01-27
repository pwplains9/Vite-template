import {defineStore} from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
        isAuth: false,
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        login() {
            this.isAuth = true;
        },
    },
    getters: {
        doubleCount: (state) => state.count * 2
    }
})
