export const WHATSAPP_NUMBER = "201110008912";
export const WHATSAPP_DISPLAY = "+20 11 10008912";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "مرحباً، مرفق سكرين شوت التحويل لشركة الوسام",
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
