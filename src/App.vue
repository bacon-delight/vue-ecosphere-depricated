<template lang="pug">
router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	mounted() {
		this.setLocale();
	},
	methods: {
		setLocale() {
			const locale: string | null = localStorage.getItem("locale");
			if (locale && this.$i18n.availableLocales.includes(locale)) {
				this.$i18n.locale = locale;
			} else if (navigator.languages.length) {
				this.$i18n.locale = navigator.languages[0];
			}
		},
	},
});
</script>

<style lang="scss">
*,
*:before,
*:after {
	box-sizing: border-box;
	outline: none;
}

html,
body {
	border: 0;
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	font-size: 90%;
}

/* Markdown */
.markdown {
	overflow: hidden;

	h1 {
		@include header-1;
	}
	h2 {
		@include header-2;
	}
	h3 {
		@include header-3;
	}
	h4 {
		@include header-4;
	}
	h5 {
		@include header-5;
	}
	h6 {
		@include header-6;
	}
	p {
		@include font-light;
	}
	a {
		@include font-light;
		color: $color-hue;
		text-decoration: none;
		transition: all $transition-micro ease-in-out;

		&:hover {
			color: $color-hue-faded;
		}

		> code {
			color: $color-hue;
		}
	}
	code {
		@include font-code;
		background: $color-background;
		color: $color-contrast;
		padding: 0 $spacer-0-25;
		border-radius: $border-radius-standard;
	}
	pre {
		border: 1px solid $color-helper-grey;
		border-radius: $border-radius-standard;
		padding: $spacer-0-25;
		background: $color-background;
		overflow: hidden;

		&:hover {
			border: 1px solid $color-hue-faded;
		}
	}

	table {
		display: block;
		max-width: -moz-fit-content;
		max-width: fit-content;
		margin: 0 auto;
		overflow-x: auto;
	}

	ol,
	ul {
		padding-left: $spacer-0-75;
	}

	th {
		@include font-emphasis;
	}

	td {
		@include font-light;
	}

	tr {
		box-shadow: 0 -1px 0 rgba($color-helper-grey, 0.3) inset;
	}

	th,
	td {
		padding: $spacer-0-25 $spacer-0-5;
		min-width: 150px;

		&:first-child {
			padding-left: 0;
		}

		&:last-child {
			padding-right: 0;
		}
	}
}

.wrapper {
	width: 100%;
}

.content {
	padding: 0 $spacer-0-25;
	width: 600px;
	max-width: 94%;
	min-height: fit-content;
	margin: 0 auto;
	overflow: hidden;

	&:first-child h2 {
		margin-top: $spacer-0-25;
	}
}

.showcase {
	display: flex;
	flex-wrap: wrap;
	column-gap: $spacer-0-5;
	row-gap: $spacer-0-25;

	&--grid {
		@include create-grid(2, column, $spacer-0-25);

		@include respond-below(sm) {
			grid-auto-flow: row;
			grid-template-columns: 1fr;
		}
	}
}
</style>
