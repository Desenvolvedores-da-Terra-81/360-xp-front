// MenuItem.tsx
import React from 'react';
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { IconProps } from './Icons'; // Importação do tipo de ícones

interface MenuItemProps {
  href: string;
  icon: React.ComponentType<IconProps>; // Tipo do ícone como componente React
  label: string;
  badge?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, icon: Icon, label, badge }) => (
  <Link
    href={href}
    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${badge ? 'bg-muted' : ''}`}
  >
    <Icon className="h-4 w-4" />
    {label}
    {badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">{badge}</Badge>}
  </Link>
);

export default MenuItem;
