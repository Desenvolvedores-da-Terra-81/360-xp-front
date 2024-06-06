import React from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { MenuIcon, SearchIcon, CircleUserIcon } from './Icons';

// Tipagem para as props do Header, se houver props específicas que você deseja passar
interface HeaderProps {
  className?: string;  // Propriedade opcional se você quiser permitir a customização de estilos externos
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ${className}`}>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Abri o menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col" side="left">
          {/* A navegação ou outros componentes de menu que você deseja no Sheet aqui */}
        </SheetContent>
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-full" size="icon" variant="secondary">
            <CircleUserIcon className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Configurações</DropdownMenuItem>
          <DropdownMenuItem>Suporte</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
