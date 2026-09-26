import type { PaymentMethodId } from "./accounts";
import type { ScreenId } from "@/components/instapay/InstaPayStepView";

export type TutorialStep = {
  id: string;
  title: string;
  instruction: string;
  tip?: string;
  screen: ScreenId;
  highlight?: string;
};

/** Bank pathway: 3 steps only */
const BANK_STEPS: TutorialStep[] = [
  {
    id: "home",
    title: "افتح إنستاباي",
    instruction:
      "من الشاشة الرئيسية اضغط على خدمة «إرسال نقود».",
    tip: "الخدمة مظللة — اضغط عليها للمتابعة.",
    screen: "home",
    highlight: "إرسال نقود",
  },
  {
    id: "bank-form",
    title: "أدخل بيانات التحويل",
    instruction:
      "املأ الحقول بالترتيب: ١ البنك ← ٢ رقم الحساب ← ٣ المستفيد ← ٤ المبلغ ← ٥ رقم موبايلك في الملاحظات، ثم اضغط «التالي».",
    tip: "الحقل النشط مظلّل بالبرتقالي — استخدم «تعبئة» لتسريع الخطوات ١–٣.",
    screen: "bank-form",
    highlight: "١ ← ٥",
  },
  {
    id: "confirm",
    title: "أكّد التحويل",
    instruction:
      "راجع المبلغ والرسوم والمستفيد، ثم اضغط «تأكيد». بعد التحويل الحقيقي ابعت سكرين شوت على واتساب.",
    tip: "واتساب التأكيد: +20 11 10008912",
    screen: "confirm",
    highlight: "تأكيد",
  },
];

/** Vodafone Cash pathway: 3 steps only */
const WALLET_STEPS: TutorialStep[] = [
  {
    id: "home",
    title: "افتح إنستاباي",
    instruction:
      "من الشاشة الرئيسية اضغط على خدمة «إرسال نقود».",
    tip: "اضغط على البطاقة المظللة للمتابعة.",
    screen: "home",
    highlight: "إرسال نقود",
  },
  {
    id: "select-wallet",
    title: "أدخل بيانات المحفظة",
    instruction:
      "املأ الحقول بالترتيب: ١ رقم المحفظة ← ٢ المبلغ ← ٣ غرض التحويل، ثم اضغط «التالي».",
    tip: "رقم محفظة الوسام: 01019992224 — استخدم «تعبئة» للصق الرقم.",
    screen: "select-wallet",
    highlight: "١ ← ٣",
  },
  {
    id: "confirm-wallet",
    title: "أكّد التحويل",
    instruction:
      "راجع المبلغ وبيانات المستلم، ثم اضغط «تأكيد». بعد التحويل الحقيقي ابعت سكرين شوت على واتساب.",
    tip: "واتساب التأكيد: +20 11 10008912",
    screen: "confirm-wallet",
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
