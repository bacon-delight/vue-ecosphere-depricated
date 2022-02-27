<template lang="pug">
.content
	PageHeader(:label="$t('headers.input')")

	v-eco-header(:label="$t('keywords.default')", :type="6")
	.showcase--grid
		v-eco-input(
			:label="$t('extras.what_is_your_favourite_book')",
			:placeholder="$t('extras.name_of_the_book')"
		)
		v-eco-input(
			:label="$t('extras.how_old_are_you')",
			:placeholder="$t('extras.enter_your_age')",
			type="number",
			:config="{ theme: 'invert' }"
		)
		v-eco-input(
			:label="$t('keywords.email')",
			:placeholder="$t('keywords.email')",
			type="email",
			:config="{ theme: 'transparent' }"
		)
		v-eco-input(
			:label="$t('keywords.password')",
			:placeholder="$t('keywords.password')",
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
