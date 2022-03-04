<template lang="pug">
.content
	PageHeader(
		:label="$t('headers.colours')",
		:usage="false",
		:api="false",
		:events="false"
	)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/design/colours/en.md";
import content_zh from "@/assets/docs/design/colours/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Typography",
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
.markdown {
	margin-top: $spacer-2;
}
</style>
