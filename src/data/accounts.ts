export type PaymentMethodId = "banque-misr" | "cib" | "vodafone-cash";

export type AccountField = {
  label: string;
  value: string;
  copyLabel: string;
};

export type PaymentAccount = {
  id: PaymentMethodId;
  title: string;
  bankName: string;
  shortName: string;
  description: string;
  accent: string;
  fields: AccountField[];
  beneficiary: string;
};

export const BENEFICIARY = "شركة الوسام";

export const PAYMENT_ACCOUNTS: PaymentAccount[] = [
  {
    id: "banque-misr",
    title: "التحويل على حساب بنك مصر",
    bankName: "بنك مصر",
    shortName: "بنك مصر",
    description: "حوّل مباشرة لحساب شركة الوسام في بنك مصر عبر إنستاباي",
    accent: "#1e4d8c",
    beneficiary: BENEFICIARY,
    fields: [
      {
        label: "رقم الحساب",
        value: "7230001000001030",
        copyLabel: "نسخ رقم الحساب",
      },
      {
        label: "IBAN",
        value: "EG530002072307230001000001030",
        copyLabel: "نسخ رقم الـ IBAN",
      },
    ],
  },
  {
    id: "cib",
    title: "التحويل على البنك التجاري الدولي CIB",
    bankName: "البنك التجاري الدولي",
    shortName: "CIB",
    description: "حوّل لحساب شركة الوسام في CIB عبر إنستاباي",
    accent: "#0b3d5c",
    beneficiary: BENEFICIARY,
    fields: [
      {
        label: "رقم الحساب",
        value: "100042185447",
        copyLabel: "نسخ رقم الحساب",
      },
      {
        label: "IBAN",
        value: "EG030010008300000100042185447",
        copyLabel: "نسخ رقم الـ IBAN",
      },
    ],
  },
  {
    id: "vodafone-cash",
    title: "التحويل عن طريق محفظة فودافون كاش",
    bankName: "فودافون كاش",
    shortName: "فودافون كاش",
    description: "حوّل لمحفظة فودافون كاش الخاصة بشركة الوسام",
    accent: "#e60000",
    beneficiary: BENEFICIARY,
    fields: [
      {
        label: "رقم المحفظة",
        value: "01019992224",
        copyLabel: "نسخ رقم المحفظة",
      },
    ],
  },
];

export function getAccountById(id: PaymentMethodId): PaymentAccount {
  const account = PAYMENT_ACCOUNTS.find((item) => item.id === id);
  if (!account) {
    throw new Error(`Unknown payment method: ${id}`);
  }
  return account;
}
