import { mount, shallowMount } from '@vue/test-utils'
import ExampleComponent from '../../components/ExampleComponent.vue'

test('it works', () => {
    expect(1 + 1).toBe(2)
})

describe('ExampleComponent', () => {
    it('renders props.msg when passed', () => {
        const words = 'New Words'
        const shallowWrapper = shallowMount(ExampleComponent, {
            propsData: { words }
        })
        expect(shallowWrapper.text()).toMatch(words)
    })

    test('should mount without crashing', () => {
        const wrapper = mount(ExampleComponent)

        expect(wrapper).toMatchSnapshot()
    })
})

