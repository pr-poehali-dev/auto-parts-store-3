import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function VinSearch() {
  const [vin, setVin] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (vin.length === 17) {
      setIsSearching(true);
      setTimeout(() => setIsSearching(false), 1500);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon name="Search" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold">Поиск по VIN-коду</h3>
            <p className="text-sm text-muted-foreground">Быстрый и точный подбор запчастей</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Введите VIN-код (17 символов)"
              value={vin}
              onChange={(e) => setVin(e.target.value.toUpperCase())}
              maxLength={17}
              className="h-12 text-lg font-mono pr-12 border-primary/30 focus:border-primary"
            />
            {vin && (
              <Badge 
                variant={vin.length === 17 ? "default" : "secondary"}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {vin.length}/17
              </Badge>
            )}
          </div>
          <Button 
            size="lg" 
            className="px-8 font-semibold gap-2"
            onClick={handleSearch}
            disabled={vin.length !== 17 || isSearching}
          >
            {isSearching ? (
              <>
                <Icon name="Loader2" size={20} className="animate-spin" />
                Поиск...
              </>
            ) : (
              <>
                <Icon name="Search" size={20} />
                Найти
              </>
            )}
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Check" size={16} className="text-primary" />
            <span>Проверка по базе производителей</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Check" size={16} className="text-primary" />
            <span>Подбор оригинальных и аналогов</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
