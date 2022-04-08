<template lang="pug">
.content
	PageHeader(:label="$t('headers.avatar')", :events="false")

	v-eco-header(:label="$t('keywords.examples')", :type="5")
	.showcase
		v-eco-avatar(:source="users[1]", size="tiny")
		v-eco-avatar(:source="users[5]", size="small")
		v-eco-avatar(:source="users[4]", size="medium")
		v-eco-avatar(:source="users[2]", size="large")

	v-eco-header(:label="$t('keywords.variants')", :type="5")
	.showcase
		v-eco-avatar(:source="users[4]", size="tiny", :circular="false")
		v-eco-avatar(:source="users[3]", size="small", :circular="false")
		v-eco-avatar(:source="users[0]", size="medium", :circular="false")
		v-eco-avatar(:source="users[1]", size="large", :circular="false")

	v-eco-header(:label="$t('keywords.themed')", :type="5")
	.showcase
		v-eco-avatar(
			source="Kevin Bacon",
			size="tiny",
			:circular="false",
			hue="warning"
		)
		v-eco-avatar(source="Julia", size="small", :circular="false", hue="hue")
		v-eco-avatar(source="开心", size="medium", :circular="false", hue="critical")
		v-eco-avatar(source="D", size="large", :circular="false", hue="primary")
	.showcase
		v-eco-avatar(source="安納", size="tiny", hue="secondary")
		v-eco-avatar(source="宝, 苞", size="small", hue="auto")
		v-eco-avatar(source="彩红", size="medium", hue="invert")
		v-eco-avatar(source="Lewis Capaldi", size="large", hue="success")

	v-eco-header(:label="$t('keywords.invalid')", :type="5")
	.showcase
		v-eco-avatar(source="https://images", size="small")

	v-eco-header(:label="$t('keywords.with_status')", :type="5")
	.showcase
		v-eco-avatar(
			:source="users[0]",
			size="tiny",
			:circular="false",
			status="online"
		)
		v-eco-avatar(
			:source="users[1]",
			size="small",
			:circular="true",
			status="offline"
		)
		v-eco-avatar(source="开心", size="medium", :circular="false", status="away")
		v-eco-avatar(
			:source="users[2]",
			size="large",
			:circular="true",
			status="busy"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/common/avatar/en.md";
import content_zh from "@/assets/docs/components/common/avatar/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Avatar",
	data() {
		return {
			locale,
			users: [
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
				"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
				"https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmVzZSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
				"https://images.unsplash.com/photo-1536291734366-71f75ba1a9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoaW5lc2UlMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
				"https://images.unsplash.com/photo-1598264294394-ba29cf557627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
				"https://images.unsplash.com/photo-1551938032-eb735ff04051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGluZGlhJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
			],
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
