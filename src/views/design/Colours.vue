<template lang="pug">
.content
	PageHeader(
		:label="$t('headers.colours')",
		:usage="false",
		:api="false",
		:events="false"
	)

	//- Light Theme -----------------------------------------------------------
	v-eco-header(:label="$t('keywords.light')", :type="4")
	.showcase--grid
		v-eco-input(
			:label="$t('keywords.background')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-background']",
			@change="(value) => { handleChange('--color-background', value); }"
		)
		v-eco-input(
			:label="$t('keywords.background_faded')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-background-faded']",
			@change="(value) => { handleChange('--color-background-faded', value); }"
		)
		v-eco-input(
			:label="$t('keywords.contrast')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-contrast']",
			@change="(value) => { handleChange('--color-contrast', value); }"
		)
		v-eco-input(
			:label="$t('keywords.contrast_faded')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-contrast-faded']",
			@change="(value) => { handleChange('--color-contrast-faded', value); }"
		)

	//- Dark Theme ------------------------------------------------------------
	v-eco-header(:label="$t('keywords.dark')", :type="4")
	.showcase--grid
		v-eco-input(
			:label="$t('keywords.background')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="darkColours['--color-background']",
			@change="(value) => { handleChange('--color-background', value, 'dark'); }"
		)
		v-eco-input(
			:label="$t('keywords.background_faded')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="darkColours['--color-background-faded']",
			@change="(value) => { handleChange('--color-background-faded', value, 'dark'); }"
		)
		v-eco-input(
			:label="$t('keywords.contrast')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="darkColours['--color-contrast']",
			@change="(value) => { handleChange('--color-contrast', value, 'dark'); }"
		)
		v-eco-input(
			:label="$t('keywords.contrast_faded')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="darkColours['--color-contrast-faded']",
			@change="(value) => { handleChange('--color-contrast-faded', value, 'dark'); }"
		)

	v-eco-header(:label="$t('keywords.examples')", :type="6")
	.showcase
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="small",
			:circular="false",
			hue="auto"
		)
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="small",
			:circular="false",
			hue="invert"
		)
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="tiny",
			:circular="false",
			hue="auto"
		)
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="tiny",
			:circular="false",
			hue="invert"
		)

	.showcase
		v-eco-toggle(
			:options="[ { label: $t('keywords.default'), value: 'auto' }, { label: $t('keywords.inverted'), value: 'invert' }, ]",
			:theme="elementaryToggleTheme",
			:defaultIndex="0",
			@select="(value) => { elementaryToggleTheme = value; }"
		)

	.showcase
		v-eco-tag(:label="$t('keywords.default')", theme="auto")
		v-eco-tag(:label="$t('keywords.inverted')", theme="invert")

	.showcase
		v-eco-button(:label="$t('keywords.default')", theme="auto")
		v-eco-button(:label="$t('keywords.inverted')", theme="invert")

	//- Brand Theme -----------------------------------------------------------
	v-eco-header(:label="$t('headers.brand')", :type="4")
	.showcase--grid.showcase--grid-3
		v-eco-input(
			:label="$t('keywords.primary')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-primary']",
			@change="(value) => { handleChange('--color-primary', value); }"
		)
		v-eco-input(
			:label="$t('keywords.primary_faded')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-primary-faded']",
			@change="(value) => { handleChange('--color-primary-faded', value); }"
		)
		v-eco-input(
			:label="`${$t('keywords.primary')} ${$t('keywords.contrast')}`",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-primary-contrast']",
			@change="(value) => { handleChange('--color-primary-contrast', value); }"
		)
		v-eco-input(
			:label="$t('keywords.secondary')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-secondary']",
			@change="(value) => { handleChange('--color-secondary', value); }"
		)
		v-eco-input(
			:label="$t('keywords.secondary_faded')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-secondary-faded']",
			@change="(value) => { handleChange('--color-secondary-faded', value); }"
		)
		v-eco-input(
			:label="`${$t('keywords.secondary')} ${$t('keywords.contrast')}`",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-secondary-contrast']",
			@change="(value) => { handleChange('--color-secondary-contrast', value); }"
		)
		v-eco-input(
			:label="$t('keywords.hue')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-hue']",
			@change="(value) => { handleChange('--color-hue', value); }"
		)
		v-eco-input(
			:label="$t('keywords.hue_faded')",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-hue-faded']",
			@change="(value) => { handleChange('--color-hue-faded', value); }"
		)
		v-eco-input(
			:label="`${$t('keywords.hue')} ${$t('keywords.contrast')}`",
			type="color",
			:config="{ theme: 'transparent' }",
			:defaultValue="defaultColours['--color-hue-contrast']",
			@change="(value) => { handleChange('--color-hue-contrast', value); }"
		)

	v-eco-header(:label="$t('keywords.examples')", :type="6")
	.showcase
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="small",
			:circular="false",
			hue="primary"
		)
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="small",
			:circular="false",
			hue="secondary"
		)
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="small",
			:circular="false",
			hue="hue"
		)
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="tiny",
			:circular="false",
			hue="primary"
		)
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="tiny",
			:circular="false",
			hue="secondary"
		)
		v-eco-avatar(
			:source="$t('keywords.character')",
			size="tiny",
			:circular="false",
			hue="hue"
		)

	.showcase
		v-eco-toggle(
			:options="[ { label: $t('keywords.primary'), value: 'primary' }, { label: $t('keywords.secondary'), value: 'secondary' }, { label: $t('keywords.hue'), value: 'hue' }, ]",
			:hue="brandToggleHue",
			:defaultValue="brandToggleHue",
			@select="(value) => { brandToggleHue = value; }"
		)

	.showcase
		v-eco-tag(:label="$t('keywords.primary')", theme="primary")
		v-eco-tag(:label="$t('keywords.secondary')", theme="secondary")
		v-eco-tag(:label="$t('keywords.hue')", theme="hue")

	.showcase
		v-eco-button(:label="$t('keywords.primary')", theme="primary")
		v-eco-button(:label="$t('keywords.secondary')", theme="secondary")
		v-eco-button(:label="$t('keywords.hue')", theme="hue")

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/design/colours/en.md";
import content_zh from "@/assets/docs/design/colours/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";
import {
	defaultLightPalette,
	defaultDarkPalette,
} from "@/plugin/utils/defaults/palette";

export default defineComponent({
	name: "Typography",
	data() {
		return {
			locale,
			defaultColours: defaultLightPalette,
			darkColours: defaultDarkPalette,
			brandToggleHue: "primary",
			elementaryToggleTheme: "auto",
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
	methods: {
		handleChange(key: string, value: string, theme = "light"): void {
			if (theme === "light") {
				this.defaultColours[key] = value;
			} else {
				this.darkColours[key] = value;
			}
			this.$ecosphere.theme.setColors(
				this.defaultColours,
				this.darkColours
			);
		},
	},
});
</script>

<style lang="scss" scoped>
.markdown {
	margin-top: $spacer-2;
}
</style>
