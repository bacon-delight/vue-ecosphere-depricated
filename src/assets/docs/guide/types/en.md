### Themeing

```ts
type themes = "light" | "dark" | "auto";
interface color_palette {
  [key: string]: string;
}
```

### Choices

```js
export interface choice_option {
  label: string;
  value: string | number;
}
```

###### Extensions

```js
export interface menu_option extends choice_option {
  children?: menu_option[];
}
```

```js
export interface breadcrumb_option extends choice_option {
  children?: choice_option[];
}
```

### Layout

```ts
export type navbar_item_type =
  | "link"
  | "dropdown"
  | "select"
  | "text"
  | "theme";

export interface navbar_option {
  type: navbar_item_type;
  attributes: any; // Attributes of `link` | `dropdown` | `select` | `text`
}
```
