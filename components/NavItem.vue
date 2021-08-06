<template>
  <a :href="route.href" class="group" @click="route.navigate">
    <div
      class="
        w-100
        pl-3
        py-3
        rounded-l-xl
        group-hover:bg-yellow-200 group-hover:text-
        transition
        flex flex-row
        items-center
      "
      :class="{
        'bg-gray-50': route.isActive,
        'text-black': route.isActive,
        'pr-3': !collapse,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="nav.icon"
        />
      </svg>
      <span class="ml-2" :class="{ hidden: collapse }">{{ nav.label }}</span>
    </div>

    <b
      class="absolute right-0 top-0 w-2 h-2 rounded-br-3xl z-10 bg-yellow-100"
    ></b>
    <b
      class="
        absolute
        right-0
        top-0
        w-2
        h-2
        z-0
        group-hover:bg-yellow-200 group-hover:text-
        transition
      "
      :class="{ 'bg-gray-50': route.isActive }"
    ></b>
    <b
      class="
        absolute
        right-0
        bottom-0
        w-2
        h-2
        rounded-tr-3xl
        z-10
        bg-yellow-100
      "
    ></b>
    <b
      class="
        absolute
        right-0
        bottom-0
        w-2
        h-2
        z-0
        group-hover:bg-yellow-200 group-hover:text-
        transition
      "
      :class="{ 'bg-gray-50': route.isActive }"
    ></b>
  </a>
</template>

<script>
export default {
  // props: ['collapse', 'nav', 'route'],
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
    nav: {
      type: Object,
      default: () => {},
    },
    route: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
