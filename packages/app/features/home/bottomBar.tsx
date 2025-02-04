import { Button, XStack } from '@my/ui'
import { Heart, ListPlus } from '@tamagui/lucide-icons'

const BottomBar = () => {
  return (
    <XStack $gtSm={{ display: 'none' }} padding="$3" justify={'space-between'} width={'100%'}>
      <XStack gap={'$2'}>
        <Button theme={'green'} icon={Heart} size={'$3'} />
        <Button theme={'green'} icon={ListPlus} size={'$3'} />
      </XStack>
      <XStack gap={'$2'}>
        <Button theme={'accent'} size={'$3'}>
          Contact
        </Button>
        <Button theme={'green'} size={'$3'}>
          Request Quote
        </Button>
      </XStack>
    </XStack>
  )
}

export default BottomBar
