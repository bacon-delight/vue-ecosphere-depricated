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
					v-eco-header(label="Dipanjan De 🇮🇳", :type="6", :margin="false")
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
					v-eco-link(
						:label="`${$t('extras.get_mentored')} :ri-arrow-right-up-line:`",
						@click="$ecosphere.handlers.navigate('https://adplist.org/mentors/dipanjan-de')"
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
					v-eco-tag(:label="$t('headers.components')", theme="invert")
					v-eco-tag(:label="$t('headers.design')", theme="invert")
					v-eco-tag(:label="$t('keywords.plugin')", theme="invert")
					v-eco-tag(:label="$t('keywords.documentation')", theme="invert")
					v-eco-tag(:label="$t('headers.typography')", theme="invert")
					v-eco-tag(:label="$t('headers.colours')", theme="invert")
					v-eco-tag(label="Figma", theme="invert")

		.team__item
			v-eco-avatar(source="https://bacon-delight.sirv.com/Users/Bubble.jpeg")
			.team__description
				.team__description--item
					v-eco-header(label="Bubble L. 🇨🇳", :type="6", :margin="false")
				.team__description--item.team__description--links
					v-eco-link(
						label=":ri-mail-send-fill:",
						href="mailto:342008717@qq.com,lilanBubble@outlook.com"
					)
				.team__description--item
					v-eco-link(
						:label="`${$t('extras.learn_chinese')} :ri-arrow-right-up-line:`",
						@click="$ecosphere.handlers.navigate('https://preply.com/en/tutor/1899829')"
					)
				.team__description--item
					v-eco-paragraph(
						label=":ri-briefcase-line: Translator, TCSL Teacher",
						:margin="false"
					)

				.team__description--item
					v-eco-paragraph(
						label=":ri-map-pin-line: Chongqing, China",
						:margin="false"
					)
				.team__description--flex
					v-eco-tag(:label="$t('keywords.translations')", theme="invert")
					v-eco-tag(:label="$t('keywords.documentation')", theme="invert")
					v-eco-tag(:label="$t('headers.typography')", theme="invert")

		.team__section
			v-eco-header(
				:label="`:ri-github-fill: ${$t('keywords.contributors')}`",
				:type="5"
			)
			img.team__contrib(
				src="https://contrib.rocks/image?repo=bacon-delight/vue-ecosphere",
				@click="$ecosphere.handlers.navigate('https://github.com/bacon-delight/vue-ecosphere/graphs/contributors')"
			)
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

	&__section {
		margin-top: $spacer-1-5;
	}

	&__contrib {
		cursor: pointer;
		max-width: 100%;
	}
}
</style>
