import React, { createContext, useContext, useState, useEffect } from 'react';

// User Context for managing authentication and user data
const UserContext = createContext();

export { UserContext };

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [messages, setMessages] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('dkhoul_user');
    const savedBookings = localStorage.getItem('dkhoul_bookings');
    const savedFavorites = localStorage.getItem('dkhoul_favorites');
    const savedReviews = localStorage.getItem('dkhoul_reviews');
    const savedMessages = localStorage.getItem('dkhoul_messages');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (user) localStorage.setItem('dkhoul_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('dkhoul_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('dkhoul_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('dkhoul_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('dkhoul_messages', JSON.stringify(messages));
  }, [messages]);

  // Authentication functions
  const login = (userData) => {
    const userWithId = {
      ...userData,
      id: Date.now().toString(),
      joinedDate: new Date().toISOString(),
      avatar: userData.avatar || `👤`,
      verified: false
    };
    setUser(userWithId);
    return userWithId;
  };

  const logout = () => {
    setUser(null);
    // Clear all user data
    setBookings([]);
    setFavorites([]);
    setReviews([]);
    setMessages([]);
    localStorage.removeItem('dkhoul_user');
    localStorage.removeItem('dkhoul_bookings');
    localStorage.removeItem('dkhoul_favorites');
    localStorage.removeItem('dkhoul_reviews');
    localStorage.removeItem('dkhoul_messages');
  };

  const updateProfile = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  // Booking functions
  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: Date.now().toString(),
      userId: user.id,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      reference: `DKH-${Date.now()}`
    };
    setBookings(prev => [...prev, newBooking]);
    return newBooking;
  };

  const cancelBooking = (bookingId) => {
    setBookings(prev => prev.map(booking =>
      booking.id === bookingId
        ? { ...booking, status: 'cancelled' }
        : booking
    ));
  };

  // Favorites functions
  const addToFavorites = (serviceId) => {
    if (!favorites.includes(serviceId)) {
      setFavorites(prev => [...prev, serviceId]);
    }
  };

  const removeFromFavorites = (serviceId) => {
    setFavorites(prev => prev.filter(id => id !== serviceId));
  };

  const isFavorite = (serviceId) => {
    return favorites.includes(serviceId);
  };

  // Reviews functions
  const addReview = (review) => {
    const newReview = {
      ...review,
      id: Date.now().toString(),
      userId: user.id,
      userName: user.name,
      userAvatar: user.avatar,
      createdAt: new Date().toISOString()
    };
    setReviews(prev => [...prev, newReview]);
    return newReview;
  };

  // Messages functions
  const sendMessage = (conversationId, message) => {
    const newMessage = {
      id: Date.now().toString(),
      conversationId,
      senderId: user.id,
      senderName: user.name,
      senderAvatar: user.avatar,
      text: message,
      timestamp: new Date().toISOString(),
      read: false
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const getConversationMessages = (conversationId) => {
    return messages.filter(msg => msg.conversationId === conversationId)
                   .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  };

  const markMessagesAsRead = (conversationId) => {
    setMessages(prev => prev.map(msg =>
      msg.conversationId === conversationId && msg.senderId !== user.id
        ? { ...msg, read: true }
        : msg
    ));
  };

  const value = {
    user,
    bookings,
    favorites,
    reviews,
    messages,
    login,
    logout,
    updateProfile,
    addBooking,
    cancelBooking,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    addReview,
    sendMessage,
    getConversationMessages,
    markMessagesAsRead
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};