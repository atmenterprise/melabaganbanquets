import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config';
import { useModal } from '../context/ModalContext';

export default function ChatBox() {
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! Welcome to Melabagan Banquets. I am Mela, your virtual AI assistant. How can I assist you with your celebration today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Reset expansion when chat closes
  useEffect(() => {
    if (!isOpen) {
      setIsExpanded(false);
    }
  }, [isOpen]);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Handle page actions (scrolling and tab switching)
  const triggerPageAction = (action) => {
    const contactSection = document.querySelector('#contact');
    if (!contactSection) return;

    contactSection.scrollIntoView({ behavior: 'smooth' });

    if (action === 'tour') {
      setTimeout(() => {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach((btn) => {
          if (btn.textContent.toLowerCase().includes('tour') || btn.textContent.toLowerCase().includes('visit')) {
            btn.click();
          }
        });
      }, 600);
    } else if (action === 'form') {
      setTimeout(() => {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach((btn) => {
          if (btn.textContent.toLowerCase().includes('enquiry') || btn.textContent.toLowerCase().includes('send')) {
            btn.click();
          }
        });
      }, 600);
    }
  };

  // Local fallback smart keywords database
  const getLocalResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('tour') || q.includes('visit') || q.includes('schedule') || q.includes('appointment') || q.includes('meet')) {
      setTimeout(() => triggerPageAction('tour'), 1000);
      return "I would be delighted to help you schedule a site visit! I am scrolling you down to our live scheduler now. Please choose your preferred date and time in the 'Book Site Tour' section on the page.";
    }
    if (q.includes('parking') || q.includes('car') || q.includes('vehicle') || q.includes('valet')) {
      return "Melabagan Banquets provides ample in-house parking space for both cars and two-wheelers. To make your event completely stress-free, we also provide a complimentary Valet Parking service on the day of your celebration.";
    }
    if (q.includes('cater') || q.includes('food') || q.includes('kitchen') || q.includes('menu') || q.includes('eat')) {
      return "Yes! We offer premium in-house catering with customizable vegetarian and non-vegetarian menus. If you prefer to bring your own external caterer, that is permitted as well, but additional kitchen utility fees and terms will apply.";
    }
    if (q.includes('decor') || q.includes('flower') || q.includes('design') || q.includes('theme')) {
      return "To maintain our high visual standards, we have an exclusive in-house decoration team that handles all the floral and thematic styling. Outside decorators are strictly not permitted at the venue.";
    }
    if (q.includes('alcohol') || q.includes('drink') || q.includes('wine') || q.includes('smoke') || q.includes('cigarette') || q.includes('liquor')) {
      return "No, Melabagan Banquets is a strictly alcohol-free and smoke-free family environment. Alcohol, smoking, and e-cigarettes are prohibited within all indoor and outdoor premises.";
    }
    if (q.includes('capacity') || q.includes('guest') || q.includes('people') || q.includes('how many') || q.includes('size') || q.includes('sq') || q.includes('ceil')) {
      return "Our venue is extremely spacious, featuring over 8,000 sq. ft. of grand luxury (air-conditioned hall and lawn) with tall ceilings and premium acoustics. It is designed to comfortably accommodate and wow celebrations of up to 500+ guests.";
    }
    if (q.includes('address') || q.includes('locate') || q.includes('where') || q.includes('map') || q.includes('direction') || q.includes('zudio')) {
      return "We are located at 426/1 & 426/2 Dum Dum Road, Melabagan Estate, Bagjolla, Dum Dum, Kolkata - 700 074, directly opposite the Dum Dum Zudio fashion mall. It is 10 minutes from metro and train stations, and 20-30 minutes from the airport.";
    }
    if (q.includes('phone') || q.includes('call') || q.includes('contact') || q.includes('number') || q.includes('email') || q.includes('reach')) {
      return `You can reach our management directly via Phone/Text at ${siteConfig.phone_main} or ${siteConfig.phone_alt}. You can also email us at ${siteConfig.email}, or use the 'Send Enquiry' form on the page.`;
    }
    if (q.includes('temple') || q.includes('mandir') || q.includes('hindu')) {
      return "Yes, we have a beautiful, serene temple complex located right within the venue premises, which is ideal for performing traditional wedding rituals and ceremonies.";
    }
    if (q.includes('wifi') || q.includes('internet') || q.includes('signal') || q.includes('reception')) {
      return "Yes, we provide complimentary high-speed event Wi-Fi for all guests. The venue is also structurally optimized to ensure strong mobile cellular signals across all major telecom networks inside the hall.";
    }
    if (q.includes('price') || q.includes('cost') || q.includes('rent') || q.includes('charge')) {
      setTimeout(() => triggerPageAction('form'), 1500);
      return `Our pricing depends on the event date, guest count, and catering options. I am scrolling you to our inquiry form so you can submit your requirements, and our manager will send you a custom quote. You can also call us directly at ${siteConfig.phone_main}.`;
    }
    if (q.includes('about') || q.includes('who') || q.includes('owner') || q.includes('management') || q.includes('developer') || q.includes('atm')) {
      return "Melabagan Banquets is a premium luxury event venue located in Dum Dum, Kolkata, managed by our dedicated hosting team and developed by ATM Enterprise. We offer a modern, elegant 8,000+ sq. ft. space ideal for weddings, receptions, and corporate functions, in a 100% family-friendly, alcohol-free and smoke-free environment.";
    }
    if (q.includes('feature') || q.includes('facility') || q.includes('amenity') || q.includes('offer') || q.includes('hall') || q.includes('lawn')) {
      return "Melabagan Banquets offers a range of premium amenities: over 8,000 sq. ft. of indoor AC hall & outdoor lawn, high ceilings with premium acoustics, private bridal dressing rooms, an in-house Hindu temple, complimentary high-speed Wi-Fi, secure parking with valet service, in-house catering, and exclusive floral decorations.";
    }

    // Default redirection reply
    setTimeout(() => {
      openModal('faq');
    }, 1500);
    return "I am only able to answer questions regarding Melabagan Banquets. To assist you, I am opening our Frequently Asked Questions (FAQs) modal. You may also scroll down to our Contact section to send an enquiry or book a site tour.";
  };

  // Send request to Gemini API
  const getGeminiResponse = async (query) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      // Return local fallback if API key is not present
      return getLocalResponse(query);
    }

    const systemPrompt = `You are Mela, the AI Assistant for Melabagan Banquets, a luxury event venue located in Dum Dum, Kolkata.
Your job is to assist visitors with questions about the venue, amenities, local area details, booking policies, and FAQs.

CONTEXT OF THE WEBSITE:
- Address: 426/1 & 426/2 Dum Dum Road, Melabagan Estate, Bagjolla, Dum Dum, Kolkata - 700 074. Located opposite Dum Dum Zudio fashion mall.
- Travel convenience: 10 minutes from metro & train stations, 2 minutes from Dum Dum Chattakol Bus Stop, 20-30 minutes from Kolkata International Airport.
- Venue Features:
  - Sprawling lawn & air-conditioned hall (8000+ sq. ft.)
  - High ceilings, modern acoustics, modular layout.
  - Hosts up to 500+ guests (ideal for weddings, receptions, anniversaries, birthdays, corporate events).
  - In-house parking space with Valet service provided on the event day.
  - Serene Hindu Temple complex within the premises.
  - Well-appointed private rooms for comfort (bridal suites, rest rooms).
  - High-speed event Wi-Fi and strong mobile signal reception inside.
  - In-house catering customizable menus (outside caterer allowed, but additional kitchen utility fees apply).
  - In-house decorator (no third-party decorators allowed).
  - Alcohol and smoking are strictly prohibited (100% alcohol-free and smoke-free family environment).
- Pricing & Booking:
  - Bookings are recommended 6-12 months in advance.
  - Cancellation policy is defined in the contract; security deposits may apply.
- Contacts: Phone: ${siteConfig.phone_main} / ${siteConfig.phone_alt}, Email: ${siteConfig.email}.

STRICT RULES:
1. ONLY answer questions directly related to Melabagan Banquets, its features, details, location, and bookings.
2. If the user asks about other topics, off-topic questions, programming, general knowledge, or other venues, politely refuse and state exactly: "I am only able to answer questions regarding Melabagan Banquets. To assist you, I am opening our Frequently Asked Questions (FAQs) modal. You may also scroll down to our Contact section to send an enquiry or book a site tour."
3. If the user wants to book a tour or contact the owners, tell them they can do so directly using the "Book Site Tour" tab in the Contact section at the bottom of the page, or by calling ${siteConfig.phone_main}.
4. Keep your answers concise, professional, warm, and elegant.`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemPrompt}\n\nUser Query: ${query}` }]
              }
            ]
          })
        }
      );

      const data = await response.json();
      if (data.candidates && data.candidates[0].content.parts[0].text) {
        let reply = data.candidates[0].content.parts[0].text;
        
        // Trigger page actions based on AI responses containing keywords
        const lowerReply = reply.toLowerCase();
        
        if (lowerReply.includes('frequently asked questions') || lowerReply.includes('faq') || lowerReply.includes('unrelated') || lowerReply.includes('off-topic')) {
          if (lowerReply.includes('opening our') || lowerReply.includes('only able to answer')) {
            setTimeout(() => {
              openModal('faq');
            }, 1500);
          }
        }

        if (lowerReply.includes('schedule') || lowerReply.includes('calendly') || lowerReply.includes('tour') || lowerReply.includes('site visit')) {
          if (query.toLowerCase().includes('tour') || query.toLowerCase().includes('visit') || query.toLowerCase().includes('schedule')) {
            triggerPageAction('tour');
          }
        }
        
        return reply;
      }
      return getLocalResponse(query);
    } catch (error) {
      console.error('Gemini API call failed:', error);
      return getLocalResponse(query);
    }
  };

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Get response
    const botText = await getGeminiResponse(query);
    
    setIsTyping(false);
    setMessages((prev) => [
      ...prev,
      { id: Date.now() + 1, sender: 'bot', text: botText }
    ]);
  };

  const quickActions = [
    { text: 'Book a site tour', query: 'I want to book a site tour visit' },
    { text: 'Parking availability?', query: 'Do you have parking and valet services?' },
    { text: 'Capacity of the hall?', query: 'What is the guest capacity and size of the hall?' },
    { text: 'Catering rules?', query: 'Do you provide catering or can I bring my own?' }
  ];

  return (
    <div className="chatbox-wrapper">
      {/* Floating Chat Bubble Button */}
      <button
        type="button"
        className={`chatbox-bubble ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat assistant"
      >
        {isOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <div className="bubble-icon-container">
            <i className="bi bi-chat-dots-fill"></i>
            <span className="bubble-status-dot"></span>
          </div>
        )}
      </button>

      {/* Chat Window Box */}
      {isOpen && (
        <div className={`chatbox-window ${isExpanded ? 'expanded' : ''} wow zoomIn`} data-wow-duration="0.3s">
          {/* Header */}
          <div className="chatbox-header">
            <div className="chatbox-agent-info">
              <div className="chatbox-avatar">
                <i className="bi bi-stars"></i>
              </div>
              <div className="chatbox-name-container">
                <h4>Mela</h4>
                <div className="chatbox-status">
                  <span className="status-dot"></span>
                  <span>AI Event Planner</span>
                </div>
              </div>
            </div>
            <div className="chatbox-header-actions">
              <button
                type="button"
                className="chatbox-header-action-btn chatbox-expand-btn"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? "Collapse chat window" : "Expand chat window"}
              >
                <i className={`bi ${isExpanded ? 'bi-fullscreen-exit' : 'bi-fullscreen'}`}></i>
              </button>
              <button
                type="button"
                className="chatbox-header-action-btn chatbox-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat window"
              >
                <i className="bi bi-dash-lg"></i>
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="chatbox-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbox-msg-wrapper ${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <div className="bot-avatar-circle">
                    <i className="bi bi-stars"></i>
                  </div>
                )}
                <div className="chatbox-msg-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="chatbox-msg-wrapper bot">
                <div className="bot-avatar-circle">
                  <i className="bi bi-stars"></i>
                </div>
                <div className="chatbox-msg-bubble typing-bubble">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Suggestions */}
          {messages.length === 1 && (
            <div className="chatbox-quick-actions">
              {quickActions.map((act, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSend(act.query)}
                  className="quick-action-tag"
                >
                  {act.text}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="chatbox-footer"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about venue, capacities, location..."
              className="chatbox-input"
            />
            <button type="submit" className="chatbox-send-btn" disabled={!input.trim()}>
              <i className="bi bi-send-fill"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
