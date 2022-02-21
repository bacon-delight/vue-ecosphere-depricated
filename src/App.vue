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
</style>
