<template lang="pug">
.content
	PageHeader(:label="$t('headers.checkbox')")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	.showcase--grid
		v-eco-checkbox(:label="$t('extras.i_love_ecosphere')")

	v-eco-header(:label="$t('keywords.themed')", :type="6")
	.showcase--grid
		v-eco-checkbox(label="Critical", hue="critical")
		v-eco-checkbox(label="Warning", hue="warning", :defaultValue="true")
		v-eco-checkbox(label="Primary", hue="primary", :defaultValue="true")
		v-eco-checkbox(label="Secondary", hue="secondary")
		v-eco-checkbox(label="Success", hue="success", :defaultValue="true")
		v-eco-checkbox(label="Information", hue="information")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/input/checkbox/en.md";
import content_zh from "@/assets/docs/components/input/checkbox/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Checkbox",
	data() {
		return {
			locale,
		};
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
