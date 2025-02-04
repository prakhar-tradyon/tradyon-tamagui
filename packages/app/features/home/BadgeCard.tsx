import { XStack, YStack, Text, Card } from '@my/ui'
import { FileQuestion, ListChecks, StarFull, Verified } from '@tamagui/lucide-icons'

const BadgeCard = () => {
  const cardData = [
    {
      title: 'Verified by Tradyon',
      icon: <Verified color={'#ecd20a'} />,
    },
    {
      title: '15 year old company',
      icon: <StarFull color={'#ecd20a'} />,
    },
    {
      title: 'Based in India',
      icon: <FileQuestion />,
    },
    {
      title: 'View all details',
      icon: <ListChecks />,
    },
  ]
  return (
    <Card padding={'$4'}>
      <XStack gap={'$4'}>
        {cardData.map(({ title, icon }, index) => (
          <YStack items={'center'} gap={'$2'} key={index}>
            {icon}
            <Text fontSize={'$1'} width={70} style={{ textAlign: 'center' }}>
              {title}
            </Text>
          </YStack>
        ))}
      </XStack>
    </Card>
  )
}

export default BadgeCard
