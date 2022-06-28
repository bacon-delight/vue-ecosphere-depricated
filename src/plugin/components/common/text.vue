<template lang="pug">
.text(:class="{ 'text--wrap': wrap }")
	template(v-for="element in elements")
		span.text__text(v-if="element.type === 'text'") {{ element.value }}
		VEcoIcon.text__icon(v-if="element.type === 'icon'", :type="element.value")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoIcon from "@/plugin/components/common/icon.vue";
import { text_type } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Text",
	props: {
		label: {
			type: String as PropType<string | number>,
			required: true,
		},
		wrap: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
	},
	data() {
		return {
			stack: [],
			elements: [] as text_type[],
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
	align-items: center;
	column-gap: 0.35em;

	&--wrap {
		flex-wrap: wrap;
	}

	&__text {
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
</style>
