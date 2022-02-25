<template lang="pug">
.content
	v-eco-header(:label="$t('headers.accessibility')", :type="2")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	.showcase
		v-eco-accessibility(
			:label="$t('headers.accessibility')",
			:config="{ flow: 'right', contain: false, outline: true, center: false, hue: true }"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/action/accessibility/en.md";
import content_zh from "@/assets/docs/components/action/accessibility/zh.md";

export default defineComponent({
	name: "Accessiblilty",
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
