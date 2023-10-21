import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { Headphones, Monitor, MousePointer, Speaker, Square, Type } from "react-feather";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcons = {
    keyboards: <Type size={16}/>,
    monitors: <Monitor size={16}/>,
    headphones: <Headphones size={16}/>,
    mousepads: <Square size={16}/>,
    speakers: <Speaker size={16}/>,
    mouses: <MousePointer size={16}/>
  };
  return (
    <Badge
      variant={"outline"}
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcons[category.slug as keyof typeof categoryIcons]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
