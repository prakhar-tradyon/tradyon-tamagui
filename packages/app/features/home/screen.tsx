import { View, YStack } from '@my/ui'
import TopBar from './TopBar'
import Main from './Main'
import BottomBar from './bottomBar'

export function HomeScreen() {
  return (
    <YStack flex={1} items={'center'} style={{ position: 'relative' }}>
      <TopBar />
      <Main />
      <View style={{ width: '100%', position: 'fixed', bottom: 0 }}>
        <BottomBar />
      </View>
    </YStack>
  )
}
