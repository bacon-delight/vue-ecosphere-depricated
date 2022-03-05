import { shallowMount } from "@vue/test-utils";
import VEcoDot from "@/plugin/components/common/dot.vue";

describe("VEcoDot", () => {
	it("renders status with appropriate class", () => {
		const hue = "information";
		const wrapper = shallowMount(VEcoDot, {
			props: { hue },
		});
		expect(wrapper.find(".dot").exists()).toBe(true);
		expect(wrapper.find(`.dot--theme-${hue}`).exists()).toBe(true);
	});
});
