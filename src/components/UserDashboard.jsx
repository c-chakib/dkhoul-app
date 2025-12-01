import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext.jsx';
import { Button, Card, Section } from './shared';
import { Star, MapPin, Calendar, Clock, MessageCircle, Heart, User, LogOut, X } from 'lucide-react';

const UserDashboard = ({ onClose }) => {
  const { user, bookings, favorites, messages, logout, cancelBooking, removeFromFavorites } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('bookings');

  if (!user) return null;

  const tabs = [
    { id: 'bookings', label: 'Mes Réservations', icon: Calendar, count: bookings.length },
    { id: 'favorites', label: 'Favoris', icon: Heart, count: favorites.length },
    { id: 'messages', label: 'Messages', icon: MessageCircle, count: messages.length }
  ];

  const renderBookings = () => (
    <div className="space-y-4">
      {bookings.length === 0 ? (
        <div className="text-center py-8 text-secondary/60">
          <Calendar size={48} className="mx-auto mb-4 text-secondary/30" />
          <p>Aucune réservation pour le moment</p>
        </div>
      ) : (
        bookings.map(booking => (
          <Card key={booking.id} className="!p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-secondary">{booking.serviceTitle}</h3>
                <p className="text-sm text-secondary/70">Hôte: {booking.providerName}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">{booking.totalPrice} {booking.currency}</div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                  booking.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {booking.status === 'confirmed' ? 'Confirmée' :
                   booking.status === 'cancelled' ? 'Annulée' : 'En attente'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-secondary/70 mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {booking.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {booking.time}
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                {booking.guests} personne{booking.guests > 1 ? 's' : ''}
              </div>
            </div>
            {booking.status === 'confirmed' && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  if (confirm('Êtes-vous sûr de vouloir annuler cette réservation ?')) {
                    cancelBooking(booking.id);
                  }
                }}
                className="!py-1 !px-3 !text-xs"
              >
                Annuler
              </Button>
            )}
          </Card>
        ))
      )}
    </div>
  );

  const renderFavorites = () => (
    <div className="space-y-4">
      {favorites.length === 0 ? (
        <div className="text-center py-8 text-secondary/60">
          <Heart size={48} className="mx-auto mb-4 text-secondary/30" />
          <p>Aucun favori pour le moment</p>
        </div>
      ) : (
        favorites.map(service => (
          <Card key={service.id} className="!p-4">
            <div className="flex gap-4">
              <img
                src={service.images?.[0] ? `https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop` : ''}
                alt={service.title}
                className="w-20 h-20 object-cover rounded-lg"
                onError={(e) => {e.target.src='https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop'}}
              />
              <div className="flex-1">
                <h3 className="font-bold text-secondary mb-1">{service.title}</h3>
                <div className="flex items-center gap-4 text-sm text-secondary/70 mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {service.location?.city}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="fill-yellow-500 text-yellow-500" />
                    {service.rating?.average}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-primary font-bold">
                    {service.pricing?.basePrice} {service.pricing?.currency}
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => removeFromFavorites(service.id)}
                    className="!py-1 !px-3 !text-xs"
                  >
                    Retirer
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );

  const renderMessages = () => {
    const conversations = messages.reduce((acc, msg) => {
      if (!acc[msg.with]) acc[msg.with] = [];
      acc[msg.with].push(msg);
      return acc;
    }, {});

    return (
      <div className="space-y-4">
        {Object.keys(conversations).length === 0 ? (
          <div className="text-center py-8 text-secondary/60">
            <MessageCircle size={48} className="mx-auto mb-4 text-secondary/30" />
            <p>Aucun message pour le moment</p>
          </div>
        ) : (
          Object.entries(conversations).map(([contact, msgs]) => (
            <Card key={contact} className="!p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {contact.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-secondary">{contact}</h3>
                  <p className="text-xs text-secondary/70">
                    {msgs.length} message{msgs.length > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <div className="bg-surface-variant p-3 rounded-lg">
                <p className="text-sm text-secondary/70 line-clamp-2">
                  {msgs[msgs.length - 1]?.text}
                </p>
                <p className="text-xs text-secondary/50 mt-1">
                  {new Date(msgs[msgs.length - 1]?.timestamp).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </Card>
          ))
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-float">
        <div className="p-6 border-b border-outline flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
              {user.name?.charAt(0) || user.email?.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary">Mon Profil</h2>
              <p className="text-sm text-secondary/70">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              onClick={logout}
              className="!py-2 !px-4"
            >
              <LogOut size={16} className="mr-2" />
              Déconnexion
            </Button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface-variant rounded-full text-secondary"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex border-b border-outline">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 p-4 text-center transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-secondary/70 hover:text-secondary'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <tab.icon size={18} />
                <span className="font-medium">{tab.label}</span>
                {tab.count > 0 && (
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full min-w-[20px]">
                    {tab.count}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'bookings' && renderBookings()}
          {activeTab === 'favorites' && renderFavorites()}
          {activeTab === 'messages' && renderMessages()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;