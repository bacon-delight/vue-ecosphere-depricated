<template lang="pug">
.footer
	img.footer__contrib(
		v-if="showContrib",
		src="https://contrib.rocks/image?repo=bacon-delight/vue-ecosphere",
		@click="$ecosphere.handlers.navigate('https://github.com/bacon-delight/vue-ecosphere/graphs/contributors')"
	)

	.footer__edit(v-if="showContrib")
		span {{ $t("site.footer_mistake") }}
		v-eco-link(:label="$t('site.footer_edit')", @click="redirectToMarkdown")

	img.footer__logo(
		src="/img/logo.png",
		@click="$ecosphere.handlers.navigate('/')"
	)

	.footer__copyright
		span {{ $t("site.footer_copyright_license_pre") }}&nbsp;
		v-eco-link(
			label="MIT",
			@click="$ecosphere.handlers.navigate('https://opensource.org/licenses/mit-license.php')"
		)
		span &nbsp;{{ $t("site.footer_copyright_license_post") }}

	.footer__copyright.footer--last
		span {{ $t("site.copyright") }} &copy; 2021 - {{ new Date().getFullYear() }}&nbsp;
		v-eco-link(
			:label="$t('site.team_ecosphere')",
			@click="$ecosphere.handlers.navigate('/introduction/team')"
		)
		//- https://api.github.com/repos/bacon-delight/vue-ecosphere
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
	computed: {
		showContrib(): boolean {
			const blacklists = ["/introduction/team"];
			return !blacklists.includes(this.$route.path);
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

	&__logo {
		margin-top: $spacer-1;
		max-height: $spacer-5;
		cursor: pointer;
		transition: all $transition-medium ease-in-out;

		&:hover {
			opacity: 0.5;
			filter: grayscale(100%);
		}
	}

	&--last {
		margin-bottom: $spacer-2;
	}
}
</style>
