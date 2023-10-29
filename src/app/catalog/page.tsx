import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { List } from "react-feather";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="p-5 gap-8 flex flex-col">
      <Badge className=" w-fit border-2 gap-1 px-3 py-1 text-base uppercase">
        <List size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) =>(
          <CategoryItem key={category.id} category={category} />
        ))};
      </div>
    </div>
  );
};

export default CatalogPage;
