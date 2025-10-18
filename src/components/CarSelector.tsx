import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const brands = ['Toyota', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Honda', 'Nissan', 'Mazda'];
const models = ['Camry', 'Corolla', 'RAV4', 'Land Cruiser', 'Highlander'];
const years = Array.from({ length: 25 }, (_, i) => 2025 - i);

export default function CarSelector() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  return (
    <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Icon name="Car" size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold">Подбор по автомобилю</h3>
            <p className="text-sm text-muted-foreground">Выберите марку, модель и год выпуска</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger className="h-12 border-accent/30 focus:border-accent">
              <SelectValue placeholder="Марка авто" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={model} onValueChange={setModel} disabled={!brand}>
            <SelectTrigger className="h-12 border-accent/30 focus:border-accent">
              <SelectValue placeholder="Модель" />
            </SelectTrigger>
            <SelectContent>
              {models.map((m) => (
                <SelectItem key={m} value={m}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={year} onValueChange={setYear} disabled={!model}>
            <SelectTrigger className="h-12 border-accent/30 focus:border-accent">
              <SelectValue placeholder="Год выпуска" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          size="lg" 
          variant="default"
          className="w-full font-semibold gap-2 bg-accent hover:bg-accent/90"
          disabled={!year}
        >
          <Icon name="Search" size={20} />
          Показать запчасти
        </Button>
      </div>
    </Card>
  );
}
