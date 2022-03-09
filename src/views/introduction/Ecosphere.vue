<template lang="pug">
.content
	PageHeader(
		:label="$t('site.title')",
		:events="false",
		:usage="false",
		:api="false"
	)
	v-eco-text(:label="$t('site.details')")

	.quick-actions
		//- Installation
		.quick-actions__item(
			@click="$ecosphere.handlers.navigate('/guide/installation')"
		)
			v-eco-icon.quick-actions__icon(type="ri-settings-line")
			.quick-actions__description
				v-eco-header(
					:label="$t('headers.installation')",
					:type="6",
					:margin="false"
				)
				v-eco-paragraph(:label="$t('site.install_description')", :margin="false")

		//- Themeing
		.quick-actions__item(@click="$ecosphere.handlers.navigate('/guide/theme')")
			v-eco-icon.quick-actions__icon(type="ri-paint-brush-line")
			.quick-actions__description
				v-eco-header(:label="$t('headers.theme')", :type="6", :margin="false")
				v-eco-paragraph(:label="$t('site.theme_description')", :margin="false")

	Explore

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/introduction/ecosphere/en.md";
import content_zh from "@/assets/docs/introduction/ecosphere/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";
import Explore from "@/components/Explore.vue";

export default defineComponent({
	name: "Ecosphere",
	data() {
		return { locale };
	},
	computed: {
		content() {
			const locale = this.locale(this.$i18n);
			if (locale === "zh") {
				return content_zh;
			} else {
				return content_en;
			}
		},
	},
	components: {
		PageHeader,
		Explore,
	},
});
</script>

<style lang="scss" scoped>
.quick-actions {
	margin-top: $spacer-1;
	display: grid;
	grid-template-columns: 1fr;
	row-gap: $spacer-0-5;

	&__item {
		border: 1px solid $color-helper-grey;
		border-radius: $border-radius-standard;
		padding: $spacer-0-5 $spacer-0-75;
		display: grid;
		grid-template-columns: min-content 1fr;
		column-gap: $spacer-0-5;
		cursor: pointer;
		transition: all $transition-micro ease-in-out;

		&:hover {
			border-color: $color-helper-transparent;
			background: $color-background;
			box-shadow: $box-shadow-medium;

			.quick-actions__icon {
				color: $color-hue;
			}
		}
	}

	&__icon {
		font-size: $spacer-1-5;
		display: block;
		align-self: center;
		transition: all $transition-micro ease-in-out;
	}
}
</style>
