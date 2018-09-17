import Vue from 'vue';
import { expect } from 'chai';
import Card from '@/components/Card.vue';
import '@/filters/planetImage.js';

function getMountedComponent(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm.$props.planet;
}

describe ('Card.vue', () => {
  it('renders props.planet when passed', () => {
    expect (getMountedComponent(Card, {
        planet: {
          name: 'Toydaria',
          diameter: '7900',
          climate: 'temperate',
          gravity: '1',
          terrain: 'swamps, lakes',
          surface_water: 'unknown',
          films: [],
          population: '11000000'
        }
      })
    ).to.deep.equal({
        name: 'Toydaria',
        diameter: '7900',
        climate: 'temperate',
        gravity: '1',
        terrain: 'swamps, lakes',
        surface_water: 'unknown',
        films: [],
        population: '11000000'
    });
  })
});