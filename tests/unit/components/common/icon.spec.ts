import { shallowMount } from "@vue/test-utils";
import VEcoIcon from "@/plugin/components/common/icon.vue";

describe("VEcoIcon", () => {
	it("renders icon with appropriate class", () => {
		const type = "ri-home-line";
		const wrapper = shallowMount(VEcoIcon, {
			props: { type },
		});
		expect(wrapper.find("i").exists()).toBe(true);
		expect(wrapper.find(`.${type}`).exists()).toBe(true);
	});
});
