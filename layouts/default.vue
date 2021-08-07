<template>
  <div class="app--content">
    <aside class="nav--menu">
      <div class="nav--wrapper" :class="{ active: active }">
        <!-- Logo -->
        <div class="logo--container">
          <div
            class="
              m-4
              p-1
              absolute
              hover:bg-gray-200
              rounded
              cursor-pointer
              right-0
            "
            @click="active = !active"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <NuxtLink to="/">
            <h1 class="text-2xl text-center">
              {{ globals.shorthand }}
            </h1>
            <h6 class="text-sm text-center">
              {{ globals.siteName }}
            </h6>
          </NuxtLink>
        </div>

        <!-- Nav Items -->
        <nav
          class="p-4 w-full collapse"
          :class="{ 'collapse-open': $breakpoints.lSm || active }"
        >
          <input type="checkbox" />
          <div class="collapse-content duration-500">
            <ul
              class="
                flex flex-col
                justify-between
                h-50
                w-full
                mb-20
                divide-y divide-gray-200
              "
            >
              <template v-for="nav in navItems">
                <NuxtLink :key="nav.label" :to="nav.route" class="text-center">
                  <li class="block relative py-2 hover:bg-gray-200">
                    {{ nav.label }}
                  </li>
                </NuxtLink>
              </template>
            </ul>

            <!-- Social Media -->
            <div class="flex justify-around">
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
        </nav>
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
    active: false,
    portfolioActive: false,
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
  @apply bg-gray-50 min-h-screen;
}

.app--content {
  @apply flex font-mono flex-col;
  @screen sm {
    @apply flex-row;
  }
}

.nav--menu {
  @apply pl-2 flex text-gray-700 items-end min-w-full;
  width: 15rem;

  .nav--wrapper {
    @apply sticky top-0 w-full justify-around h-full flex flex-col-reverse;

    .logo--container {
      @apply w-full px-12 mb-20 flex flex-col;

      @screen sm {
        div:first-child {
          display: none;
        }
      }
    }

    @screen sm {
      @apply min-h-full flex-col;
    }
  }

  @screen sm {
    @apply min-w-0 #{!important};
    @apply min-h-screen w-80 pl-2 flex flex-col text-gray-700 items-end p-0 shadow;
  }
}

// .nuxt-link-active {
//   @apply bg-gray-100;
// }
</style>
