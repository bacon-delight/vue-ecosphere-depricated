<template lang="pug">
.content
	PageHeader(
		:label="$t('site.team')",
		:events="false",
		:usage="false",
		:api="false"
	)
	vue3-markdown-it.markdown(:source="content")

	.team
		.team__item
			v-eco-avatar(
				source="https://avatars.githubusercontent.com/u/32262896?v=4"
			)
			.team__description
				.team__description--item
					v-eco-header(label="Dipanjan De", :type="6", :margin="false")
				.team__description--item.team__description--links
					v-eco-link(
						label=":ri-global-fill:",
						@click="$ecosphere.handlers.navigate('https://dipanjande.com/')"
					)
					v-eco-link(
						label=":ri-linkedin-box-fill:",
						@click="$ecosphere.handlers.navigate('https://www.linkedin.com/in/dipanjan131/')"
					)
					v-eco-link(
						label=":ri-github-fill:",
						@click="$ecosphere.handlers.navigate('https://github.com/bacon-delight')"
					)
					v-eco-link(
						label=":ri-twitter-fill:",
						@click="$ecosphere.handlers.navigate('https://twitter.com/bacon_delight')"
					)
				.team__description--item
					v-eco-paragraph(
						label=":ri-briefcase-line: Product Data Scientist",
						:margin="false"
					)
				.team__description--item
					v-eco-paragraph(
						label=":ri-building-2-line: Karkinos Healthcare",
						:margin="false"
					)
				.team__description--item
					v-eco-paragraph(
						label=":ri-map-pin-line: Bangalore, India",
						:margin="false"
					)
				.team__description--flex
					v-eco-tag(label="Components", theme="invert")
					v-eco-tag(label="Designs", theme="invert")
					v-eco-tag(label="Plugin", theme="invert")
					v-eco-tag(label="Documentation", theme="invert")
					v-eco-tag(label="Typography", theme="invert")
					v-eco-tag(label="Colours", theme="invert")
					v-eco-tag(label="Figma", theme="invert")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/introduction/team/en.md";
import content_zh from "@/assets/docs/introduction/team/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Team",
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
	},
});
</script>

<style lang="scss" scoped>
.team {
	padding-top: $spacer-1;

	&__item {
		display: grid;
		grid-template-columns: min-content 1fr;
		margin-bottom: $spacer-1;
		column-gap: $spacer-0-5;
	}

	&__description {
		&--links {
			display: flex;
			column-gap: $spacer-0-5;
			font-size: 1.2rem;
			margin-top: $spacer-0-125;
		}

		&--flex {
			display: flex;
			column-gap: $spacer-0-25;
			row-gap: $spacer-0-25;
			flex-wrap: wrap;
			margin-top: $spacer-0-125;
		}
	}
}
</style>
