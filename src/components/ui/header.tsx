import { Button } from "./button";
import { Card, CardContent } from "./card";
import { ShoppingCart, Menu } from 'react-feather';


const Header = () => {
  return ( 
    <Card className="flex justify-between bg-black p-[1.875rem] items-center">
      <Button size="icon" variant="outline">
        <Menu />
      </Button>

      <h1 className="font-semibold text-lg text-stone-200">CS Store</h1>

      <Button size="icon" variant="outline">
        <ShoppingCart />
      </Button>
    </Card>
   );
};

export default Header;