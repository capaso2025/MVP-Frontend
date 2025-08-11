import { useEffect, useState } from 'react';

interface Item {
  id: string;
  text: string;
  correctGroup: string;
  currentGroup: string | null;
}

interface Group {
  id: string;
  name: string;
  maxItems: number;
}

const groups: Group[] = [
  { id: 'emisor', name: 'Emisor', maxItems: 1 },
  { id: 'receptor', name: 'Receptor', maxItems: 1 },
  { id: 'mensaje', name: 'Mensaje', maxItems: 1 },
  { id: 'canal', name: 'Canal', maxItems: 1 },
  { id: 'codigo', name: 'Código', maxItems: 2 },
  { id: 'contexto', name: 'Contexto', maxItems: 2 },
];

export const useSortingGame = (params: {
  finishCallback?: (() => void) | undefined;
}) => {
  const { finishCallback } = params;
  const [items, setItems] = useState<Item[]>([
    { id: '1', text: 'Laura', correctGroup: 'emisor', currentGroup: null },
    { id: '2', text: 'Su amiga', correctGroup: 'receptor', currentGroup: null },
    { id: '3', text: 'Voz', correctGroup: 'canal', currentGroup: null },
    { id: '4', text: 'Español', correctGroup: 'codigo', currentGroup: null },
    {
      id: '5',
      text: 'Universidad',
      correctGroup: 'contexto',
      currentGroup: null,
    },
    { id: '6', text: 'Mensaje', correctGroup: 'mensaje', currentGroup: null },
    { id: '7', text: 'Código', correctGroup: 'codigo', currentGroup: null },
    { id: '8', text: 'Contexto', correctGroup: 'contexto', currentGroup: null },
  ]);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, groupId: string) => {
    e.preventDefault();

    if (!draggedItem) return;

    const group = groups.find((g) => g.id === groupId);
    const currentItemsInGroup = items.filter(
      (item) => item.currentGroup === groupId,
    );

    if (group && currentItemsInGroup.length >= group.maxItems) {
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === draggedItem ? { ...item, currentGroup: groupId } : item,
      ),
    );
    setDraggedItem(null);
  };

  const handleRemoveFromGroup = (itemId: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, currentGroup: null } : item,
      ),
    );
  };

  const getGroupStatus = (groupId: string) => {
    const groupItems = items.filter((item) => item.currentGroup === groupId);
    const correctItems = groupItems.filter(
      (item) => item.correctGroup === groupId,
    );

    if (groupItems.length === 0) return 'empty';
    if (correctItems.length === groupItems.length && groupItems.length > 0)
      return 'correct';
    return 'incorrect';
  };

  const availableItems = items.filter((item) => item.currentGroup === null);
  const correctGroups = groups.filter(
    (group) => getGroupStatus(group.id) === 'correct',
  ).length;

  useEffect(() => {
    if (correctGroups === groups.length) {
      finishCallback?.();
    }
  }, [correctGroups]);
  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleRemoveFromGroup,
    getGroupStatus,
    availableItems,
    correctGroups,
    groups,
    items,
  };
};
