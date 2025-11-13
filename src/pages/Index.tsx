import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

interface ProductSection {
  id: number;
  title: string;
  subtitle: string;
  products: Product[];
  type: 'gallery' | 'video';
  videoUrl?: string;
}

export default function Index() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const sections: ProductSection[] = [
    {
      id: 1,
      title: 'Премиальные торты',
      subtitle: 'Эксклюзивные творения для особенных моментов',
      type: 'gallery',
      products: [
        {
          id: 1,
          title: 'Шоколадный люкс',
          description: 'Многослойный шоколадный торт с бельгийским шоколадом и золотым декором',
          price: 'от 8 500 ₽',
          image: 'https://cdn.poehali.dev/projects/f623f372-bbf6-4a2e-920c-13f8363e85db/files/c3c37b8f-f6da-4acb-8e1a-d0a0e5a702bd.jpg'
        },
        {
          id: 2,
          title: 'Макарон ассорти',
          description: 'Французские макаруны премиум-класса с натуральными начинками',
          price: 'от 350 ₽/шт',
          image: 'https://cdn.poehali.dev/projects/f623f372-bbf6-4a2e-920c-13f8363e85db/files/0b206181-a4f4-49dd-868c-168dbc6d86a5.jpg'
        },
        {
          id: 3,
          title: 'Свадебный шедевр',
          description: 'Многоярусный торт с индивидуальным дизайном и живыми цветами',
          price: 'от 15 000 ₽',
          image: 'https://cdn.poehali.dev/projects/f623f372-bbf6-4a2e-920c-13f8363e85db/files/b06f2b18-9ca6-4d43-8494-c985460102f7.jpg'
        }
      ]
    },
    {
      id: 2,
      title: 'Процесс создания',
      subtitle: 'Смотрите, как рождается искусство кондитерского мастерства',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      products: []
    },
    {
      id: 3,
      title: 'Сезонные предложения',
      subtitle: 'Специальная коллекция этого месяца',
      type: 'gallery',
      products: [
        {
          id: 4,
          title: 'Осенний вальс',
          description: 'Торт с карамелью, грецкими орехами и пряностями',
          price: 'от 6 800 ₽',
          image: 'https://cdn.poehali.dev/projects/f623f372-bbf6-4a2e-920c-13f8363e85db/files/c3c37b8f-f6da-4acb-8e1a-d0a0e5a702bd.jpg'
        },
        {
          id: 5,
          title: 'Золотая классика',
          description: 'Медовик премиум с кремом из маскарпоне',
          price: 'от 5 200 ₽',
          image: 'https://cdn.poehali.dev/projects/f623f372-bbf6-4a2e-920c-13f8363e85db/files/0b206181-a4f4-49dd-868c-168dbc6d86a5.jpg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-gradient-to-br from-pink/5 via-purple/5 to-orange/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,105,180,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,140,0,0.1),transparent_50%)]" />
        
        <div className="relative z-10 space-y-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink to-purple rounded-3xl flex items-center justify-center shadow-2xl shadow-pink/30 rotate-12 hover:rotate-0 transition-transform duration-500">
            <Icon name="Sparkles" size={48} className="text-white -rotate-12 hover:rotate-0 transition-transform duration-500" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-pink via-purple to-orange bg-clip-text text-transparent">
            Sweet Dreams
          </h1>
          
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-1 bg-gradient-to-r from-pink to-purple rounded-full" />
            <Icon name="Heart" size={20} className="text-pink" />
            <div className="w-12 h-1 bg-gradient-to-r from-purple to-orange rounded-full" />
          </div>
          
          <p className="text-xl md:text-2xl font-medium text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Яркие десерты, которые дарят радость! Каждое изделие — взрыв вкуса и эмоций
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink via-purple to-orange text-white font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Cake" size={24} />
            Смотреть десерты
            <Icon name="ArrowRight" size={24} />
          </Button>
        </div>
        
        <div className="absolute bottom-12 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-pink" />
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={index === 0 ? 'products' : undefined}
          className={`relative px-6 py-24 ${
            index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-muted via-white to-muted'
          }`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink to-purple" />
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6 animate-fade-in-up">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink/10 to-purple/10 rounded-full">
                <p className="text-sm font-bold text-pink uppercase tracking-wider">Наша коллекция</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink via-purple to-orange bg-clip-text text-transparent">
                {section.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{section.subtitle}</p>
            </div>

            {section.type === 'gallery' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {section.products.map((product, idx) => (
                  <div
                    key={product.id}
                    className="group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${idx * 150}ms` }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative overflow-hidden rounded-3xl aspect-square mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-pink/10 to-purple/10">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-10">
                        <div className="bg-white text-pink px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <Icon name="Eye" size={20} />
                          <span className="text-sm font-bold">Смотреть</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink to-purple text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        ХИТ
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-center group-hover:text-pink transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-2xl font-extrabold text-center bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.type === 'video' && section.videoUrl && (
              <div className="max-w-5xl mx-auto">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-4 ring-pink/20">
                  <iframe
                    src={section.videoUrl}
                    title={section.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="relative px-6 py-32 bg-gradient-to-br from-pink via-purple to-orange">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-3xl">
              <Icon name="Sparkles" size={48} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white">
              Давайте создадим ваш десерт!
            </h2>
            <p className="text-xl text-white/90">Мы готовы воплотить любые ваши идеи</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:+79999999999" className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Phone" size={24} className="text-pink" />
              </div>
              <div className="text-white">
                <p className="text-sm font-semibold mb-1">Позвоните</p>
                <p className="text-lg font-bold">+7 (999) 999-99-99</p>
              </div>
            </a>
            
            <a href="mailto:info@sweetdreams.ru" className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Mail" size={24} className="text-purple" />
              </div>
              <div className="text-white">
                <p className="text-sm font-semibold mb-1">Напишите</p>
                <p className="text-lg font-bold">info@sweetdreams.ru</p>
              </div>
            </a>
            
            <div className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-orange" />
              </div>
              <div className="text-white">
                <p className="text-sm font-semibold mb-1">Адрес</p>
                <p className="text-lg font-bold">Москва, ул. Примерная 1</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all group"
            >
              <Icon name="Instagram" size={24} className="text-white group-hover:text-pink transition-colors" />
            </a>
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all group"
            >
              <Icon name="Facebook" size={24} className="text-white group-hover:text-purple transition-colors" />
            </a>
            
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all group"
            >
              <Icon name="Share2" size={24} className="text-white group-hover:text-orange transition-colors" />
            </a>
          </div>

          <Button
            size="lg"
            className="bg-white text-pink hover:bg-white/90 font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://wa.me/79999999999', '_blank')}
          >
            <Icon name="MessageCircle" size={28} />
            Написать в WhatsApp
            <Icon name="ArrowRight" size={28} />
          </Button>

          <div className="pt-8 text-sm text-white/70">
            <p>© 2024 Sweet Dreams. Все права защищены.</p>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="bg-white border-pink/30 text-foreground max-w-3xl rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-4xl font-extrabold bg-gradient-to-r from-pink via-purple to-orange bg-clip-text text-transparent mb-4">
              {selectedProduct?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="space-y-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {selectedProduct.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t-2 border-pink/20">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
                    {selectedProduct.price}
                  </span>
                  
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink via-purple to-orange text-white hover:scale-105 transition-transform font-bold text-lg px-8 py-6 rounded-full shadow-xl"
                    onClick={() => window.open('https://wa.me/79999999999', '_blank')}
                  >
                    <Icon name="ShoppingBag" size={22} />
                    Заказать сейчас
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}