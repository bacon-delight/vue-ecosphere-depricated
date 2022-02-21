<template lang="pug">
.content
	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/guide/configuration/en.md";
import content_zh from "@/assets/docs/guide/configuration/zh.md";

export default defineComponent({
	name: "Configuration",
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
