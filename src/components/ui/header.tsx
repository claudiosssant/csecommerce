"use client";

import { Button } from "./button";
import { Card, CardContent } from "./card";
import { ShoppingCart, Menu, User, Gift, List, Home } from "react-feather";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const Header = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <Card className="flex items-center justify-between bg-slate-50 p-[1.875rem]">
      <Button size="icon" variant="outline">
        <ShoppingCart />
      </Button>
      <h1 className="text-lg font-semibold text-gray-900">CS Store</h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader className="items-center text-xl font-bold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col items-center gap-2">
              <Avatar className="mt-4">
              <AvatarFallback>
                {data.user.name?.[0].toUpperCase()}
              </AvatarFallback>
              {data.user.image && <AvatarImage src={data.user.image} />}
            </Avatar>
            <p className="font-semibold">{data.user.name}</p>
            </div>
          )}
          <div className="mt-4 flex flex-col gap-3">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className=" w-full justify-center gap-2 font-bold"
              >
                <User />
                Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className=" w-full justify-center gap-2 font-bold"
              >
                <User />
                Logout
              </Button>
            )}
            <Button
              variant="outline"
              className=" w-full justify-center gap-2 font-bold"
            >
              <Home />
              Home
            </Button>
            <Button
              variant="outline"
              className=" w-full justify-center gap-2 font-bold"
            >
              <Gift />
              Offers
            </Button>

            <Button
              variant="outline"
              className=" w-full justify-center gap-2 font-bold"
            >
              <List />
              Catalog
            </Button>
          </div>
        </SheetContent>
      </Sheet>

    </Card>
  );
};

export default Header;
