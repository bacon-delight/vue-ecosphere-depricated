<template lang="pug">
.text
	template(v-for="element in elements")
		span.text__text(v-if="element.type === 'text'") {{ element.value }}
		VEcoIcon.text__icon(v-if="element.type === 'icon'", :type="element.value")
		span.text__text &nbsp;
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoIcon from "@/plugin/components/common/icon.vue";

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
			// content: "",
			elements: [],
		};
	},
	mounted() {
		this.renderElements();
	},
	methods: {
		renderElements(): void {
			this.elements = [];
			this.stack = this.label.split(/(:ri-[^:]*:)/g);
			this.stack.forEach((element: string) => {
				if (element && element[0] === ":") {
					this.elements.push({
						type: "icon",
						value: element.slice(1, -1),
					});
				} else if (element) {
					element.split(" ").forEach((word: string) => {
						if (word) {
							this.elements.push({
								type: "text",
								value: word,
							});
						}
					});
					// this.elements.push({
					// 	type: "text",
					// 	value: element,
					// });
				}
			});
		},
	},
	watch: {
		label(): void {
			this.renderElements();
		},
	},
	components: {
		VEcoIcon,
	},
});
</script>

<style lang="scss" scoped>
.text {
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;

	&__text {
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
</style>
