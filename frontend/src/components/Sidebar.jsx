import React, { useState, useEffect } from 'react';
import { Home, Wrench, Briefcase, IndianRupee, Star, Mail, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'work', label: 'Our Work', icon: Briefcase },
    { id: 'pricing', label: 'Pricing', icon: IndianRupee },
    { id: 'why-choose-us', label: 'Why Choose Us', icon: Star },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    if (isMobile) {
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="fixed top-4 left-4 z-50 bg-slate-800 text-white p-3 rounded-lg shadow-lg hover:bg-slate-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isExpanded ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl z-40 transition-all duration-500 ease-in-out ${
          isExpanded ? 'w-64' : isMobile ? 'w-0' : 'w-20'
        } ${isMobile && !isExpanded ? '-translate-x-full' : 'translate-x-0'}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-slate-700">
            <div className={`flex items-center justify-center ${!isExpanded && !isMobile ? 'justify-center' : ''}`}>
              <img 
                src="https://customer-assets.emergentagent.com/job_buildpro-hub-16/artifacts/j8vihe3v_image.png" 
                alt="Anand Enterprises Logo" 
                className={`${isExpanded || isMobile ? 'w-40' : 'w-12'} transition-all duration-300`}
              />
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 py-6 overflow-y-auto">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 hover:bg-slate-700 group relative ${
                    isActive ? 'bg-slate-700 border-l-4 border-amber-500' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isExpanded ? 'slideIn 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <Icon
                    size={22}
                    className={`transition-colors ${
                      isActive ? 'text-amber-500' : 'text-slate-400 group-hover:text-amber-500'
                    } ${!isExpanded && !isMobile ? 'mx-auto' : ''}`}
                  />
                  {(isExpanded || isMobile) && (
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                  {!isExpanded && !isMobile && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                      {item.label}
                    </div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Toggle Button for Desktop */}
          {!isMobile && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-4 border-t border-slate-700 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white flex items-center justify-center"
              aria-label="Toggle sidebar"
            >
              {isExpanded ? '← Collapse' : '→'}
            </button>
          )}
        </div>
      </aside>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
