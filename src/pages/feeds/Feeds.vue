<template>
  <div>
    <div class="header">
      <AppHeader>
        <template #headline>
          <AppIcon />
          <div class="header-links">
            <Icon class="icon" name="home" />
            <div class="current-user">
              <img
                class="user-profile"
                src="../../assets/images/avatars/ProfilePic.svg"
                alt="My profile"
              />
            </div>
            <Icon class="icon" name="exit" />
          </div>
        </template>

        <template #content>
          <ul class="stories">
            <li class="stories-item" v-for="story in stories" :key="story.id">
              <UserAvatar
                :avatar="story.avatar"
                :username="story.username"
                @onPress="handlePress(story.id)"
              />
            </li>
          </ul>
        </template>
      </AppHeader>
    </div>

    <div class="x-content" v-for="card in cards" :key="card.id">
      <Card :card = card>
        <template #cardContent>
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text" v-html="card.text">
          </p>
        </template>
      </Card>

    </div>
  </div>
</template>

<script>
import { AppHeader } from '../../components/header'
import { UserAvatar } from '../../components/userAvatar'
import { AppIcon } from '../../components/appIcon'
import { Card } from '../../components/card'
import { Icon } from '../../icons'
import stories from './users.json'
import cards from './cards.json'

export default {
  name: 'Feeds',
  components: {
    AppHeader,
    UserAvatar,
    Icon,
    AppIcon,
    Card
  },
  data () {
    return {
      stories,
      cards
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped>

</style>
