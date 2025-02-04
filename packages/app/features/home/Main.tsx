import { Button, H1, Image, Text, XStack, YStack } from '@my/ui'

const Main = () => {
  return (
    <YStack
      background={'#f1f1f1'}
      flex={1}
      width={'100%'}
      items={'center'}
      style={{ position: 'relative' }}
    >
      <XStack background={'white'} padding={'$8'} width={'100%'} gap={'$8'}>
        <Image
          source={{
            uri: 'https://cdn.shopaccino.com/edible-smart/products/black-pepper--kali-mirch-379942_l.jpg?v=528',
          }}
          borderRadius={10}
          height={350}
          aspectRatio={1}
        />
        <YStack gap={'$4'}>
          <YStack>
            <H1 letterSpacing={'$9'}>Black Pepper</H1>
            <Text color={'#8f8f8f'}>KMG Robust</Text>
          </YStack>
          <XStack gap={'$4'}>
            <Button theme={'green'}>Contact</Button>
            <Button theme={'accent'}>
              Request Quote
            </Button>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  )
}

export default Main
