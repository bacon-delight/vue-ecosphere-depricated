<template lang="pug">
.radio(@click="toggle")
	.radio__toggle
		VEcoIcon(
			:type="state ? 'ri-radio-button-line' : 'ri-checkbox-blank-circle-line radio__toggle--inactive'",
			:class="[state ? `radio__toggle--color-${hue}` : '']"
		)
	.radio__label(v-if="label") {{ label }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoIcon from "@/plugin/components/common/icon.vue";
import { menu_hue } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Radio",
	emits: ["select"],
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
			if (!this.state) {
				this.state = true;
				this.$emit("select");
			}
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
.radio {
	display: flex;
	align-items: center;
	column-gap: $spacer-0-5;
	width: fit-content;
	cursor: pointer;

	&__toggle {
		font-size: $spacer-0-75;
		transform: translateY(1px);
		@include use-color;

		&--inactive {
			color: rgba($color-helper-grey, 0.5);
		}
	}

	&__label {
		display: inline-block;
		user-select: none;
	}
}
</style>
