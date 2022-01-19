import Button from './Button.vue'

export default {
  title: 'Button',
  component: { Button }
}

const template = () => ({
  components: { xButton: Button },
  template: `
    <x-button hover-text="Unfollow">Following</x-button>
  `
})

export const Default = template.bind({})
