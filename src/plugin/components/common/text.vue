<template lang="pug">
.text(v-html="content")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "Text",
	props: {
		label: {
			type: String as PropType<string>,
			required: true,
		},
	},
	data() {
		return {
			stack: [],
			content: "",
		};
	},
	mounted() {
		this.renderElements();
	},
	methods: {
		renderElements(): void {
			this.content = "";
			this.stack = this.label.split(/(:ri-[^:]*:)/g);
			this.stack.forEach((element: string) => {
				if (element && element[0] === ":") {
					this.content = `${this.content}<i class=${element.slice(
						1,
						-1
					)}></i>`;
				} else if (element) {
					this.content = `${this.content}<span>${element}</span>`;
				}
			});
		},
	},
	watch: {
		label(): void {
			this.renderElements();
		},
	},
});
</script>

<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css");

.text {
	display: inline-flex;
	align-items: center;
	column-gap: $spacer-0-125;
}
</style>
