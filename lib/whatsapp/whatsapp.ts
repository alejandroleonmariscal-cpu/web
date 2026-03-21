export function createWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  const finalPhone = cleanPhone.startsWith('+') ? cleanPhone.slice(1) : cleanPhone;
  const baseUrl = `https://wa.me/${finalPhone}`;
  
  if (!message) return baseUrl;
  
  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
}