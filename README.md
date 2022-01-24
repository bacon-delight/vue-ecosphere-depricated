### Ecosphere Design System

Ecosphere is a modern and minimal design system built for better clarity and insights from data. A lot of the inspirations in this system comes from the natural world.

##### Resources

-   [Figma Kit](https://www.figma.com/community/file/1067444265295956708/Ecosphere-Design-System)
-   [Homepage](https://ecosphere.dev/)
-   [Documentation](https://docs.ecosphere.dev/)
-   [Sandbox](https://codesandbox.io/s/vue-ecosphere-ooudb)

## Usage

Usage instructions are going to be updated soon

## Development

This is sort of a monorepo which is divided into 3 parts:

-   Plugin - `/plugin` - Plugin components
-   Documentation - `/docs` - Static documentation
-   Site - `/views`, `/components`, `/store`, `/router` - Landing site

##### References

-   [Vue](https://v3.vuejs.org/)
-   [VuePress](https://v2.vuepress.vuejs.org/)
-   [Pug](https://pugjs.org/)

### Plugin & Site

To work on the plugin and site components,

```sh
# Install Dependencies
npm install

# Run Development Server
npm run serve

# Unit Testing
npm run test:unit

# Lint
npm run lint

# Build
npm run build
```

### Documentation

To work on the documentation,

```sh
# Install Dependencies
npm install

# Run Development Server
npm run docs:dev

# Build
npm run build
```
