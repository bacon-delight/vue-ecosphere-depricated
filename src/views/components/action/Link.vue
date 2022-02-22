<template lang="pug">
.content
	v-eco-header(:label="$t('headers.link')", :type="2")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	.showcase--grid
		v-eco-link(label="This is a link")
		v-eco-link(label="This is a link with an icon :ri-arrow-right-up-line:")

	v-eco-header(:label="$t('keywords.examples')", :type="6")
	.showcase--grid
		v-eco-link(
			label="View Ecosphere Configuration :ri-settings-line:",
			@click="$ecosphere.handlers.navigate('/guide/configuration')"
		)
		v-eco-link(
			label=":ri-remixicon-line: Remix Icon",
			@click="$ecosphere.handlers.navigate('https://remixicon.com/')"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/action/link/en.md";
import content_zh from "@/assets/docs/components/action/link/zh.md";

export default defineComponent({
	name: "Link",
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
});
</script>
