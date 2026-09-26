import type { PaymentMethodId } from "./accounts";

export type TutorialStep = {
  id: string;
  title: string;
  instruction: string;
  tip?: string;
  image: string;
  highlight?: string;
};

const BANK_STEPS: TutorialStep[] = [
  {
    id: "home",
    title: "افتح إنستاباي",
    instruction:
      "من الشاشة الرئيسية اضغط على خدمة «إرسال نقود» داخل قسم الخدمات.",
    tip: "الخدمة تظهر عادة في أعلى شبكة الخدمات على اليمين.",
    image: "/tutorial/01-home.jpg",
    highlight: "إرسال نقود",
  },
  {
    id: "select-bank",
    title: "اختر التحويل لحساب بنك",
    instruction:
      "من شريط طرق التحويل اختر أيقونة البنك (المبنى). تأكد أن تبويب «رقم الحساب» مفعّل.",
    tip: "الأيقونة الوسطى في الصف هي حساب البنك.",
    image: "/tutorial/02-select-bank.jpg",
    highlight: "حساب البنك",
  },
  {
    id: "empty-form",
    title: "جهّز بيانات التحويل",
    instruction:
      "ستظهر لك حقول اختيار البنك، رقم الحساب، اسم المستفيد، والمبلغ. يمكنك لصق الأرقام المنسوخة من زر النسخ.",
    tip: "استخدم أيقونة الحافظة بجانب «رقم الحساب» للصق بسرعة.",
    image: "/tutorial/03-bank-form-empty.jpg",
  },
  {
    id: "fill-details",
    title: "أدخل بيانات شركة الوسام",
    instruction:
      "اختر البنك، الصق رقم الحساب، اكتب اسم المستفيد «شركة الوسام»، ثم أدخل المبلغ المطلوب.",
    tip: "راجع الأرقام جيدًا قبل المتابعة لتجنب أي خطأ.",
    image: "/tutorial/04-fill-details.jpg",
    highlight: "شركة الوسام",
  },
  {
    id: "add-purpose",
    title: "أضف غرض التحويل",
    instruction:
      "اضغط «+ أضف غرض التحويل» ثم اختر الغرض المناسب، ويمكنك كتابة ملاحظة إن لزم.",
    tip: "غرض التحويل مطلوب في بعض التحويلات البنكية.",
    image: "/tutorial/05-purpose.jpg",
    highlight: "غرض التحويل",
  },
  {
    id: "purpose-filled",
    title: "راجع البيانات واضغط التالي",
    instruction:
      "تأكد من البنك، رقم الحساب، اسم المستفيد، والمبلغ، ثم اضغط زر «التالي».",
    tip: "يمكنك الرجوع وتعديل أي حقل قبل التأكيد النهائي.",
    image: "/tutorial/06-purpose-filled.jpg",
  },
  {
    id: "confirm",
    title: "أكّد التحويل",
    instruction:
      "راجع المبلغ والرسوم والمستفيد، ثم اضغط «تأكيد» لإتمام التحويل عبر شبكة IPN.",
    tip: "بعد التأكيد ستظهر لك رسالة نجاح من إنستاباي.",
    image: "/tutorial/07-confirm.jpg",
    highlight: "تأكيد",
  },
];

const WALLET_STEPS: TutorialStep[] = [
  {
    id: "home",
    title: "افتح إنستاباي",
    instruction:
      "من الشاشة الرئيسية اضغط على خدمة «إرسال نقود» داخل قسم الخدمات.",
    tip: "نفس نقطة البداية لأي تحويل عبر إنستاباي.",
    image: "/tutorial/01-home.jpg",
    highlight: "إرسال نقود",
  },
  {
    id: "select-wallet",
    title: "اختر المحفظة وأدخل البيانات",
    instruction:
      "اختر أيقونة المحفظة، الصق رقم محفظة فودافون كاش في حقل «رقم الهاتف»، أدخل المبلغ، واختر غرض التحويل، ثم اضغط «التالي».",
    tip: "رقم المحفظة: 01019992224 — استخدم أيقونة الحافظة للصق.",
    image: "/tutorial/wallet-form.jpg",
    highlight: "رقم المحفظة",
  },
  {
    id: "confirm-wallet",
    title: "راجع وأكّد التحويل",
    instruction:
      "راجع المبلغ والرسوم وبيانات المستلم، ثم اضغط «تأكيد» لإتمام التحويل لمحفظة شركة الوسام.",
    tip: "احتفظ بإشعار التحويل كمرجع للدفع.",
    image: "/tutorial/wallet-confirm.jpg",
    highlight: "تأكيد",
  },
];

export function getTutorialSteps(method: PaymentMethodId): TutorialStep[] {
  if (method === "vodafone-cash") {
    return WALLET_STEPS;
  }
  return BANK_STEPS;
}

export function getMethodLabel(method: PaymentMethodId): string {
  switch (method) {
    case "banque-misr":
      return "بنك مصر";
    case "cib":
      return "CIB";
    case "vodafone-cash":
      return "فودافون كاش";
  }
}
