'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useState, useEffect, useCallback } from 'react';

export const StorePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const images = [
    '/store/t-shorts/shamps-1_1.jpg',
    '/store/t-shorts/shamps-1_2.jpg',
    '/store/t-shorts/shamps-1_3.jpg',
    '/store/t-shorts/shamps-1_4.png',
  ];

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const openFullscreen = useCallback(() => {
    setIsFullscreenOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreenOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Обработчик нажатий клавиш для навигации в полноэкранном режиме
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isFullscreenOpen) return;
    
    switch (e.key) {
      case 'ArrowRight':
        nextImage();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      case 'Escape':
        closeFullscreen();
        break;
      default:
        break;
    }
  }, [isFullscreenOpen, nextImage, prevImage, closeFullscreen]);

  // Добавление и удаление обработчика клавиатуры при открытии/закрытии полноэкранного режима
  useEffect(() => {
    if (isFullscreenOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreenOpen, currentImageIndex, handleKeyDown]);

  // Обработчики для свайпа
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-16 px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-consolas mb-10 text-center">[ ФУТБОЛКА SHAMPS ]</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative">
              <div 
                className="aspect-square overflow-hidden rounded-2xl cursor-pointer relative" 
                onClick={openFullscreen}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img 
                  src={images[currentImageIndex]} 
                  alt={`Футболка Shamps ${currentImageIndex + 1}`} 
                  className="w-full h-full object-cover"
                />
                
                {/* Иконка увеличения */}
                <div 
                  onClick={(e) => {e.stopPropagation(); openFullscreen();}}
                  className="absolute top-3 right-3 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition-all z-10 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
                
                {/* Кнопки для карусели */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
                  <button 
                    onClick={(e) => {e.stopPropagation(); prevImage();}}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all p-3 rounded-full pointer-events-auto"
                    aria-label="Предыдущее фото"
                  >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1L1 7L7 13" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    onClick={(e) => {e.stopPropagation(); nextImage();}}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all p-3 rounded-full pointer-events-auto"
                    aria-label="Следующее фото"
                  >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L1 13" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                {/* Индикаторы */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 pointer-events-none">
                  {images.map((_, index) => (
                    <button 
                      key={index}
                      onClick={(e) => {e.stopPropagation(); setCurrentImageIndex(index);}}
                      className={`w-2 h-2 rounded-full pointer-events-auto ${currentImageIndex === index ? 'bg-black' : 'bg-gray-300'}`}
                      aria-label={`Перейти к фото ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-consolas mb-4">Футболка Shamps</h2>
                <p className="text-lg mb-6">Легендарная футболка грибочков для всех кто хочет быть с нами! Изготовлена из качественного 100% хлопка с приятной текстурой.</p>
                
                <div className="mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 text-left">Размер</th>
                          <th className="py-2 text-left">S</th>
                          <th className="py-2 text-left">M</th>
                          <th className="py-2 text-left">L</th>
                          <th className="py-2 text-left">XL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">Российский</td>
                          <td className="py-2">44</td>
                          <td className="py-2">46</td>
                          <td className="py-2">48</td>
                          <td className="py-2">50</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Длина (см)</td>
                          <td className="py-2">66</td>
                          <td className="py-2">68</td>
                          <td className="py-2">70</td>
                          <td className="py-2">72</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Ширина по груди (см)</td>
                          <td className="py-2">48,5</td>
                          <td className="py-2">50,5</td>
                          <td className="py-2">52,5</td>
                          <td className="py-2">54,5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-2xl font-bold">1950 ₽</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-lg font-consolas mb-4">Для заказа пишите в тг:</p>
                  <a 
                    href="https://t.me/schlafzucker" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-black text-white rounded-xl text-center font-consolas hover:bg-gray-800 transition-colors"
                  >
                    Написать в Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Полноэкранный просмотр */}
      {isFullscreenOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center" onClick={closeFullscreen}>
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img 
              src={images[currentImageIndex]} 
              alt={`Футболка Shamps ${currentImageIndex + 1}`} 
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            
            {/* Кнопка закрытия */}
            <button 
              className="absolute top-5 right-5 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all"
              onClick={closeFullscreen}
              aria-label="Закрыть"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Кнопки навигации */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-8 pointer-events-none">
              <button 
                onClick={(e) => {e.stopPropagation(); prevImage();}}
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 transition-all pointer-events-auto"
                aria-label="Предыдущее фото"
              >
                <svg width="12" height="20" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={(e) => {e.stopPropagation(); nextImage();}}
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 transition-all pointer-events-auto"
                aria-label="Следующее фото"
              >
                <svg width="12" height="20" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Индикаторы */}
            <div className="absolute bottom-8 inset-x-0 flex justify-center gap-3">
              {images.map((_, index) => (
                <button 
                  key={index}
                  onClick={(e) => {e.stopPropagation(); setCurrentImageIndex(index);}}
                  className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white bg-opacity-40'}`}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorePage;