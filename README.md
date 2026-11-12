# lendme-frontend

Vue 3 frontend for LendMe.

## Stack

- [Vue 3](https://vuejs.org/) — Composition API with `<script setup>`
- [Vuetify](https://vuetifyjs.com/) — UI components ([Material Design Icons](https://pictogrammers.com/library/mdi/) via `mdi-*` names)
- [Vue Router](https://router.vuejs.org/) — routing
- [Pinia](https://pinia.vuejs.org/) — state management
- [Vite](https://vite.dev/) — dev server and build
- [ESLint](https://eslint.org/) + `eslint-plugin-vue` — linting

## Project structure

```
src/
├── main.js            # App entry: creates the app and registers plugins
├── App.vue            # Root component (<v-app> + <router-view>)
├── plugins/
│   ├── index.js       # Registers Pinia, Router and Vuetify
│   └── vuetify.js     # Vuetify config (theme, icons)
├── router/index.js    # Routes
├── stores/            # Pinia stores (one file per domain, setup-store style)
├── layouts/           # Page shells (app bar, navigation drawer)
├── views/             # Route-level pages
├── components/        # Reusable components
└── styles/main.css    # Global styles
```

Vuetify components are auto-imported by `vite-plugin-vuetify`, so you can use `<v-btn>` etc. without importing them. Use the `@/` alias to import from `src/`.

### Adding a page

1. Create `src/views/LoansView.vue`.
2. Add a route as a child of the default layout in `src/router/index.js`:
   ```js
   { path: 'loans', name: 'loans', component: () => import('@/views/LoansView.vue'), meta: { title: 'Loans' } }
   ```
3. Optionally add it to `navItems` in `src/layouts/DefaultLayout.vue`.

### Adding a store

```js
// src/stores/loans.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoansStore = defineStore('loans', () => {
  const loans = ref([])
  const total = computed(() => loans.value.length)
  return { loans, total }
})
```

## Scripts

```sh
npm install        # install dependencies
npm run dev        # start dev server with hot reload
npm run lint       # lint and auto-fix
npm run build      # production build
npm run preview    # preview the production build
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the branching workflow.

## Recommended IDE setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar).
