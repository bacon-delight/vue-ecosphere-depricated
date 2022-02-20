<template lang="pug">
.container
	v-eco-link.item(
		label="Download :ri-download-line: or upload :ri-upload-line:"
	)
	v-eco-dropdown.item(
		:options="options",
		label="Language",
		placeholder="Select a language",
		:config="{ flow: 'left' }"
	)

	v-eco-select.item(:options="options", label=":ri-translate-2:")
	div homie yo
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Layout",
	data() {
		return {
			options: [
				{
					label: "中文",
					value: "zh",
				},
				{
					label: "English",
					value: "en",
				},
				{
					label: "Deutsch:ri-external-link-line:",
					value: "de",
				},
			],
		};
	},
});
</script>

<style lang="scss" scoped>
.item {
	width: 400px;
	margin: 2rem;
}
</style>
