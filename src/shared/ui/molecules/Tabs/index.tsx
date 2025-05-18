import { useState } from 'react';
import { TabsProps } from './Tabs.types';

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, onChange }) => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultTab);

  if (!defaultTab || tabs.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex justify-center rounded-lg bg-gray-200 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              setSelectedTab(tab.value);
              onChange(tab.value);
            }}
            className={`px-4 py-2 transition-all ${
              selectedTab === tab.value
                ? 'bg-primary rounded-lg font-semibold text-white'
                : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mx-4 mt-8">
        {tabs.map(
          (tab) =>
            tab.value === selectedTab && (
              <div key={tab.value}>{tab.component?.()}</div>
            ),
        )}
      </div>
    </div>
  );
};

export default Tabs;
