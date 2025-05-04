export interface Tab {
  label: string;
  value: string;
  component?: () => React.ReactElement;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab: string;
  onChange: (value: string) => void;
}
