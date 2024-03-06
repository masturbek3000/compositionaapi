import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            title: 'This is vuex + composition'
        }
    },
    getters: {
        appTitle(state) {
            return state.title.trim()
        }
    }
})