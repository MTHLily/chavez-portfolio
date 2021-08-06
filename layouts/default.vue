<template>
  <div class="flex min-h-screen font-mono">
    <aside class="nav--menu" :class="{ collapsed: collapse }">
      <div class="nav--wrapper sticky top-0 w-full justify-center align-center">
        <!-- Logo -->
        <div class="w-full pt-10 mb-20" @click="collapse = !collapse">
          <h1 class="text-2xl text-center">{{ globals.shorthand }}</h1>
          <h6 class="text-sm text-center">{{ globals.siteName }}</h6>
        </div>

        <!-- Nav Items -->
        <ul class="flex flex-col justify-between h-50 mb-20">
          <li
            v-for="nav in navItems"
            :key="nav.label"
            class="block relative py-2"
          >
            <NuxtLink
              v-slot="{ isActive, navigate, href }"
              :to="nav.route"
              custom
            >
              <NavItem
                :route="{ navigate, href, isActive }"
                :nav="nav"
                :collapse="collapse"
              ></NavItem>
            </NuxtLink>
          </li>
        </ul>

        <!-- Social Media -->
        <div class="flex justify-around" :class="{ 'flex-col': collapse }">
          <a
            v-for="(socMed, ind) in globals.socialNetworks"
            :key="ind"
            :href="socMed.url"
            class="m-2 justify-center flex"
          >
            <svg class="w-6 h-6">
              <image
                style="fill: white !important; color: white !important"
                :xlink:href="`${$config.backendUrl}${socMed.icon.url}`"
                width="24"
                height="24"
              />
            </svg>
          </a>
        </div>
      </div>
    </aside>
    <main class="flex-1">
      <Nuxt />
    </main>
  </div>
</template>

<script>
// import fetchGlobals from '@/apollo/query/fetchGlobal.gql'
import { mapState } from 'vuex'

export default {
  data: () => ({
    collapse: false,
    navItems: [
      {
        label: 'Portfolio',
        route: '/portfolio',
        icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
      },
      {
        label: 'About',
        route: '/',
        icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      },
      {
        label: 'Contact',
        route: '/contact',
        icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      },
    ],
  }),
  computed: {
    ...mapState(['globals']),
  },
}
</script>

<style lang="scss">
body {
  @apply bg-gray-50;
}

.nav--menu {
  @apply bg-yellow-100 min-h-full pl-2 flex flex-col text-gray-700 items-end p-0 shadow;
  width: 15rem;

  &.collapsed {
    width: 6rem;
  }
}

.logo--container {
  background-color: #61737d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23ece8a8' fill-opacity='0.99'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
