import { YStack } from '@my/ui'
import TopBar from './TopBar'
import Main from './Main'
import BottomBar from './bottomBar'

export function HomeScreen() {
  return (
    <YStack flex={1} items={'center'}>
      <TopBar />
      <Main />
      <BottomBar />
    </YStack>
  )
}
