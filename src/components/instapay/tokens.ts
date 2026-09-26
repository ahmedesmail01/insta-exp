export const IP = {
  purple: "#6A0DAD",
  purpleDeep: "#4A0080",
  purpleSoft: "#8B2FBF",
  orange: "#F26522",
  orangeSoft: "#FF8A4C",
  grayBg: "#F4F2F7",
  grayBorder: "#E5E1EB",
  text: "#2A1B3D",
  muted: "#8B8198",
} as const;

export type TransferMethod =
  | "wallet"
  | "card"
  | "bank"
  | "ipa"
  | "mobile";

export type BankFormState = {
  bankName: string;
  accountNumber: string;
  beneficiary: string;
  amount: string;
  purpose: string;
  notes: string;
  showPurpose: boolean;
  // idMode: "account" | "iban";
};

export type WalletFormState = {
  phone: string;
  amount: string;
  purpose: string;
};
