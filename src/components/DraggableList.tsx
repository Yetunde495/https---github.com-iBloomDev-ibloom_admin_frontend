import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown2";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDragIndicator } from "react-icons/md";

interface Item {
  id: number;
  name: string;
  order: number;
}

interface DraggableListProps {
  initialItems: Item[];
  onReorder: (newOrder: Item[]) => void;
  onPreview: () => void;
  onDelete: () => void;
}

const DraggableList: React.FC<DraggableListProps> = ({
  initialItems,
  onReorder,
  onPreview,
  onDelete,
}) => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [draggingItem, setDraggingItem] = useState<Item | null>(null);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: Item) => {
    setDraggingItem(item);
    e.dataTransfer.setData("text/plain", "");
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (
    _e: React.DragEvent<HTMLDivElement>,
    targetItem: Item
  ) => {
    if (!draggingItem) return;

    const currentIndex = items.indexOf(draggingItem);
    const targetIndex = items.indexOf(targetItem);

    if (currentIndex !== -1 && targetIndex !== -1) {
      const updatedItems = [...items];
      updatedItems.splice(currentIndex, 1);
      updatedItems.splice(targetIndex, 0, draggingItem);
     

      const reorderedItems = updatedItems.map((item, index) => ({
        ...item,
        order: index + 1
    }));

    setItems(reorderedItems);
    onReorder(reorderedItems);
    }
  };

  return (
    <div className="flex flex-col gap-4.5">
      {items.map((item) => (
        <div
          key={item.id}
          className={`item ${
            item === draggingItem ? "" : ""
          } px-4 rounded-sm shadow-2 relative bg-[#F2F2F280] text-black w-full h-[91px] flex items-center gap-3 cursor-grab`}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, item)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, item)}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#6B6B6B] text-white">
            <span>{item.order}</span>
          </div>
          <div className="">
            <span>{item.name}</span>
          </div>
          <div className="ml-auto">
            <Dropdown icon={<BsThreeDots />} bg={false}>
              <span
                onClick={onPreview}
                className="py-3 px-4 text-[14px] cursor-pointer text-black/90 hover:text-primary hover:bg-slate-200/60"
              >
                Preview Lesson
              </span>

              <span
                onClick={onDelete}
                className="py-3 px-4 gap-2 text-[14px] cursor-pointer text-danger hover:bg-slate-200/60"
              >
                Delete Lesson
              </span>
            </Dropdown>
          </div>
          <span className="absolute top-1 left-1/2">
          <MdOutlineDragIndicator size={24} className="transform rotate-90" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default DraggableList;
