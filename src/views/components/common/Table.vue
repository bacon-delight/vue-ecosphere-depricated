<template lang="pug">
.content
	PageHeader(:label="$t('headers.table')", :events="false")

	v-eco-header(:label="$t('keywords.default')", :type="5")
	.showcase
		v-eco-table(
			:observations="tableData",
			:headers="columns",
			:dividers="false"
		)

	vue3-markdown-it.markdown(:source="content")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "@/locale";
import content_en from "@/assets/docs/components/common/table/en.md";
import content_zh from "@/assets/docs/components/common/table/zh.md";
import PageHeader from "@/components/common/PageHeader.vue";

export default defineComponent({
	name: "Icon",
	data() {
		return {
			locale,
			columns: [
				{
					label: "ID",
					key: "id",
					css: {
						width: "50px",
					},
				},
				{
					label: "Name",
					key: "name",
					css: {
						width: "150px",
					},
				},
				{
					label: "Email",
					key: "email",
					type: "email",
					css: {
						width: "200px",
					},
				},
			],
			tableData: [
				{
					postId: 1,
					id: 1,
					name: "id labore ex et quam laborum",
					email: "Eliseo@gardner.biz",
					body: "+91-8013758776",
				},
				{
					postId: 1,
					id: 2,
					name: "quo vero reiciendis velit similique earum",
					email: "Jayne_Kuhic@sydney.com",
					body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
				},
				{
					postId: 1,
					id: 3,
					name: "odio adipisci rerum aut animi",
					email: "Nikita@garfield.biz",
					body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
				},
				{
					postId: 1,
					id: 4,
					name: "alias odio sit",
					email: "Lew@alysha.tv",
					body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
				},
				{
					postId: 1,
					id: 5,
					name: "vero eaque aliquid doloribus et culpa",
					email: "Hayden@althea.biz",
					body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
				},
				{
					postId: 2,
					id: 6,
					name: "et fugit eligendi deleniti quidem qui sint nihil autem",
					email: "Presley.Mueller@myrl.com",
					body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
				},
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
