<template lang="pug">
.checkbox(@click="toggle")
	.checkbox__toggle
		VEcoIcon(
			:type="state ? 'ri-checkbox-fill' : 'ri-checkbox-blank-line'",
			:class="[state ? `checkbox__toggle--color-${hue}` : '']"
		)
	.checkbox__label(v-if="label") {{ label }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoIcon from "@/plugin/components/common/icon.vue";
import { menu_hue } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Checkbox",
	emits: ["toggle"],
	props: {
		hue: {
			type: String as PropType<menu_hue>,
			default: "hue",
		},
		label: {
			type: String as PropType<string>,
			default: null,
		},
		defaultValue: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
	},
	data() {
		return {
			state: false,
		};
	},
	methods: {
		toggle() {
			this.state = !this.state;
			this.$emit("toggle", this.state);
		},
	},
	mounted() {
		this.state = this.defaultValue;
	},
	watch: {
		defaultValue(value: boolean) {
			this.state = value;
		},
	},
	components: { VEcoIcon },
});
</script>

<style lang="scss" scoped>
.checkbox {
	display: flex;
	align-items: center;
	column-gap: $spacer-0-5;
	width: fit-content;
	cursor: pointer;

	&__toggle {
		font-size: $spacer-0-75;
		transform: translateY(1px);
		@include use-color;
	}

	&__label {
		display: inline-block;
		user-select: none;
	}
}
</style>
