<template lang="pug">
.content
	PageHeader(:label="$t('headers.tag')", :events="false")

	v-eco-header(:label="$t('keywords.default')", :type="5")
	.showcase
		v-eco-tag(label="Ecosphere :ri-heart-2-line:")

	v-eco-header(:label="$t('keywords.themed')", :type="5")
	.showcase
		v-eco-tag(label="WIP", theme="warning")
		v-eco-tag(label="Error :ri-error-warning-line:", theme="critical")
		v-eco-tag(label="JavaScript", theme="auto")
		v-eco-tag(label="Ecosphere", theme="invert")
		v-eco-tag(label="Python", theme="success")

	v-eco-header(:label="$t('keywords.variants')", :type="5")
	.showcase
		v-eco-tag(label="Hue", theme="hue", size="regular")
		v-eco-tag(label="Primary", theme="primary", size="regular")
		v-eco-tag(label="Secondary", theme="secondary", size="regular")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/common/tag/en.md";
import content_zh from "@/assets/docs/components/common/tag/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Icon",
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
