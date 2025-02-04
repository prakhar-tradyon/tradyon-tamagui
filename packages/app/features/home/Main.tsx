import { Button, H1, Image, Separator, Text, XStack, YStack } from '@my/ui'
import BadgeCard from './BadgeCard'

const Main = () => {
  return (
    <YStack
      background={'#f1f1f1'}
      flex={1}
      width={'100%'}
      items={'center'}
      style={{ position: 'relative' }}
    >
      <XStack
        background={'white'}
        $gtSm={{ flexDirection: 'row', padding: '$8' }}
        $xs={{ flexDirection: 'column', padding: '$4', items: 'center', gap: '$2' }}
        $gtXs={{ flexDirection: 'column', padding: '$4', items: 'center', gap: '$2' }}
        width={'100%'}
        gap={'$8'}
        justify={'space-evenly'}
      >
        <Image
          source={{
            uri: 'https://cdn.shopaccino.com/edible-smart/products/black-pepper--kali-mirch-379942_l.jpg?v=528',
          }}
          borderRadius={10}
          height={350}
          aspectRatio={1}
        />
        <YStack gap={'$4'}>
          <YStack items={'center'} $gtSm={{ items: 'flex-start' }}>
            <H1 letterSpacing={'$9'} fontSize={'$9'}>Black Pepper</H1>
            <Text color={'#8f8f8f'}>KMG Robust</Text>
          </YStack>
          <XStack gap={'$4'} display="none" $gtSm={{ display: 'flex' }}>
            <Button theme={'accent'}>Contact</Button>
            <Button theme={'green'}>Request Quote</Button>
          </XStack>

          <Separator />
          <BadgeCard />
        </YStack>
      </XStack>
    </YStack>
  )
}

export default Main
