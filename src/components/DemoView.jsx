import React, { useState, useMemo } from 'react';
import { Star, MapPin, Users, Clock, Check, UserCheck, LockKeyhole, CreditCard, X, Send, Search, Globe, Home, GraduationCap, Grid, List, MessageCircle, Zap, Info, Layout, Layers, DollarSign, Award, Shield } from 'lucide-react';
import { Button, Card, Section } from './shared';
import { CONTENT } from '../content';

const ServiceListCard = ({ service, setSelectedService, setShowChat }) => (
    <Card className="flex flex-col md:flex-row gap-6 p-4 md:p-6 !rounded-xl !shadow-md hover:!shadow-float transition-all duration-300">
        {/* Image */}
        <div className="relative w-full md:w-64 flex-shrink-0 overflow-hidden rounded-lg">
            <img
                src={CONTENT.images.services[service.images[0]]}
                alt={service.title}
                className="w-full h-48 md:h-full object-cover transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {e.target.src='https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop'}}
            />
            {service.availability.instantBook && (
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                    <Zap size={12} className="inline-block mr-1"/>
                    Réservation immédiate
                </div>
            )}
        </div>

        {/* Détails du Service */}
        <div className="flex-1 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-secondary group-hover:text-primary line-clamp-1">{service.title}</h3>
                    <div className="flex items-center text-yellow-500 text-base font-bold flex-shrink-0">
                        <Star size={16} className="text-[18px] mr-1 fill-yellow-500" />
                        {service.rating.average}
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-secondary/60 mb-3">
                    <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary"/>
                        {service.location.city}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={14} className="text-primary"/>
                        ~{Math.round(service.duration / 60)}h
                    </div>
                    <div className="flex items-center gap-1">
                        <Users size={14} className="text-primary"/>
                        Max {service.capacity} pers.
                    </div>
                </div>

                <p className="text-secondary/70 text-sm line-clamp-3 mb-4">{service.description}</p>
            </div>

            {/* Pied de carte */}
            <div className="flex items-end justify-between border-t border-outline/30 pt-4 mt-4">
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-primary">
                        {service.pricing.basePrice} {service.pricing.currency}
                    </div>
                    <span className="text-xs text-secondary/60">par {service.pricing.unit}</span>
                </div>

                <div className="flex gap-3">
                    <Button
                        variant="secondary"
                        onClick={() => setShowChat(true)}
                        className="!py-2 !px-4 !text-sm"
                    >
                        <MessageCircle size={16} className="mr-2" />
                        Chat
                    </Button>
                    <Button
                        onClick={() => setSelectedService(service)}
                        className="!py-2 !px-4 !text-sm"
                    >
                        {CONTENT.demo.steps.view_details}
                    </Button>
                </div>
            </div>
        </div>
    </Card>
);

