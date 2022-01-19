import AppIcon from './AppIcon.vue'

export default {
  title: 'AppIcon',
  component: { AppIcon }
}

const template = () => ({
  components: { xIcon: AppIcon },
  template: `
    <AppIcon></AppIcon>
  `
})

export const Default = template.bind({})
