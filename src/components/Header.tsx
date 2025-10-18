import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigation = [
  { name: 'Главная', href: '#', icon: 'Home' },
  { name: 'Каталог', href: '#catalog', icon: 'Grid3x3' },
  { name: 'О нас', href: '#about', icon: 'Info' },
  { name: 'Доставка и оплата', href: '#delivery', icon: 'Truck' },
  { name: 'Гарантии и возврат', href: '#warranty', icon: 'Shield' },
];

export default function Header() {
  const [cartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform">
                <Icon name="Wrench" size={24} className="text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-xl font-bold leading-none">АвтоЗапчасти</h1>
                <p className="text-xs text-muted-foreground">Оригинал и аналоги</p>
              </div>
            </a>
            
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="hidden md:flex relative flex-1 max-w-md">
              <Input
                type="search"
                placeholder="Поиск запчастей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Button 
                size="sm" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full"
              >
                <Icon name="Search" size={18} />
              </Button>
            </div>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="Heart" size={20} />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="default" size="icon" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle className="font-heading text-2xl">Корзина</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
                  <Icon name="ShoppingBag" size={64} className="text-muted-foreground/30 mb-4" />
                  <p className="text-lg font-medium text-muted-foreground">Ваша корзина пуста</p>
                  <p className="text-sm text-muted-foreground mt-2">Добавьте товары из каталога</p>
                  <Button className="mt-6" size="lg">
                    Перейти в каталог
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-heading text-xl">Меню</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
                    >
                      <Icon name={item.icon as any} size={20} />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
