<template lang="pug">
img.avatar.avatar__image(
	v-if="isURL",
	:src="!invalidURL ? source : '/img/transparent.png'",
	alt="",
	:class="[`avatar--${size}`, `avatar--theme-${hue}`, { 'avatar--circular': circular }]",
	:onerror="handleError"
)
.avatar.avatar__initials(
	v-else,
	:class="[`avatar--${size}`, `avatar--theme-${hue}`, { 'avatar--circular': circular }]"
) {{ initials }}
</template>

<script lang="ts">
import { avatar_hue, avatar_size } from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "Avatar",
	data() {
		return {
			invalidURL: false,
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
			default: false,
		},
		hue: {
			type: String as PropType<avatar_hue>,
			default: "auto",
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
});
</script>

<style lang="scss" scoped>
.avatar {
	display: inline-block;
	border-radius: $border-radius-standard;
	@include use-theme;

	&__image {
		object-fit: cover;
	}

	&__initials {
		display: flex;
		align-items: center;
		justify-content: center;
		@include font-emphasis;
		margin: 0;
	}

	&--circular {
		border-radius: 50%;
	}

	&--tiny {
		height: $spacer-1-5;
		width: $spacer-1-5;
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
