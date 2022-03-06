<template lang="pug">
.content
	PageHeader(:label="$t('headers.toggle')", :events="false")

	v-eco-header(:label="$t('keywords.examples')", :type="5")
	.showcase
		v-eco-toggle(
			:options="[ { label: 'Today', value: 'today' }, { label: 'Yesterday', value: 'yesterday' }, { label: 'Last week', value: 'last-week' }, ]",
			theme="invert",
			hue="hue",
			:defaultIndex="0"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/action/toggle/en.md";
import content_zh from "@/assets/docs/components/action/toggle/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Toggle",
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
