<template lang="pug">
.avatar(:class="[`avatar--${size}`]")
	img.avatar__image(
		v-if="isURL",
		:src="!invalidURL ? source : '/img/transparent.png'",
		alt="",
		:class="[`avatar--${size}`, `avatar--theme-${hue}`, { 'avatar--circular': circular }]",
		:onerror="handleError"
	)
	.avatar__initials(
		v-else,
		:class="[`avatar--${size}`, `avatar--theme-${hue}`, { 'avatar--circular': circular }]"
	) {{ initials }}

	VEcoDot.avatar__status(
		v-if="status",
		:size="size",
		:class="[`avatar__status--${size}`]",
		:hue="avatar_status_mapper[status]"
	)
</template>

<script lang="ts">
import {
	avatar_hue,
	avatar_size,
	avatar_status,
	avatar_status_mapper,
} from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";
import VEcoDot from "@/plugin/components/common/dot.vue";

export default defineComponent({
	name: "Avatar",
	data() {
		return {
			invalidURL: false,
			avatar_status_mapper,
		};
	},
	props: {
		source: {
			type: String as PropType<string | URL>,
			required: true,
		},
		size: {
			type: String as PropType<avatar_size>,
			default: "medium",
		},
		circular: {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		hue: {
			type: String as PropType<avatar_hue>,
			default: "auto",
		},
		status: {
			type: [String, Boolean] as PropType<avatar_status | boolean>,
			default: false,
		},
	},
	computed: {
		isURL(): boolean {
			return this.source.startsWith("http");
		},
		initials(): string {
			let name = "";
			if (this.source.trim().indexOf(" ") != -1) {
				name = `${this.source[0]}${
					this.source[this.source.indexOf(" ") + 1]
				}`;
			} else {
				name = `${this.source[0]}${this.source[1] || ""}`;
			}
			return name;
		},
	},
	methods: {
		handleError() {
			this.invalidURL = true;
		},
	},
	components: { VEcoDot },
});
</script>

<style lang="scss" scoped>
.avatar {
	position: relative;
	height: fit-content;
	@include use-theme;

	&__image {
		object-fit: cover;
		border-radius: $border-radius-standard;
	}

	&__initials {
		display: flex;
		align-items: center;
		justify-content: center;
		@include font-emphasis;
		margin: 0;
		user-select: none;
		border-radius: $border-radius-standard;
	}

	&__status {
		position: absolute;
		right: 0;
		bottom: 0;

		&--tiny {
			border: 1px solid $color-contrast-faded;
		}
		&--small {
			border: 2px solid $color-contrast-faded;
		}
		&--medium,
		&--large {
			border: 3px solid $color-contrast-faded;
		}
	}

	&--circular {
		border-radius: 50%;
	}

	&--tiny {
		height: $spacer-1-5;
		width: $spacer-1-5;
		font-size: $spacer-0-5;
	}

	&--small {
		height: $spacer-2;
		width: $spacer-2;
		font-size: $spacer-0-75;
	}

	&--medium {
		height: $spacer-3;
		width: $spacer-3;
		font-size: $spacer-1-25;
	}

	&--large {
		height: $spacer-4;
		width: $spacer-4;
		font-size: $spacer-2;
	}
}
</style>
