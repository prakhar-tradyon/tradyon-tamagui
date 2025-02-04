import { YStack } from '@my/ui'
import { useLink } from 'solito/navigation'
import TopBar from './TopBar'
import Main from './Main'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  return (
    <YStack flex={1} items={'center'}>
      <TopBar />
      <Main />
    </YStack>
  )
}
