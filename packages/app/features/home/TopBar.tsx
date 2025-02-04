import { XStack } from '@my/ui'

const TopBar = () => {
  return (
    <XStack
      width={'100%'}
      justify={'center'}
      $gtSm={{ justify: 'space-between' }}
      items={'center'}
      padding="$2"
      background={'#f1f1f1'}
    >
      <img src="./logo.png" style={{ width: 170 }} />
    </XStack>
  )
}

export default TopBar
