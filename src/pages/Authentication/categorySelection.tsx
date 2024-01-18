import React, { useEffect, useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

interface CategoryPillProps {
  category: string;
  isSelected: boolean;
  onToggle: () => void;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ category, isSelected, onToggle }) => {
  return (
    <div
      className={`p-2 m-1 border rounded-md cursor-pointer relative ${
        isSelected ? 'border-primary' : ' border-slate-400'
      }`}
      onClick={onToggle}
    >
      {isSelected && (
        <span className="absolute -top-1 -right-1 text-success">
         <BsCheckCircleFill size={18} />
        </span>
      )}
      {category}
    </div>
  );
};

interface CourseCategoriesProps {
  categories: string[];
  onSelectChange: (selectedCategories: string[]) => void;
}

const CourseCategories: React.FC<CourseCategoriesProps> = ({ categories, onSelectChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
        if (prev.includes(category)) {
          return prev.filter((c) => c !== category);
        } else {
          return [...prev, category];
        }
      });
  };

  useEffect(() => {
    // Call the callback to notify the parent component of the change
    onSelectChange(selectedCategories);
  }, [selectedCategories, onSelectChange]);

  return (
    <div className="flex flex-wrap gap-y-2 gap-x-2">
      {categories.map((category) => (
        <CategoryPill
          key={category}
          category={category}
          isSelected={selectedCategories.includes(category)}
          onToggle={() => toggleCategory(category)}
        />
      ))}
      
    </div>
  );
};

export default CourseCategories;
