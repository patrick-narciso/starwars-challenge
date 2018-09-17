import Vue from 'vue';
import { expect } from 'chai';
import Banner from '@/components/Banner.vue';

function getMountedComponent(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData }).$mount();
  return vm.$props;
}

describe ('Banner.vue', () => {
  it('renders props.msg when passed', () => {
    expect (getMountedComponent(Banner, {
      msg: 'Testing msg prop!'
    }).msg
    ).to.equal('Testing msg prop!');
  })
});