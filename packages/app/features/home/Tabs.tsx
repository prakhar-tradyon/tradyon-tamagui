import { H5, SizableText, Tabs } from '@my/ui'

export default function Tab() {
  return (
    <Tabs defaultValue="tab1" width={400}>
      <Tabs.List>
        <Tabs.Tab value="tab1">
          <SizableText>Tab 1</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="tab2">
          <SizableText>Tab 2</SizableText>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Content value="tab1">
        <H5>Tab 1</H5>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <H5>Tab 2</H5>
      </Tabs.Content>
    </Tabs>
  )
}
