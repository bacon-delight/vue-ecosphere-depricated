<template lang="pug">
.content
	PageHeader(:label="$t('headers.switch')")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	.showcase--grid
		v-eco-switch(:label="$t('extras.i_love_ecosphere')", hue="hue")

	v-eco-header(:label="$t('keywords.hue')", :type="6")
	.showcase--grid
		v-eco-switch(label="Critical", hue="critical", :defaultValue="true")
		v-eco-switch(label="Warning", hue="warning")
		v-eco-switch(label="Primary", hue="primary", :defaultValue="true")
		v-eco-switch(label="Secondary", hue="secondary", :defaultValue="true")
		v-eco-switch(label="Success", hue="success")
		v-eco-switch(label="Information", hue="information")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/input/switch/en.md";
import content_zh from "@/assets/docs/components/input/switch/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Switch",
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
