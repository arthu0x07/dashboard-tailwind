'use client'
import { useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tabs1')

  return (
    <Tabs.Root value="currentTab" onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-x-zinc-200">
        <TabItem
          value={'tabs1'}
          title={'My Details'}
          isSelected={currentTab === 'tabs1'}
        />

        <TabItem
          value={'tabs2'}
          title={'Profile'}
          isSelected={currentTab === 'tabs2'}
        />

        <TabItem
          value={'tabs3'}
          title={'Password'}
          isSelected={currentTab === 'tabs3'}
        />

        <TabItem
          value={'tabs4'}
          title={'Team'}
          isSelected={currentTab === 'tabs4'}
        />

        <TabItem
          value={'tabs5'}
          title={'Plan'}
          isSelected={currentTab === 'tabs5'}
        />

        <TabItem
          value={'tabs6'}
          title={'Billing'}
          isSelected={currentTab === 'tabs6'}
        />

        <TabItem
          value={'tabs7'}
          title={'Email'}
          isSelected={currentTab === 'tabs7'}
        />

        <TabItem
          value={'tabs8'}
          title={'Notifications'}
          isSelected={currentTab === 'tabs8'}
        />

        <TabItem
          value={'tabs9'}
          title={'Integrations'}
          isSelected={currentTab === 'tabs9'}
        />

        <TabItem
          value={'tabs10'}
          title={'API'}
          isSelected={currentTab === 'tabs10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
