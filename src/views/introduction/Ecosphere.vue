<template lang="pug">
.content
	PageHeader(
		:label="$t('site.title')",
		:events="false",
		:usage="false",
		:api="false"
	)
	v-eco-text(:label="$t('site.details')")
	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/introduction/ecosphere/en.md";
import content_zh from "@/assets/docs/introduction/ecosphere/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

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
	},
});
</script>
