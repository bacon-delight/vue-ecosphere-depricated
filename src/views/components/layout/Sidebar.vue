<template lang="pug">
.content
	v-eco-header(:label="$t('headers.sidebar')", :type="2")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/layout/sidebar/en.md";
import content_zh from "@/assets/docs/components/layout/sidebar/zh.md";

export default defineComponent({
	name: "Sidebar",
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
