<template lang="pug">
.content
	PageHeader(:label="$t('headers.input')")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	.showcase--grid
		v-eco-input(
			label="What's your favourite book?",
			placeholder="Name of the book"
		)
		v-eco-input(
			label="How old are you?",
			placeholder="Age",
			type="number",
			:config="{ theme: 'invert' }",
			:defaultValue="12"
		)
		v-eco-input(
			label="Email ID",
			placeholder="Email",
			type="email",
			:regex="$ecosphere.validators.email",
			:config="{ theme: 'transparent' }",
			:required="true"
		)
		v-eco-input(
			label="Password",
			placeholder="Password",
			type="password",
			:config="{ outline: false }"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/input/input/en.md";
import content_zh from "@/assets/docs/components/input/input/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Input",
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
