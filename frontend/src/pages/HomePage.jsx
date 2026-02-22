import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, Instagram, Home, Paintbrush, Building2, Hammer, Box, ClipboardCheck, Award, CheckCircle2, Clock, IndianRupee, Star, Headphones, Check, ArrowRight } from 'lucide-react';
import { businessInfo, services, projects, pricingPackages, whyChooseUs, backgroundImages } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

const iconMap = {
  Home, Paintbrush, Building2, Hammer, Box, ClipboardCheck,
  Award, CheckCircle2, Clock, IndianRupee, Star, Headphones
};

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = ['home', 'services', 'work', 'pricing', 'why-choose-us', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
    // Track call click (Google Analytics placeholder)
    if (window.gtag) {
      window.gtag('event', 'call_click', { phone_number: phone });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I am interested in your construction services. Please provide more details.');
    window.open(`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
    // Track WhatsApp click
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', { phone_number: businessInfo.whatsapp });
    }
  };

  const handleInstagram = () => {
    window.open(businessInfo.instagram, '_blank');
  };

  const handleEmail = () => {
    const mailtoLink = document.createElement('a');
    mailtoLink.href = 'mailto:constructionanand10@gmail.com';
    mailtoLink.target = '_blank';
    mailtoLink.rel = 'noopener noreferrer';
    mailtoLink.click();
    // Track email click
    if (window.gtag) {
      window.gtag('event', 'email_click', { email: 'constructionanand10@gmail.com' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock email implementation - save to localStorage
    const existingContacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newContact = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    existingContacts.push(newContact);
    localStorage.setItem('contactSubmissions', JSON.stringify(existingContacts));

    toast.success('Thank you! We will contact you soon.');
    
    // Track form submission
    if (window.gtag) {
      window.gtag('event', 'form_submission', { form_name: 'contact_form' });
    }

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImages.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-transparent"></div>
        
        <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center md:text-left transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {businessInfo.name}
          </h1>
          <p className="text-2xl md:text-3xl text-amber-400 mb-8 font-light">
            {businessInfo.tagline}
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl">
            Transform your vision into reality with our expert construction and interior design services. 
            Quality craftsmanship, timely delivery, and customer satisfaction guaranteed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => handleCall(businessInfo.phones[0])}
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-green-500 hover:bg-green-600 text-white border-green-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={handleEmail}
            >
              <Mail className="mr-2" size={20} />
              Email Us
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start text-slate-300">
            <button
              onClick={() => handleCall(businessInfo.phones[0])}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone size={18} />
              <span>{businessInfo.phones[0]}</span>
            </button>
            <button
              onClick={() => handleCall(businessInfo.phones[1])}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone size={18} />
              <span>{businessInfo.phones[1]}</span>
            </button>
            <button
              onClick={handleEmail}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail size={18} />
              <span>{businessInfo.email}</span>
            </button>
            <button
              onClick={handleInstagram}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Instagram size={18} />
              <span>Follow Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 relative"
        style={{
          backgroundImage: `url(${backgroundImages.services})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive construction and interior solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-slate-200 ${
                    isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.work ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Showcasing our finest construction projects across Pune
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  isVisible.work ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-slate-300">{project.location}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {project.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 relative"
        style={{
          backgroundImage: `url(${backgroundImages.pricing})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Construction Cost Range (Per Sq. Ft.)
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transparent pricing for every budget and requirement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/95 backdrop-blur-sm ${
                  pkg.popular ? 'ring-4 ring-amber-500 scale-105' : ''
                } ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-slate-800 mb-4">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-amber-600 mb-2">
                    {pkg.priceRange}
                  </div>
                  <p className="text-slate-600">{pkg.perUnit}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-8 bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    onClick={handleWhatsApp}
                  >
                    Get Quote
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center text-slate-300 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl max-w-3xl mx-auto">
            <p className="text-lg">
              <strong className="text-amber-400">Note:</strong> Final pricing depends on design complexity, 
              material selection, site conditions, and specific project requirements. Contact us for a detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        className="py-20 relative"
        style={{
          backgroundImage: `url(${backgroundImages.whyChooseUs})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['why-choose-us'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Why Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Your trusted partner for exceptional construction services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Card
                  key={item.id}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-slate-200 ${
                    isVisible['why-choose-us'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="text-amber-400" size={28} />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to start your construction project? Contact us today!
            </p>
          </div>

          <Card className={`bg-white/95 backdrop-blur-sm shadow-2xl transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-700">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-slate-700">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </form>

              {/* Quick Contact */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-center text-slate-600 mb-4">Or reach us directly:</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => handleCall(businessInfo.phones[0])}
                    className="border-amber-500 text-amber-600 hover:bg-amber-50"
                  >
                    <Phone className="mr-2" size={18} />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="border-green-500 text-green-600 hover:bg-green-50"
                  >
                    <MessageCircle className="mr-2" size={18} />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">{businessInfo.name}</h3>
              <p className="text-slate-400 mb-4">{businessInfo.tagline}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <p>{businessInfo.phones[0]}</p>
                <p>{businessInfo.phones[1]}</p>
                <p>{businessInfo.email}</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <button
                onClick={handleInstagram}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </button>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
