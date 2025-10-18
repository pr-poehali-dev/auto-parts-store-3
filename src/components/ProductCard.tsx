import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  article: string;
  manufacturer: string;
  price: number;
  oldPrice?: number;
  inStock: number;
  image?: string;
  isOriginal?: boolean;
  onAddToCart?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  article,
  manufacturer,
  price,
  oldPrice,
  inStock,
  image,
  isOriginal = false,
  onAddToCart
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-muted/30 aspect-square flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <Icon name="Package" size={64} className="text-muted-foreground/30" />
        )}
        
        {discount > 0 && (
          <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-bold">
            -{discount}%
          </Badge>
        )}
        
        {isOriginal && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Оригинал
          </Badge>
        )}
        
        {inStock > 0 ? (
          <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">{inStock} шт</span>
          </div>
        ) : (
          <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-sm font-medium text-muted-foreground">Под заказ</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading font-semibold text-base leading-tight line-clamp-2 flex-1">
            {name}
          </h3>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium">{manufacturer}</span>
          <span>•</span>
          <span className="font-mono">{article}</span>
        </div>
        
        <div className="flex items-baseline gap-2 pt-2">
          <span className="text-2xl font-heading font-bold text-primary">
            {price.toLocaleString('ru-RU')} ₽
          </span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {oldPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 gap-2">
        <Button 
          className="flex-1 gap-2 font-semibold transition-all"
          size="lg"
          onClick={() => onAddToCart?.(id)}
        >
          <Icon name="ShoppingCart" size={18} />
          {isHovered ? 'Добавить' : 'В корзину'}
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Icon name="Heart" size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
}
