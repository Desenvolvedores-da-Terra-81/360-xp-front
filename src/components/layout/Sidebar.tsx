'use client'
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlanUpgrade } from "@/components/plan-upgrade";
import { HomeIcon, ShoppingCartIcon, PackageIcon, UsersIcon, LineChartIcon } from './Icons';

export interface MenuItemType {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  badge?: number;
}

export const menuItems: MenuItemType[] = [
  { href: "#", icon: HomeIcon, label: "Dashboard" },
  { href: "#", icon: ShoppingCartIcon, label: "Colaboradores", badge: 6 },
  { href: "#", icon: PackageIcon, label: "Products" },
  { href: "#", icon: UsersIcon, label: "Customers" },
  { href: "#", icon: LineChartIcon, label: "Analytics" }
];

const Sidebar: React.FC = () => {
  const [isPlanUpgradeOpen, setIsPlanUpgradeOpen] = useState(false);

  const handleUpgradeClick = () => {
    setIsPlanUpgradeOpen(true);
  };

  const handlePlanUpgradeClose = () => {
    setIsPlanUpgradeOpen(false);
  };

  return (
    <div className="hidden md:block border-r bg-muted/40 min-h-screen">
      <div className="flex flex-col gap-2 h-full max-h-screen">
        <div className="flex items-center h-14 lg:h-[60px] border-b px-4 lg:px-6">
          <a className="flex items-center gap-2 font-semibold" href="#">
            <span>Slimu</span>
          </a>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </nav>
        </div>
        <div className="p-4 mt-auto">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button className="w-full" size="sm" onClick={handleUpgradeClick}>Upgrade</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      {isPlanUpgradeOpen && <PlanUpgrade onClose={handlePlanUpgradeClose} />}
    </div>
  );
};

export default Sidebar;
