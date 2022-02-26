<template lang="pug">
.content
	PageHeader(:label="$t('headers.header')", :events="false")

	v-eco-header(:label="$t('keywords.examples')", :type="6")
	v-eco-header(label=":ri-h-3: - Ecosphere :ri-heart-2-line:", :type="3")
	v-eco-header(label=":ri-h-4: - Ecosphere :ri-heart-2-line:", :type="4")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/common/header/en.md";
import content_zh from "@/assets/docs/components/common/header/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Header",
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
