// Shared WhatsApp contact configuration for Design World
export const WHATSAPP_NUMBER = '919322994747';

export const DEFAULT_WHATSAPP_MESSAGE = `Hello Vivek,
I visited your Design World portfolio website and I'm interested in your graphic design services.
I'd like to discuss my project with you.`;

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_WHATSAPP_MESSAGE
)}`;
