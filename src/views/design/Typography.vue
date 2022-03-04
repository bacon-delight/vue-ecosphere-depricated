<template lang="pug">
.content
	PageHeader(
		:label="$t('headers.typography')",
		:usage="false",
		:api="false",
		:events="false"
	)

	v-eco-header(:label="`:ri-h-1: - ${$t('headers.typography')}`", :type="1")
	v-eco-header(:label="`:ri-h-2: - ${$t('headers.typography')}`", :type="2")
	v-eco-header(:label="`:ri-h-3: - ${$t('headers.typography')}`", :type="3")
	v-eco-header(:label="`:ri-h-4: - ${$t('headers.typography')}`", :type="4")
	v-eco-header(:label="`:ri-h-5: - ${$t('headers.typography')}`", :type="5")
	v-eco-header(:label="`:ri-h-6: - ${$t('headers.typography')}`", :type="6")
	p.font.font--code {{ $t("headers.typography") }}
	p.font.font--emphasis {{ $t("headers.typography") }}
	p.font.font--serif {{ $t("headers.typography") }}
	p.font.font--italic {{ $t("headers.typography") }}
	p.font.font--light {{ $t("headers.typography") }}
	p.font.font--sidenote {{ $t("headers.typography") }}

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/design/typography/en.md";
import content_zh from "@/assets/docs/design/typography/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Typography",
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

<style lang="scss" scoped>
.markdown {
	margin-top: $spacer-2;
}

.showcase {
	&--box {
		border: 1px solid rgba($color-helper-grey, 0.5);
		border-radius: $border-radius-standard;
		padding: $spacer-0-5;
		margin-bottom: $spacer-0-5;

		&:first-child h1 {
			margin-top: 0 !important;
		}
	}
}
.font {
	&--light {
		@include font-light;
	}

	&--emphasis {
		@include font-emphasis;
	}

	&--italic {
		@include font-italic;
	}

	&--serif {
		@include font-serif;
	}

	&--code {
		@include font-code;
	}

	&--sidenote {
		@include font-sidenote;
	}
}
</style>
