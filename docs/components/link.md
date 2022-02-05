# Link

```html:no-line-numbers
<v-eco-link />
```

[[toc]]

### About

Link can be used anywhere there's a need for linking or redirecting to a different page or external resource.

## API

### Types

```ts:no-line-numbers
type link_icon_direction = "left" | "right";
```

### Props

| Name            | Type                  | Default | Required | Description                     |
| --------------- | --------------------- | ------- | -------- | ------------------------------- |
| `label`         | `string`              | ''      | No       | Label used in the dropdown      |
| `icon`          | `string`              | ''      | No       | Name of the icon to be rendered |
| `iconDirection` | `link_icon_direction` | `right` | No       | Direction to render the icon    |
| `disabled`      | `boolean`             | `false` | No       | Disable the link                |

### Usage

:::: code-group
::: code-group-item HTML

```html:no-line-numbers
<v-eco-link icon="ri-sun-line" />
```

:::
::: code-group-item PUG

```pug:no-line-numbers
v-eco-link(icon="ri-sun-line")
```

:::
::::
