# Navigation

[[toc]]

Render a navigation bar with custom options.

## API

### Types

Some types are imported from [Dropdown](/components/dropdown#types)

```ts
type navigation_option_type = "dropdown" | "locale" | "theme";

interface navigation_item {
	type: navigation_option_type;
	label?: string;
	flow?: dropdown_flow;
	contain?: boolean;
	centered?: boolean;
	options?: dropdown_option[];
}
```

### Props
