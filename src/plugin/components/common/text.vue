<template lang="pug">
.text(:class="{ 'text--wrap': wrap }")
	template(v-for="(element, index) in elements")
		span.text__text(v-if="element.type === 'text'") {{ element.value }}
		VEcoIcon.text__icon(v-if="element.type === 'icon'", :type="element.value")
		span.text__text(v-if="index !== elements.length - 1") &nbsp;
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
		wrap: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
	},
	data() {
		return {
			stack: [],
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

	&--wrap {
		flex-wrap: wrap;
	}

	&__text {
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
</style>
