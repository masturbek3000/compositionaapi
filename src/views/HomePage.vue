<template>
  <app-alert
    v-if="isOpen"
    title="Работаем с composition"
    type="danger"
    @close="toggle"
  ></app-alert>

  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>data, methods, computed, watch</small>
    <div class="form-control">
      <input type="text" v-model="firstName" />
    </div>

    <button class="btn" @click="change">Изменить</button>
    <button class="btn danger" @click="toggle">Alert</button>
  </div>
  <framework-info-vue @change-version="changeVersion" class="test-from-app">
    <template>
      <p>This is footer</p>
    </template>
  </framework-info-vue>
</template>

<script>
import FrameworkInfoVue from "../FrameworkInfo.vue";
import AppAlert from "../AppAlert.vue";
import {
  ref,
  reactive,
  isRef,
  isReactive,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";


export default {
  setup() {
    const name = ref("vueJS");
    const version = ref(3);
    const firstName = ref("");
    const isOpen = ref(false)
    const toggle = () => {
        isOpen.value = !isOpen.value
    }
    // const [alert, toggle, close] = useAlert()


    console.log(isRef(name, version.value));

    const framework = reactive({
      name: "vueJS",
      version: 3,
    });

    console.log("created");
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log(newValues, oldValues);
    // })

    watch(firstName, (newV) => {
      console.log(newV);
    });
    console.log(isReactive(framework));

    function changeInfo() {
      name.value = "vueJS!";
      version.value = 4;
      // framework.name = 'vueJS!'
      // framework.version = 4
    }

    function changeVersion(number) {
      version.value = number;
    }

    provide("name", name);
    provide("version", version);
    console.log(version.value);
    return {
      change: changeInfo,
      firstName,
      changeVersion,
      toggle,
      isOpen,
    };
  },
  components: { FrameworkInfoVue, AppAlert },
};
</script>