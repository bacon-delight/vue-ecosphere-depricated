<template lang="pug">
.footer
	img.footer__contrib(
		src="https://contrib.rocks/image?repo=bacon-delight/vue-ecosphere",
		@click="$ecosphere.handlers.navigate('https://github.com/bacon-delight/vue-ecosphere/graphs/contributors')"
	)

	.footer__edit
		span {{ $t("site.footer_mistake") }}
		v-eco-link(:label="$t('site.footer_edit')", @click="redirectToMarkdown")

	.footer__copyright
		span &copy; {{ new Date().getFullYear() }} | MIT Licensed | &nbsp;
		v-eco-link(
			:label="'Dipanjan De'",
			@click="$ecosphere.handlers.navigate('https://dipanjande.com')"
		)
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Footer",
	methods: {
		redirectToMarkdown() {
			const locale = this.$i18n.availableLocales.includes(
				this.$i18n.locale
			)
				? `${this.$i18n.locale}.md`
				: "";
			this.$ecosphere.handlers.navigate(
				`https://github.com/bacon-delight/vue-ecosphere/edit/main/src/assets/docs${this.$route.fullPath}/${locale}`
			);
		},
	},
});
</script>

<style lang="scss" scoped>
.footer {
	@include font-light;
	margin-top: $spacer-2;
	border-top: 1px solid rgba($color-helper-grey, 0.2);
	padding: $spacer-1 $spacer-0-375;
	text-align: center;

	&__edit {
		margin: $spacer-0-25;
	}

	&__contrib {
		max-height: $spacer-1-5;
		cursor: pointer;
	}
}
</style>