const FilterSidebar = ({ filters, setFilters }) => {

    // Fonction pour réinitialiser tous les filtres
    const resetFilters = () => setFilters({priceMin: '', priceMax: '', rating: '', location: '', category: ''});

    // Fonction pour changer un filtre
    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    }

    return (
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div className="bg-surface p-6 rounded-2xl shadow-lg border border-outline/10 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-secondary flex items-center gap-2"><Layout size={20}/> Affiner la Recherche</h3>
                    <button
                        onClick={resetFilters}
                        className="text-sm text-red-500 font-medium hover:text-red-700 transition-colors"
                    >
                        Réinitialiser
                    </button>
                </div>

                {/* Catégories */}
                <div className="space-y-3 mb-6 border-b border-outline/50 pb-4">
                    <label className="text-sm font-medium text-secondary/70 flex items-center gap-1"><Layers size={14}/> Catégorie</label>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center justify-between text-sm cursor-pointer hover:bg-orange-50/50 p-2 rounded transition-colors">
                            <span className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value=""
                                    checked={filters.category === ""}
                                    onChange={(e) => handleFilterChange('category', e.target.value)}
                                    className="accent-primary w-4 h-4"
                                />
                                Toutes les catégories
                            </span>
                            <span className="text-xs text-secondary/50 font-bold">({CONTENT.demo.mock_services.length})</span>
                        </label>
                        {['Space', 'Skills', 'Connect'].map(cat => (
                            <label key={cat} className="flex items-center justify-between text-sm cursor-pointer hover:bg-orange-50/50 p-2 rounded transition-colors">
                                <span className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="category"
                                        value={cat.toLowerCase()}
                                        checked={filters.category === cat.toLowerCase()}
                                        onChange={(e) => handleFilterChange('category', e.target.value)}
                                        className="accent-primary w-4 h-4"
                                    />
                                    {CONTENT.demo.categories[cat.toLowerCase()]}
                                </span>
                                <span className="text-xs text-secondary/50 font-bold">({CONTENT.demo.mock_services.filter(s => s.category.toLowerCase() === cat.toLowerCase()).length})</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Prix */}
                <div className="space-y-3 mb-6 border-b border-outline/50 pb-4">
                    <label className="text-sm font-medium text-secondary/70 flex items-center gap-1"><DollarSign size={14}/> Fourchette de Prix (DH)</label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-full p-2 border border-outline rounded-lg text-sm focus:border-primary transition-all"
                            value={filters.priceMin}
                            onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-full p-2 border border-outline rounded-lg text-sm focus:border-primary transition-all"
                            value={filters.priceMax}
                            onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                        />
                    </div>
                </div>

                {/* Note */}
                <div className="space-y-3 mb-6 border-b border-outline/50 pb-4">
                    <label className="text-sm font-medium text-secondary/70 flex items-center gap-1"><Award size={14}/> Note Minimum</label>
                    <select
                        className="w-full p-2 border border-outline rounded-lg text-sm focus:border-primary transition-all"
                        value={filters.rating}
                        onChange={(e) => handleFilterChange('rating', e.target.value)}
                    >
                        <option value="">Toutes les notes</option>
                        <option value="5.0">5.0 étoiles ({CONTENT.demo.mock_services.filter(s => s.rating.average >= 5.0).length})</option>
                        <option value="4.8">4.8+ étoiles ({CONTENT.demo.mock_services.filter(s => s.rating.average >= 4.8).length})</option>
                        <option value="4.5">4.5+ étoiles ({CONTENT.demo.mock_services.filter(s => s.rating.average >= 4.5).length})</option>
                    </select>
                </div>

                {/* Localisation */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-secondary/70 flex items-center gap-1"><MapPin size={14}/> Ville</label>
                    <select
                        className="w-full p-2 border border-outline rounded-lg text-sm focus:border-primary transition-all"
                        value={filters.location}
                        onChange={(e) => handleFilterChange('location', e.target.value)}
                    >
                        <option value="">Toutes les villes</option>
                        {CONTENT.demo.cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>
        </aside>
    );
};

const DemoView = () => {
    // ... (Logique inchangée pour les filtres et le tri)
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedService, setSelectedService] = useState(null);
    const [showBooking, setShowBooking] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('rating');
    const [filters, setFilters] = useState({
      priceMin: '',
      priceMax: '',
      rating: '',
      location: '',
      category: ''
    });

    const handleViewDetails = (service) => setSelectedService(service);
    const handleCloseDetails = () => setSelectedService(null);
    const handleOpenBooking = () => setShowBooking(true);
    const handleCloseBooking = () => setShowBooking(false);
    const handleOpenChat = () => setShowChat(true);
    const handleCloseChat = () => setShowChat(false);


    const filteredServices = useMemo(() => {
        let services = CONTENT.demo.mock_services;

        if (searchQuery) {
          services = services.filter(s =>
            s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.providerName.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        if (filters.category && filters.category !== 'all') {
          services = services.filter(s => s.category.toLowerCase() === filters.category);
        }

        if (filters.priceMin) {
          services = services.filter(s => s.pricing.basePrice >= parseInt(filters.priceMin));
        }
        if (filters.priceMax) {
          services = services.filter(s => s.pricing.basePrice <= parseInt(filters.priceMax));
        }

        if (filters.rating) {
          services = services.filter(s => s.rating.average >= parseFloat(filters.rating));
        }

        if (filters.location) {
          services = services.filter(s => s.location.city.toLowerCase() === filters.location.toLowerCase());
        }

        services.sort((a, b) => {
          switch (sortBy) {
            case 'price-asc':
              return a.pricing.basePrice - b.pricing.basePrice;
            case 'price-desc':
              return b.pricing.basePrice - a.pricing.basePrice;
            case 'rating':
              return b.rating.average - a.rating.average;
            default:
                return b.rating.average - a.rating.average;
          }
        });

        return services;
    }, [searchQuery, filters, sortBy]);


    const ServiceCard = ({ service }) => (
        <Card className="group !rounded-2xl !shadow-card hover:!shadow-float transition-all duration-300 cursor-pointer overflow-hidden bg-surface flex flex-col h-full border border-outline/10">
          {/* Image */}
          <div className="relative overflow-hidden h-48 flex-shrink-0">
            <img
              src={CONTENT.images.services[service.images[0]]}
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {e.target.src='https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop'}}
            />
            <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              {service.category}
            </div>
            {service.availability.instantBook && (
              <div className="absolute top-3 left-3 bg-success/80 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                <Zap size={12} className="inline-block mr-1"/>
                Instantané
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-secondary line-clamp-2 group-hover:text-primary transition-colors">{service.title}</h3>
            </div>

            <div className="flex items-center justify-between text-sm text-secondary/60 mb-2">
                <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-primary"/>
                    {service.location.city}
                </span>
                <span className="flex items-center text-yellow-500 font-bold">
                    <Star size={14} className="text-[16px] mr-1 fill-yellow-500" />
                    {service.rating.average}
                </span>
            </div>

            <p className="text-secondary/60 text-sm line-clamp-2 mb-4 flex-1">{service.description}</p>

            <div className="flex items-center justify-between pt-3 border-t border-outline/10 mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-secondary/70 text-xs font-bold border border-outline/30">
                  {service.providerAvatar}
                </div>
                <span className="text-xs text-secondary/70 font-medium">{service.providerName}</span>
              </div>
              <div className="text-primary font-bold text-xl">
                {service.pricing.basePrice} {service.pricing.currency}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                onClick={() => handleViewDetails(service)}
                className="!py-2 !px-4 !text-sm flex-1"
              >
                {CONTENT.demo.steps.view_details}
              </Button>
            </div>
          </div>
        </Card>
    );

    const ServiceDetailModal = () => {
        if (!selectedService) return null;

        return (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-all duration-300">
              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={CONTENT.images.services[selectedService.images[0]]}
                  alt={selectedService.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={handleCloseDetails}
                  className="absolute top-4 right-4 bg-surface/80 hover:bg-surface p-2 rounded-full shadow-md text-secondary transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="text-3xl font-bold text-white">{selectedService.title}</div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6 border-b pb-4">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-secondary/70 mb-4">
                      <div className="flex items-center gap-1 font-medium text-secondary">
                        <MapPin size={16} className="text-primary" />
                        {selectedService.location.city}, {selectedService.location.region}
                      </div>
                      <div className="flex items-center gap-1 font-bold text-yellow-600">
                        <Star size={16} className="fill-yellow-500"/>
                        {selectedService.rating.average} ({selectedService.rating.count} avis)
                      </div>
                      <div className="flex items-center gap-1 font-medium">
                        <Users size={16} className="text-primary" />
                        Max {selectedService.capacity} personnes
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-4xl font-bold text-primary">{selectedService.pricing.basePrice} <span className='text-2xl'>{selectedService.pricing.currency}</span></div>
                    <div className="text-sm text-secondary/70">par {selectedService.pricing.unit}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="col-span-2">
                    <h3 className="text-xl font-bold mb-4 text-secondary flex items-center gap-2"><Info size={20} className='text-primary'/> Détails du Service</h3>
                    <p className="text-secondary/70 mb-6 leading-relaxed">{selectedService.description}</p>

                    <h4 className="font-bold mb-3 text-secondary flex items-center gap-2"><Check size={20} className='text-primary'/> Ce qui est inclus :</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedService.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm bg-surface-variant p-2 rounded-lg">
                          <Check size={16} className="text-success" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-1">
                    <h3 className="text-xl font-bold mb-4 text-secondary flex items-center gap-2"><UserCheck size={20} className='text-primary'/> Votre Hôte</h3>
                    <div className="flex flex-col items-center p-4 bg-surface-variant rounded-xl border border-outline/30 mb-6 shadow-sm">
                      <div className="text-5xl mb-2">{selectedService.providerAvatar}</div>
                      <div className="font-bold text-lg text-secondary">{selectedService.providerName}</div>
                      <div className="text-sm text-secondary/70">Hôte <span className='text-success font-bold'>Vérifié</span></div>
                      <Button variant="secondary" onClick={handleOpenChat} className="!py-2 !px-4 !text-sm mt-4">
                        <MessageCircle size={16} className="mr-2" />
                        Chatter
                      </Button>
                    </div>

                    <div className="space-y-3 bg-orange-50 p-4 rounded-xl border border-orange-200">
                      <div className="flex items-center gap-2 text-sm text-primary font-bold">
                        <LockKeyhole size={16} />
                        Paiement Séquestre Garanti
                      </div>
                      <div className="flex items-center gap-2 text-sm text-secondary/70">
                        <Clock size={16} />
                        Durée Estimée: ~{Math.round(selectedService.duration / 60)}h
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 border-t pt-6 mt-6">
                  <Button onClick={() => { handleOpenBooking(); handleCloseDetails(); }} className="!py-3 !px-8">
                    {CONTENT.demo.steps.book_now}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      };

    const BookingModal = () => {
        // ... (Logique inchangée pour la démo)
        const [bookingStep, setBookingStep] = useState(1);
        const [bookingData, setBookingData] = useState({
          date: '',
          time: '',
          guests: 1,
          specialRequests: ''
        });

        if (!showBooking) return null;

        const serviceToBook = selectedService || CONTENT.demo.mock_services[0];

        return (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-surface rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Réserver votre expérience</h2>
                  <button onClick={handleCloseBooking} className="p-2 hover:bg-surface-variant rounded-full">
                    <X size={20} />
                  </button>
                </div>

                {bookingStep === 1 && (
                  <div className="space-y-6">
                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                        <div className='font-bold text-primary mb-1'>{serviceToBook?.title}</div>
                        <div className='text-sm text-secondary/70'>Hôte: {serviceToBook?.providerName} | Ville: {serviceToBook?.location.city}</div>
                    </div>

                    <div>
                      <label className="block font-bold mb-2">Date</label>
                      <input
                        type="date"
                        className="w-full p-3 border border-outline rounded-xl focus:border-primary transition-colors"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-2">Heure</label>
                      <select
                        className="w-full p-3 border border-outline rounded-xl focus:border-primary transition-colors"
                        value={bookingData.time}
                        onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                      >
                        <option value="">Choisir une heure</option>
                        <option value="09:00">09:00</option>
                        <option value="14:00">14:00</option>
                        <option value="18:00">18:00</option>
                        <option value="20:00">20:00</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold mb-2">Nombre de personnes</label>
                      <select
                        className="w-full p-3 border border-outline rounded-xl focus:border-primary transition-colors"
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
                      >
                        {Array.from({length: serviceToBook?.capacity || 4}, (_, i) => (
                          <option key={i+1} value={i+1}>{i+1} personne{i+1 > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                    <Button
                        onClick={() => {
                            if (bookingData.date && bookingData.time) {
                                setBookingStep(2)
                            } else {
                                alert("Veuillez sélectionner une date et une heure.");
                            }
                        }}
                        className="w-full !py-4">
                      Continuer vers le paiement
                    </Button>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-6">
                    <div className="bg-surface-variant p-4 rounded-xl border border-outline/30">
                      <h3 className="font-bold mb-2 text-secondary">Récapitulatif de votre Commande</h3>
                      <div className="text-sm space-y-1 text-secondary/70">
                        <div>Service: <span className='font-medium'>{serviceToBook?.title}</span></div>
                        <div>Date: <span className='font-medium'>{bookingData.date || 'À définir'}</span> à <span className='font-medium'>{bookingData.time || 'À définir'}</span></div>
                        <div>Personnes: <span className='font-medium'>{bookingData.guests}</span></div>
                        <div className="font-bold text-2xl text-primary mt-3 pt-3 border-t border-outline/50">
                          Total: {serviceToBook?.pricing.basePrice * parseInt(bookingData.guests) || 0} {serviceToBook?.pricing.currency}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold mb-2">Paiement</label>
                      <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-outline/30">
                        <CreditCard size={20} className='text-secondary/70'/>
                        <span className='text-sm text-secondary/70'>Paiement par Carte (Stripe/CMI)</span>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <div className="flex items-center gap-2 text-green-700 font-bold mb-2">
                        <Shield size={16} />
                        Paiement 100% sécurisé (Séquestre)
                      </div>
                      <div className="text-sm text-green-600">
                        Vos fonds sont bloqués jusqu'à la fin de la prestation, garantissant la sécurité pour l'hôte et le voyageur.
                      </div>
                    </div>

                    <Button onClick={() => alert('Réservation confirmée ! 🎉\n\nVous recevrez un email de confirmation et les coordonnées de votre hôte.')} className="w-full !py-4">
                      Confirmer et Payer
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
    };

    const ChatModal = () => {
        // ... (Logique inchangée pour la démo)
        const [messages, setMessages] = useState([
            { id: 1, sender: 'host', text: `Bonjour ! Je suis ${selectedService?.providerName || 'l\'hôte'}. Comment puis-je vous aider pour votre réservation ?`, time: '10:30' },
            { id: 2, sender: 'user', text: `Bonjour ! Je suis intéressé par votre service "${selectedService?.title}". Avez-vous des disponibilités cette semaine ?`, time: '10:32' },
            { id: 3, sender: 'host', text: 'Oui bien sûr ! Je peux vous proposer demain après-midi à 14h. Le service dure environ 3h. Cela vous convient-il ?', time: '10:33' }
        ]);
        const [newMessage, setNewMessage] = useState('');

        if (!showChat) return null;

        const sendMessage = () => {
            if (newMessage.trim()) {
                setMessages([...messages, {
                    id: messages.length + 1,
                    sender: 'user',
                    text: newMessage,
                    time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
                }]);
                setNewMessage('');

                // Simulate host response
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: prev.length + 1,
                        sender: 'host',
                        text: 'Parfait ! Je vous envoie les détails de réservation. Vous pouvez aussi réserver directement via la plateforme.',
                        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
                    }]);
                }, 2000);
            }
        };

        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                <div className="bg-surface rounded-2xl max-w-md w-full h-[600px] flex flex-col shadow-float">
                    <div className="p-4 border-b border-outline flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="text-2xl">{selectedService?.providerAvatar}</div>
                            <div>
                                <div className="font-bold text-secondary">{selectedService?.providerName}</div>
                                <div className="text-xs text-success font-medium">En ligne</div>
                            </div>
                        </div>
                        <button onClick={handleCloseChat} className="p-2 hover:bg-surface-variant rounded-full text-secondary">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar">
                        {messages.map(msg => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl ${
                                    msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-br-none'
                                        : 'bg-surface-variant text-secondary rounded-tl-none border border-outline/50'
                                }`}>
                                    <div className="text-sm">{msg.text}</div>
                                    <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-orange-100' : 'text-secondary/50'}`}>
                                        {msg.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t border-outline">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Tapez votre message..."
                                className="flex-1 p-3 border border-outline rounded-xl focus:border-primary transition-colors"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            />
                            <Button onClick={sendMessage} className="!p-3 !px-4">
                                <Send size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const handleQuickFilter = (category) => {
        setFilters(prev => ({
            ...prev,
            category: prev.category === category ? '' : category
        }));
    }

    const quickFilterOptions = [
        { key: 'all', label: 'Tout voir', icon: Globe },
        { key: 'space', label: CONTENT.demo.categories.space, icon: Home },
        { key: 'skills', label: CONTENT.demo.categories.skills, icon: GraduationCap },
        { key: 'connect', label: CONTENT.demo.categories.connect, icon: Users },
    ];

    return (
        <div className="min-h-screen bg-surface-variant pt-24">
          {/* Hero Section */}
          <div className="relative bg-surface overflow-hidden border-b border-outline/10">
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 py-10 relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
                Découvrez des Services <span className="gradient-text">Uniques</span>
              </h1>
              <p className="text-xl text-secondary/70 max-w-2xl mx-auto mb-8">
                {CONTENT.demo.subtitle}
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative bg-white rounded-full shadow-float overflow-hidden border border-outline/50">
                  <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={CONTENT.demo.search_placeholder}
                    className="!py-4 !pl-12 !pr-4 w-full bg-transparent outline-none text-secondary placeholder:text-secondary/40"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">

            {/* Quick Filter Bar */}
            <div className="flex gap-3 justify-center mb-8 overflow-x-auto pb-2">
                {quickFilterOptions.map(opt => {
                    const isActive = (opt.key === 'all' && filters.category === '') || filters.category === opt.key;
                    return (
                        <button
                            key={opt.key}
                            onClick={() => handleQuickFilter(opt.key === 'all' ? '' : opt.key)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md flex-shrink-0 ${
                                isActive
                                    ? 'bg-primary text-white shadow-primary'
                                    : 'bg-surface text-secondary hover:bg-orange-50 border border-outline/50'
                            }`}
                        >
                            <opt.icon size={16} />
                            {opt.label}
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

              {/* Filters Sidebar (Modularized) */}
              <FilterSidebar filters={filters} setFilters={setFilters} />

              {/* Main Content */}
              <div className="flex-1">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6 p-4 lg:p-0 bg-surface lg:bg-transparent rounded-xl shadow-md lg:shadow-none">
                  <h2 className="text-xl font-bold text-secondary">
                    {filteredServices.length} Service{filteredServices.length !== 1 ? 's' : ''} Trouvé{filteredServices.length !== 1 ? 's' : ''}
                  </h2>

                  {/* View Toggle & Sort */}
                  <div className="flex items-center gap-4">
                    <select
                      className="px-3 py-2 border border-outline rounded-lg text-sm bg-white focus:border-primary transition-colors"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="rating">Meilleures notes</option>
                      <option value="price-asc">Prix croissant</option>
                      <option value="price-desc">Prix décroissant</option>
                    </select>

                    <div className="bg-surface rounded-lg p-1 shadow-sm border border-outline/10 flex flex-shrink-0">
                      <button
                        className={`p-2 rounded transition-all ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-secondary/70 hover:bg-surface-variant'}`}
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid size={16} />
                      </button>
                      <button
                        className={`p-2 rounded transition-all ${viewMode === 'list' ? 'bg-primary text-white' : 'text-secondary/70 hover:bg-surface-variant'}`}
                        onClick={() => setViewMode('list')}
                      >
                        <List size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Services Grid/List */}
                <div className={`${
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }`}>
                  {filteredServices.map(s => (
                    viewMode === 'grid'
                        ? <ServiceCard key={s.id} service={s} setSelectedService={handleViewDetails} />
                        : <ServiceListCard key={s.id} service={s} setSelectedService={handleViewDetails} setShowChat={handleOpenChat} />
                  ))}
                </div>

                {/* Empty State */}
                {filteredServices.length === 0 && (
                  <div className="text-center py-16 bg-surface rounded-3xl border border-dashed border-outline/30 mt-8 shadow-card">
                    <div className="w-16 h-16 mx-auto bg-surface-variant rounded-full flex items-center justify-center text-primary mb-4 border-2 border-primary/20">
                      <Search size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Aucun service trouvé</h3>
                    <p className="text-secondary/60 mb-6">Essayez de modifier vos filtres ou votre recherche.</p>
                    <Button onClick={() => { setSearchQuery(''); setFilters({priceMin: '', priceMax: '', rating: '', location: '', category: ''}); }}>
                      Réinitialiser les filtres
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modals */}
          <ServiceDetailModal />
          <BookingModal />
          <ChatModal />
        </div>
    );
};

export default DemoView;