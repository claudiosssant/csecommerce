import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { List } from "react-feather";

const CategoyProducts = async ({params}: any) => {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug
      }
    }
  })
  return (
    <div>
      <Badge className=" w-fit border-2 gap-1 px-3 py-1 text-base uppercase">
        <List size={16} />
        {params.slug}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        
      </div>
    </div>
  );
};
 
export default CategoyProducts;