import { Button } from "./button";
import { Card, CardContent } from "./card";
import { ShoppingCart, Menu, User, Gift, List, Home } from 'react-feather';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";


const Header = () => {
  return ( 
    <Card className="flex justify-between bg-slate-50 p-[1.875rem] items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-xl font-bold items-center">
            Menu
          </SheetHeader>
          <div className="mt-4 flex flex-col gap-3">
            <Button variant="outline" className=" w-full justify-start gap-2 font-bold">
              <Home />
                Home
            </Button>

            <Button variant="outline" className=" w-full justify-start gap-2 font-bold">
              <User />
                Login
            </Button>

            <Button variant="outline" className=" w-full justify-start gap-2 font-bold">
              <Gift />
                Offers
            </Button>

            <Button variant="outline" className=" w-full justify-start gap-2 font-bold">
              <List />
              Catalog
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="font-semibold text-lg text-gray-900">CS Store</h1>

      <Button size="icon" variant="outline">
        <ShoppingCart />
      </Button>
    </Card>
   );
};

export default Header;