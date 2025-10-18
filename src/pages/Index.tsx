import { useState } from 'react';
import Header from '@/components/Header';
import VinSearch from '@/components/VinSearch';
import CarSelector from '@/components/CarSelector';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const mockProducts = [
  {
    id: '1',
    name: 'Тормозной диск передний',
    article: 'BD-7890-F',
    manufacturer: 'Brembo',
    price: 3450,
    oldPrice: 4200,
    inStock: 12,
    image: 'https://cdn.poehali.dev/projects/b31aafc7-7c1f-4f90-abb3-15744baa823f/files/a15b93e0-038b-45d9-abb4-153ee4c478d0.jpg',
    isOriginal: true
  },
  {
    id: '2',
    name: 'Масляный фильтр',
    article: 'OF-3421',
    manufacturer: 'Mann Filter',
    price: 890,
    oldPrice: 1100,
    inStock: 45,
    image: 'https://cdn.poehali.dev/projects/b31aafc7-7c1f-4f90-abb3-15744baa823f/files/b074535c-1e80-4d3b-ac1a-6a3f89940056.jpg',
    isOriginal: false
  },
  {
    id: '3',
    name: 'Воздушный фильтр двигателя',
    article: 'AF-9012',
    manufacturer: 'Bosch',
    price: 1250,
    inStock: 8,
    image: 'https://cdn.poehali.dev/projects/b31aafc7-7c1f-4f90-abb3-15744baa823f/files/d6fcb92f-35ed-4f64-9d9d-a3b2e076d57d.jpg',
    isOriginal: true
  },
  {
    id: '4',
    name: 'Комплект тормозных колодок',
    article: 'BP-5634',
    manufacturer: 'ATE',
    price: 2890,
    oldPrice: 3400,
    inStock: 0,
    isOriginal: false
  },
  {
    id: '5',
    name: 'Свеча зажигания',
    article: 'SP-2341',
    manufacturer: 'NGK',
    price: 450,
    inStock: 120,
    isOriginal: true
  },
  {
    id: '6',
    name: 'Амортизатор передний',
    article: 'SA-8821-F',
    manufacturer: 'Sachs',
    price: 5600,
    oldPrice: 6800,
    inStock: 6,
    isOriginal: false
  }
];

const features = [
  {
    icon: 'Search',
    title: 'Поиск по VIN',
    description: 'Точный подбор запчастей по VIN-коду вашего автомобиля'
  },
  {
    icon: 'Package',
    title: 'Наличие на складе',
    description: 'Актуальная информация о наличии товаров в режиме реального времени'
  },
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Доставка по всей России от 1 дня'
  },
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    description: 'Все товары сертифицированы и имеют гарантию'
  },
  {
    icon: 'Percent',
    title: 'Оптовые цены',
    description: 'Специальные условия для постоянных клиентов'
  },
  {
    icon: 'Headset',
    title: 'Поддержка 24/7',
    description: 'Консультация специалистов в любое время'
  }
];

const Index = () => {
  const [cart, setCart] = useState<string[]>([]);

  const handleAddToCart = (id: string) => {
    setCart([...cart, id]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Автозапчасти с доставкой
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Оригинальные запчасти и качественные аналоги для всех марок автомобилей
            </p>
          </div>
          
          <Tabs defaultValue="vin" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="vin" className="gap-2">
                <Icon name="Search" size={18} />
                Поиск по VIN
              </TabsTrigger>
              <TabsTrigger value="car" className="gap-2">
                <Icon name="Car" size={18} />
                Подбор по марке
              </TabsTrigger>
            </TabsList>
            <TabsContent value="vin">
              <VinSearch />
            </TabsContent>
            <TabsContent value="car">
              <CarSelector />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section id="catalog" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                Популярные товары
              </h2>
              <p className="text-muted-foreground">
                Часто заказываемые запчасти по лучшим ценам
              </p>
            </div>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Grid3x3" size={20} />
              Весь каталог
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  О нашей компании
                </h2>
                <p className="text-muted-foreground mb-4">
                  Мы работаем на рынке автозапчастей более 15 лет и за это время заслужили 
                  доверие тысяч клиентов по всей России.
                </p>
                <p className="text-muted-foreground mb-6">
                  Наш склад насчитывает более 50 000 наименований оригинальных запчастей 
                  и качественных аналогов для всех популярных марок автомобилей.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-1">50k+</div>
                    <div className="text-sm text-muted-foreground">товаров</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-1">10k+</div>
                    <div className="text-sm text-muted-foreground">клиентов</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-sm text-muted-foreground">г. Москва, ул. Автомобильная, д. 1</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-accent/5 border-accent/20">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-accent" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">info@avtozapchasti.ru</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="delivery" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Доставка и оплата
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Truck" size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Способы доставки</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 shrink-0" />
                  <span>Курьерская доставка по Москве — от 300 ₽</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 shrink-0" />
                  <span>Доставка в регионы транспортными компаниями</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 shrink-0" />
                  <span>Самовывоз со склада — бесплатно</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 shrink-0" />
                  <span>Доставка почтой России</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="CreditCard" size={28} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold">Способы оплаты</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 shrink-0" />
                  <span>Наличными при получении</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 shrink-0" />
                  <span>Банковской картой онлайн</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 shrink-0" />
                  <span>Безналичный расчет для юридических лиц</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 shrink-0" />
                  <span>Рассрочка и кредит</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      
      <section id="warranty" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Гарантии и возврат
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="p-6">
              <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="Shield" size={24} className="text-primary" />
                Гарантия качества
              </h3>
              <p className="text-muted-foreground mb-3">
                На все оригинальные запчасти предоставляется официальная гарантия производителя 
                от 12 до 36 месяцев. На аналоги — гарантия от 6 до 12 месяцев.
              </p>
              <Badge variant="outline" className="bg-primary/5">
                Все товары сертифицированы
              </Badge>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="RefreshCw" size={24} className="text-accent" />
                Возврат товара
              </h3>
              <p className="text-muted-foreground mb-3">
                Вы можете вернуть товар надлежащего качества в течение 14 дней с момента покупки. 
                Товар ненадлежащего качества принимается в течение всего гарантийного срока.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-accent/5">Возврат денег</Badge>
                <Badge variant="outline" className="bg-accent/5">Обмен товара</Badge>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
                <Icon name="FileCheck" size={24} className="text-primary" />
                Проверка перед покупкой
              </h3>
              <p className="text-muted-foreground">
                Вы можете осмотреть товар перед оплатой при получении на складе или у курьера. 
                Убедитесь в соответствии артикула, отсутствии повреждений упаковки и комплектности.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-background/10 rounded-lg">
                  <Icon name="Wrench" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold">АвтоЗапчасти</h3>
              </div>
              <p className="text-sm text-background/70">
                Качественные автозапчасти с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Двигатель</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Трансмиссия</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Тормозная система</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Подвеска</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-background/70 hover:text-background transition-colors">О компании</a></li>
                <li><a href="#delivery" className="text-background/70 hover:text-background transition-colors">Доставка</a></li>
                <li><a href="#warranty" className="text-background/70 hover:text-background transition-colors">Гарантии</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-background/70">+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-background/70">info@avtozapchasti.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span className="text-background/70">Пн-Вс: 9:00 - 21:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/10 pt-8 text-center text-sm text-background/50">
            <p>© 2025 АвтоЗапчасти. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
