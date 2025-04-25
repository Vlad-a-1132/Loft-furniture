'use client';

import { useState, useEffect, useRef } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const parallaxContainerRef = useRef<HTMLDivElement>(null);

  // Эффект параллакса при движении мыши
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxContainerRef.current) return;
      
      const rect = parallaxContainerRef.current.getBoundingClientRect();
      const containerCenterX = rect.left + rect.width / 2;
      const containerCenterY = rect.top + rect.height / 2;
      
      // Рассчитываем отклонение от центра (от -25 до 25 пикселей)
      const offsetX = ((e.clientX - containerCenterX) / rect.width) * 40;
      const offsetY = ((e.clientY - containerCenterY) / rect.height) * 40;
      
      setParallaxOffset({ x: offsetX, y: offsetY });
    };

    // Эффект параллакса при скролле
    const handleScroll = () => {
      if (!parallaxContainerRef.current) return;
      
      const rect = parallaxContainerRef.current.getBoundingClientRect();
      const scrollPositionY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Если секция видна
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollOffset = (scrollPositionY - (rect.top + scrollPositionY - windowHeight)) * 0.25;
        setParallaxOffset(prev => ({ ...prev, y: scrollOffset }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Вызываем один раз при загрузке для инициализации
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // В реальном проекте здесь будет отправка данных на сервер
      console.log('Form data submitted:', formData);
      
      // Имитация задержки отправки
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        city: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-24 relative overflow-hidden bg-[#222]" ref={parallaxContainerRef} style={{ minHeight: '800px' }}>
      {/* Фоновое изображение с эффектом параллакса */}
      <div 
        className="absolute inset-0 z-0 w-[140%] h-[140%] left-[-20%] top-[-20%]"
        style={{ 
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="w-full h-full relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('/images/14882.jpg')`,
              filter: 'brightness(0.4) blur(2px)',
              transformOrigin: 'center center',
              transform: 'scale(1.2)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] opacity-80"></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-[#f6f1eb] p-10 md:p-16 relative shadow-2xl border border-[#403A34]">
          {/* Крестики в углах */}
          <div className="absolute left-0 top-0 w-2 h-2 bg-[#403A34]"></div>
          <div className="absolute right-0 top-0 w-2 h-2 bg-[#403A34]"></div>
          <div className="absolute left-0 bottom-0 w-2 h-2 bg-[#403A34]"></div>
          <div className="absolute right-0 bottom-0 w-2 h-2 bg-[#403A34]"></div>
          
          <h2 className="text-[#403A34] text-3xl md:text-4xl font-bold text-center mb-12">
            ПЕРСОНАЛЬНЫЙ ПРОЕКТ ИЛИ КОНКРЕТНЫЙ ЗАПРОС
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ИМЯ *"
                required
                className="w-full bg-[#f6f1eb] border border-[#403A34] p-4 text-[#403A34] focus:outline-none"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="НОМЕР ТЕЛЕФОНА"
                className="w-full bg-[#f6f1eb] border border-[#403A34] p-4 text-[#403A34] focus:outline-none"
              />
            </div>
            
            <div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="ГОРОД"
                className="w-full bg-[#f6f1eb] border border-[#403A34] p-4 text-[#403A34] focus:outline-none"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="ВАШЕ СООБЩЕНИЕ *"
                required
                rows={8}
                className="w-full bg-[#f6f1eb] border border-[#403A34] p-4 text-[#403A34] resize-none focus:outline-none"
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#403A34] text-white py-4 font-medium hover:bg-[#514a43] transition-colors duration-300"
              >
                {isSubmitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ'}
              </button>
            </div>
            
            {submitSuccess && (
              <div className="text-green-700 text-center mt-4">
                Спасибо! Ваше сообщение успешно отправлено.
              </div>
            )}
            
            {submitError && (
              <div className="text-red-600 text-center mt-4">
                Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
} 