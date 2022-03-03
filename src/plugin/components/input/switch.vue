<template lang="pug">
.switch(@click="toggle")
	.switch__toggle
		VEcoDot(
			:type="state ? hue : 'offline'",
			:class="[state ? 'switch__toggle--active' : 'switch__toggle--inactive']"
		)
	.switch__label(v-if="label") {{ label }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoDot from "@/plugin/components/common/dot.vue";
import { menu_hue } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Switch",
	emits: ["change"],
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
			this.$emit("change", this.state);
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
	components: { VEcoDot },
});
</script>

<style lang="scss" scoped>
.switch {
	display: flex;
	align-items: center;
	column-gap: $spacer-0-5;
	cursor: pointer;
	width: fit-content;

	&__toggle {
		position: relative;
		border: 1px solid rgba($color-helper-grey, 1);
		padding: $spacer-0-125;
		border-radius: $border-radius-standard;
		width: $spacer-1-25;

		&--active,
		&--inactive {
			transition: all $transition-micro ease-in-out;
		}

		&--active {
			margin-left: 60%;
		}
	}

	&__label {
		display: inline-block;
		user-select: none;
	}
}
</style>
