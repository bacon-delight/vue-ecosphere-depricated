import guide_installation from "@/assets/docs/guide/installation/zh.md";
import guide_configuration from "@/assets/docs/guide/configuration/zh.md";
import components_action_button from "@/assets/docs/components/action/button/zh.md";

export default {
	site: {
		title: "Ecosphere 设计语言",
		description:
			"现代轻量级设计语言，建立在极简主义的原则之上，从斯堪的纳维亚建筑中获得灵感，为数据密集型应用手工制作。",
		footer_mistake: "发现了一个错误或想改进内容？",
		footer_edit: "在GitHub上编辑此页面 :ri-arrow-right-up-line:",
	},
	headers: {
		guide: "指导",
		installation: "安装",
		configuration: "配置",
		components: "组成部分",
		layout: "布局",
		action: "行动",
		inputs: "输入",
		button: "钮扣",
	},
	actions: {
		learn: "设计理念",
		get_started: "开始 :ri-arrow-right-line:",
	},
	modules: {
		guide: {
			installation: guide_installation,
			configuration: guide_configuration,
		},
		components: {
			action: {
				button: components_action_button,
			},
		},
	},
	keywords: {
		default: "默认",
		light: "光",
		dark: "黑暗",
		inverted: "反转",
		brand: "品牌",
		themed: "主题",
		with_icon: "带图标",
		critical: "严重",
		success: "成功",
		warning: "警告",
		no_outline: "无边框",
		examples: "示例",
	},
};
