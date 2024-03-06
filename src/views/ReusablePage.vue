<template>
  <app-alert
    v-if="isOpen"
    title="Работаем с composition"
    type="primary"
    @close="toggle"
  ></app-alert>

  <div class="card">
    <h1>Переиспользование</h1>
    <!-- <pre>{{ alert }}</pre> -->
    <button class="btn primary" @click="toggle">
      {{ isOpen ? "Close" : "Show" }} Показать сообщение
    </button>
    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { useAlert } from "../use/alert";
import {ref} from 'vue'
import AppAlert from "../AppAlert.vue";
export default {
  setup() {
    // const alert = reactive({
    //     type: 'warning',
    //     title: 'Reactive Alert'
    // })
    // const {alert: simpleAlert,close: closeAlert, toggle} = useAlert()
    // const [alert, close, toggle] = useAlert()

    const router = useRouter();
    const route = useRoute();
    console.log(route.path);
    const navigate = () => {
      console.log(route);
      router.push("/");
    };
    const isOpen = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      ...useAlert(true),
      navigate,
      toggle,
      isOpen,
    };
  },
  components: { AppAlert },
};
</script>