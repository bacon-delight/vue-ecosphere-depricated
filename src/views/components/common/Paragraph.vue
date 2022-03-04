<template lang="pug">
.content
	PageHeader(:label="$t('headers.paragraph')", :events="false")

	v-eco-header(:label="$t('keywords.examples')", :type="5")
	v-eco-paragraph(:label="$t('extras.chinese_food_is_delicious')", type="light")
	v-eco-paragraph(:label="$t('extras.i_love_ecosphere')", type="emphasis")
	v-eco-paragraph(:label="$t('extras.wholeheartedly')", type="italic")
	v-eco-paragraph(:label="$t('extras.i_like_to_travel')", type="serif")
	v-eco-paragraph(label="font-family: monospace;", type="code")
	v-eco-paragraph(:label="$t('extras.i_can_speak_chinese')", type="sidenote")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/common/paragraph/en.md";
import content_zh from "@/assets/docs/components/common/paragraph/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Paragraph",
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
