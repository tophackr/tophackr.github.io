'use client';

import { profile } from '@/constants/profile';
import { Tabs } from '@/types/tabs';
import { projects } from '@/constants/projects';
import { donate } from '@/constants/donate';
import { TextEditor } from '@/components/TextEditor';

const tabsData = {
  [Tabs.profile]: profile,
  [Tabs.projects]: projects,
  [Tabs.donate]: donate,
};

export default function Home() {
  const getCurrentData = (tab: string) => tabsData[tab as Tabs];

  return (
    <TextEditor
      title="tophackr"
      tabs={Object.values(Tabs)}
      getCurrentData={getCurrentData}
    />
  );
}
