import { View, YStack } from '@my/ui'
import TopBar from './TopBar'
import Main from './Main'
import BottomBar from './bottomBar'
import Tab from './Tabs'

export function HomeScreen() {
  return (
    <YStack flex={1} items={'center'} style={{ position: 'relative' }} background={'#e6e6e6'}>
      <TopBar />
      <Main />
      x
      <View style={{ width: '100%', position: 'fixed', bottom: 0 }}>
        <BottomBar />
      </View>
    </YStack>
  )
}
