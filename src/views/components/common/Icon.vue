<template lang="pug">
.content
	v-eco-header(:label="$t('headers.icon')", :type="2")

	v-eco-header(:label="$t('keywords.examples')", :type="6")
	.showcase
		v-eco-icon(type="ri-sun-line")
		v-eco-icon(type="ri-moon-line")
		v-eco-icon(type="ri-contrast-line")
		v-eco-icon(type="ri-building-2-line")
		v-eco-icon(type="ri-fire-line")
		v-eco-icon(type="ri-alarm-warning-line")
		v-eco-icon(type="ri-alarm-line")
		v-eco-icon(type="ri-heart-line")
		v-eco-icon(type="ri-home-line")
		v-eco-icon(type="ri-dislike-line")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/common/icon/en.md";
import content_zh from "@/assets/docs/components/common/icon/zh.md";

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
});
</script>
