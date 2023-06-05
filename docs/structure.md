```
src/
  ├── components/
  │   ├── common/           (Reusable components)
  │   ├── layout/           (Layout components, Header, footer, sidebar...)
  │   ├── features/         (Feature-specific components)
  │   │   ├── Feature1/
  │   │   │   ├── components/
  │   │   │   ├── styles/
  │   │   │   └── index.js
  │   │   └── Feature2/
  │   │       ├── components/
  │   │       ├── styles/
  │   │       └── index.js
  │   └── App.js            (Top-level components)
  ├── pages/
  │   ├── Home/
  │   │   ├── components/   (Page-specific components)
  │   │   ├── styles/       (Page-specific styles)
  │   │   └── index.js
  │   └── About/
  │       ├── components/
  │       ├── styles/
  │       └── index.js
  ├── styles/
  ├── utils/
  └── AppRouter.js           (Router configuration)
```
