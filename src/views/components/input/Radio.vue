<template lang="pug">
.content
	PageHeader(:label="$t('headers.radio')")

	v-eco-header(:label="$t('keywords.default')", :type="5")
	.showcase--grid
		v-eco-radio(:label="$t('extras.i_love_ecosphere')")

	v-eco-header(:label="$t('keywords.themed')", :type="5")
	.showcase--grid
		v-eco-radio(label="Critical", hue="critical")
		v-eco-radio(label="Warning", hue="warning", :defaultValue="true")
		v-eco-radio(label="Primary", hue="primary", :defaultValue="true")
		v-eco-radio(label="Secondary", hue="secondary")
		v-eco-radio(label="Success", hue="success", :defaultValue="true")
		v-eco-radio(label="Information", hue="information")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/input/radio/en.md";
import content_zh from "@/assets/docs/components/input/radio/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Radio",
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
