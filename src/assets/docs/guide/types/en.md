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
