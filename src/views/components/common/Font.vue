<template lang="pug">
.content
	PageHeader(:label="$t('headers.font')", :events="false")

	v-eco-header(:label="$t('keywords.examples')", :type="5")
	v-eco-font(label="Lorem Ipsium", type="light")
	v-eco-font(label="Lorem Ipsium", type="emphasis")
	v-eco-font(label="Lorem Ipsium", type="italic")
	v-eco-font(label="Lorem Ipsium", type="serif")
	v-eco-font(label="Lorem Ipsium", type="code")
	v-eco-font(label="Lorem Ipsium", type="sidenote")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/common/font/en.md";
import content_zh from "@/assets/docs/components/common/font/zh.md";
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
