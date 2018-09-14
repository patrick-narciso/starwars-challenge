import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Intro from '@/components/Banner.vue'

describe('Banner.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Intro, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg)
  })
});
