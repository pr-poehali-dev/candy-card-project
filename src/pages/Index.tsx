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
    <div className="min-h-screen bg-dark text-cream">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent opacity-30" />
        
        <div className="relative z-10 space-y-8 animate-fade-in">
          <div className="w-20 h-20 mx-auto bg-gold rounded-full flex items-center justify-center">
            <Icon name="Crown" size={40} className="text-dark" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light tracking-wider">
            Atelier Confiserie
          </h1>
          
          <div className="w-24 h-px bg-gold mx-auto" />
          
          <p className="text-xl md:text-2xl font-light text-cream/80 max-w-md mx-auto">
            Изысканные десерты ручной работы для ценителей настоящего искусства
          </p>
        </div>
        
        <div className="absolute bottom-12 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-gold" />
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`relative px-6 py-20 ${
            index % 2 === 0 ? 'bg-dark' : 'bg-secondary'
          }`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gold" />
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                {section.title}
              </h2>
              <div className="w-16 h-px bg-gold mx-auto" />
              <p className="text-lg text-cream/70">{section.subtitle}</p>
            </div>

            {section.type === 'gallery' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.products.map((product, idx) => (
                  <div
                    key={product.id}
                    className="group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${idx * 150}ms` }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-square mb-4 border border-gold/20">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <div className="text-gold flex items-center gap-2">
                          <Icon name="ZoomIn" size={20} />
                          <span className="text-sm font-light tracking-wider">Подробнее</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-light mb-2 text-center group-hover:text-gold transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gold text-center font-light tracking-wide">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.type === 'video' && section.videoUrl && (
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gold/20 shadow-2xl shadow-gold/10">
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

      <section className="relative px-6 py-24 bg-dark">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gold" />
        
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide">
              Свяжитесь с нами
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>

          <div className="space-y-6 text-cream/80">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Phone" size={20} className="text-gold" />
              <a href="tel:+79999999999" className="text-lg hover:text-gold transition-colors">
                +7 (999) 999-99-99
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Icon name="Mail" size={20} className="text-gold" />
              <a href="mailto:info@atelier-confiserie.ru" className="text-lg hover:text-gold transition-colors">
                info@atelier-confiserie.ru
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" size={20} className="text-gold" />
              <span className="text-lg">г. Москва, ул. Примерная, д. 1</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
            >
              <Icon name="Instagram" size={20} className="text-gold group-hover:text-dark transition-colors" />
            </a>
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
            >
              <Icon name="Facebook" size={20} className="text-gold group-hover:text-dark transition-colors" />
            </a>
            
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
            >
              <Icon name="Share2" size={20} className="text-gold group-hover:text-dark transition-colors" />
            </a>
          </div>

          <Button
            size="lg"
            className="bg-gold text-dark hover:bg-gold/90 font-light tracking-wider text-lg px-8 py-6 rounded-full"
            onClick={() => window.open('https://wa.me/79999999999', '_blank')}
          >
            <Icon name="MessageCircle" size={20} />
            Написать в WhatsApp
          </Button>

          <div className="pt-12 text-sm text-cream/50">
            <p>© 2024 Atelier Confiserie. Все права защищены.</p>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="bg-secondary border-gold/30 text-cream max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-light text-gold mb-4">
              {selectedProduct?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-cream/80 leading-relaxed">
                  {selectedProduct.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                  <span className="text-2xl font-light text-gold">
                    {selectedProduct.price}
                  </span>
                  
                  <Button
                    size="lg"
                    className="bg-gold text-dark hover:bg-gold/90"
                    onClick={() => window.open('https://wa.me/79999999999', '_blank')}
                  >
                    <Icon name="ShoppingCart" size={18} />
                    Заказать
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