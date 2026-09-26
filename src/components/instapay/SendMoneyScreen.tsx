"use client";

import { useEffect, useState } from "react";
import type { PaymentAccount } from "@/data/accounts";
import { BottomNav } from "./BottomNav";
import { PhoneFrame } from "./PhoneFrame";
import { IconAt, IconBank, IconCard, IconClipboard, IconPhone, IconWallet } from "./icons";
import { StepField, getBankFormStep, getWalletFormStep } from "./StepField";
import { PrimaryButton, Field, CibLogo } from "./ui";
import { IP, type TransferMethod } from "./tokens";

export type SendMoneyMode = "bank-form" | "select-wallet";

type SendMoneyScreenProps = {
  mode: SendMoneyMode;
  account: PaymentAccount;
  onContinue: () => void;
};

const METHODS: { id: TransferMethod; label: string; Icon: typeof IconBank }[] = [
  { id: "wallet", label: "محفظة", Icon: IconWallet },
  { id: "card", label: "بطاقة", Icon: IconCard },
  { id: "bank", label: "بنك", Icon: IconBank },
  { id: "ipa", label: "عنوان", Icon: IconAt },
  { id: "mobile", label: "موبايل", Icon: IconPhone },
];

export function SendMoneyScreen({
  mode,
  account,
  onContinue,
}: SendMoneyScreenProps) {
  const isWallet = mode === "select-wallet";
  const defaultMethod: TransferMethod = isWallet ? "wallet" : "bank";

  const [method, setMethod] = useState<TransferMethod>(defaultMethod);
  // const [idMode, setIdMode] = useState<"account" | "iban">("account");
  const idMode = "account" as const;
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [notes, setNotes] = useState("");
  const [showPurpose, setShowPurpose] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setMethod(isWallet ? "wallet" : "bank");

    if (mode === "bank-form") {
      setBankName("");
      setAccountNumber("");
      setBeneficiary("");
      setAmount("");
      setPurpose("نفقات المعيشة");
      setNotes("");
      setShowPurpose(true);
    }

    if (mode === "select-wallet") {
      setPhone("");
      setAmount("");
      setPurpose("");
    }
  }, [mode, account, isWallet]);

  async function pasteAccount() {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setAccountNumber(text.replace(/\s/g, ""));
        return;
      }
    } catch {
      /* fallback below */
    }
    setAccountNumber(account.fields[0]?.value ?? "");
  }

  async function pastePhone() {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setPhone(text.replace(/\s/g, ""));
        return;
      }
    } catch {
      /* fallback */
    }
    setPhone(account.fields[0]?.value ?? "");
  }

  const highlightNotes = true;
  const highlightNext = true;

  function handleMethodClick(id: TransferMethod) {
    setMethod(id);
  }

  function handleNext() {
    if (!isWallet) {
      if (!bankName || !accountNumber || !beneficiary || !amount) return;
      if (!showPurpose) {
        setShowPurpose(true);
        return;
      }
      if (!purpose) {
        setPurpose("نفقات المعيشة");
        return;
      }
      if (notes.replace(/\D/g, "").length < 10) return;
    } else {
      if (!phone || !amount || !purpose) return;
    }
    onContinue();
  }

  return (
    <PhoneFrame>
      <div className="flex min-h-[38rem] flex-col bg-[#F4F2F7]">
        <header
          className="relative px-4 pb-10 pt-3 text-white"
          style={{
            background: `linear-gradient(120deg, ${IP.orangeSoft} 0%, ${IP.purple} 55%, ${IP.purpleDeep} 100%)`,
          }}
        >
          <h1 className="text-end text-xl font-bold">إرسال نقود</h1>
        </header>

        <div className="-mt-6 space-y-3 px-3 pb-3">
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            <p className="mb-1 text-xs" style={{ color: IP.muted }}>
              من
            </p>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#b0a8bc]">▼</span>
              <div className="flex flex-1 items-center justify-end gap-2">
                <div className="text-end">
                  <p className="text-sm font-semibold" dir="ltr">
                    ahmedesmail34180@instapay
                  </p>
                  <p className="text-xs" style={{ color: IP.muted }}>
                    ACCOUNT •••3838
                  </p>
                </div>
                <CibLogo />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <button
                type="button"
                className="flex items-center gap-1 text-xs font-semibold"
                style={{ color: IP.orange }}
              >
                <span>★</span> المفضلين
              </button>
              <h2 className="text-sm font-bold" style={{ color: IP.text }}>
                إرسال النقود إلى
              </h2>
            </div>

            <div className="mb-3 flex items-center justify-between gap-1">
              {METHODS.map((item) => {
                const active = method === item.id;
                const pulse =
                  (!isWallet && item.id === "bank" && method !== "bank") ||
                  (isWallet && item.id === "wallet" && method !== "wallet");
                const Icon = item.Icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleMethodClick(item.id)}
                    className="relative flex flex-col items-center gap-1"
                    aria-label={item.label}
                  >
                    {pulse ? (
                      <span
                        className="pointer-events-none absolute -inset-1 animate-ping rounded-full opacity-40"
                        style={{ background: IP.orange }}
                      />
                    ) : null}
                    <span
                      className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full ${
                        active ? "text-white" : "bg-[#f3eef8] text-[#6b6280]"
                      }`}
                      style={active ? { background: IP.purple } : undefined}
                    >
                      <Icon />
                    </span>
                    {active ? (
                      <span
                        className="mt-1 h-1 w-8 rounded-full"
                        style={{ background: IP.purple }}
                      />
                    ) : (
                      <span className="mt-1 h-1 w-8" />
                    )}
                  </button>
                );
              })}
            </div>

            {method === "bank" ? (
              <BankForm
                idMode={idMode}
                // onIdMode={setIdMode}
                bankName={bankName}
                setBankName={setBankName}
                accountNumber={accountNumber}
                setAccountNumber={setAccountNumber}
                beneficiary={beneficiary}
                setBeneficiary={setBeneficiary}
                amount={amount}
                setAmount={setAmount}
                purpose={purpose}
                setPurpose={setPurpose}
                notes={notes}
                setNotes={setNotes}
                showPurpose={showPurpose}
                highlightNotes={highlightNotes}
                onPaste={pasteAccount}
                suggestedBank={account.bankName}
                suggestedAccount={account.fields[0]?.value ?? ""}
                suggestedName={account.beneficiary}
              />
            ) : null}

            {method === "wallet" ? (
              <WalletForm
                phone={phone}
                setPhone={setPhone}
                amount={amount}
                setAmount={setAmount}
                purpose={purpose}
                setPurpose={setPurpose}
                onPaste={pastePhone}
                suggestedPhone={account.fields[0]?.value ?? ""}
              />
            ) : null}

            {method !== "bank" && method !== "wallet" ? (
              <p className="py-6 text-center text-sm" style={{ color: IP.muted }}>
                اختر طريقة التحويل المناسبة للشرح
              </p>
            ) : null}
          </div>

          {method === "bank" && !showPurpose ? (
            <button
              type="button"
              onClick={() => setShowPurpose(true)}
              className="text-sm font-semibold animate-pulse"
              style={{ color: IP.orange }}
            >
              + أضف غرض التحويل
            </button>
          ) : null}

          <PrimaryButton highlight={highlightNext} onClick={handleNext}>
            التالي
          </PrimaryButton>
        </div>

        <div className="mt-auto">
          <BottomNav active="send" />
        </div>
      </div>
    </PhoneFrame>
  );
}

type BankFormProps = {
  idMode: "account" | "iban";
  bankName: string;
  setBankName: (v: string) => void;
  accountNumber: string;
  setAccountNumber: (v: string) => void;
  beneficiary: string;
  setBeneficiary: (v: string) => void;
  amount: string;
  setAmount: (v: string) => void;
  purpose: string;
  setPurpose: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
  showPurpose: boolean;
  highlightNotes: boolean;
  onPaste: () => void;
  suggestedBank: string;
  suggestedAccount: string;
  suggestedName: string;
};

function BankForm(props: BankFormProps) {
  const {
    bankName,
    setBankName,
    accountNumber,
    setAccountNumber,
    beneficiary,
    setBeneficiary,
    amount,
    setAmount,
    purpose,
    setPurpose,
    notes,
    setNotes,
    showPurpose,
    onPaste,
    suggestedBank,
    suggestedAccount,
    suggestedName,
  } = props;

  const current = getBankFormStep({
    bankName,
    accountNumber,
    beneficiary,
    amount,
    notes,
  });

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold" style={{ color: IP.muted }}>
          املأ الحقول بالترتيب ١ ← ٥
        </p>
        <h3 className="text-sm font-bold" style={{ color: IP.purple }}>
          حساب البنك
        </h3>
      </div>
      <div className="flex gap-4 border-b border-[#eee8f5] text-sm">
        <button
          type="button"
          className="pb-2 font-bold"
          style={{
            color: IP.orange,
            borderBottom: `3px solid ${IP.orange}`,
          }}
        >
          رقم الحساب
        </button>
      </div>

      <StepField
        step={1}
        label="اختر اسم البنك"
        active={current === 1}
        done={Boolean(bankName)}
        locked={false}
      >
        <select
          className="w-full bg-transparent text-sm outline-none disabled:opacity-50"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          disabled={current < 1}
        >
          <option value="">اختر اسم البنك</option>
          <option value="بنك مصر">بنك مصر</option>
          <option value="البنك التجاري الدولي">البنك التجاري الدولي</option>
          <option value="البنك الأهلي المصري">البنك الأهلي المصري</option>
        </select>
        {!bankName ? (
          <button
            type="button"
            onClick={() => setBankName(suggestedBank)}
            className="shrink-0 text-[10px] font-bold"
            style={{ color: IP.orange }}
          >
            تعبئة
          </button>
        ) : null}
      </StepField>

      <StepField
        step={2}
        label="رقم الحساب"
        active={current === 2}
        done={Boolean(accountNumber)}
        locked={current < 2}
      >
        <button
          type="button"
          onClick={onPaste}
          className="shrink-0 text-[#7a6f8c]"
          aria-label="لصق"
          disabled={current < 2}
        >
          <IconClipboard />
        </button>
        <input
          className="w-full bg-transparent text-sm outline-none"
          placeholder="رقم الحساب"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          dir="ltr"
          disabled={current < 2}
        />
        {!accountNumber && current >= 2 ? (
          <button
            type="button"
            onClick={() => setAccountNumber(suggestedAccount)}
            className="shrink-0 text-[10px] font-bold"
            style={{ color: IP.orange }}
          >
            تعبئة
          </button>
        ) : null}
      </StepField>

      <StepField
        step={3}
        label="اسم المستفيد"
        active={current === 3}
        done={Boolean(beneficiary)}
        locked={current < 3}
      >
        <input
          className="w-full bg-transparent text-sm outline-none"
          placeholder="اسم المستفيد"
          value={beneficiary}
          onChange={(e) => setBeneficiary(e.target.value)}
          disabled={current < 3}
        />
        {!beneficiary && current >= 3 ? (
          <button
            type="button"
            onClick={() => setBeneficiary(suggestedName)}
            className="shrink-0 text-[10px] font-bold"
            style={{ color: IP.orange }}
          >
            تعبئة
          </button>
        ) : null}
      </StepField>

      <StepField
        step={4}
        label="المبلغ"
        active={current === 4}
        done={Boolean(amount)}
        locked={current < 4}
      >
        <span className="text-xs font-bold text-[#7a6f8c]">EGP</span>
        <span className="mx-1 h-5 w-px bg-[#e5e1eb]" />
        <input
          className="w-full bg-transparent text-sm outline-none"
          placeholder="المبلغ"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^\d]/g, ""))}
          inputMode="numeric"
          dir="ltr"
          disabled={current < 4}
        />
      </StepField>

      {current >= 5 ? (
        <div className="mt-2 space-y-2.5 rounded-xl border border-[#eee8f5] p-2">
          <Field>
            <select
              className="w-full bg-transparent text-sm outline-none"
              value={purpose || "نفقات المعيشة"}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option value="نفقات المعيشة">نفقات المعيشة</option>
              <option value="دفع فواتير">دفع فواتير</option>
              <option value="أخرى">أخرى</option>
            </select>
          </Field>

          <StepField
            step={5}
            label="أدخل رقم موبايلك في الملاحظات"
            active={current === 5}
            done={notes.replace(/\D/g, "").length >= 10}
            locked={current < 5}
          >
            <input
              className="w-full bg-transparent text-sm outline-none"
              placeholder="01xxxxxxxxx"
              value={notes}
              onChange={(e) => setNotes(e.target.value.replace(/[^\d]/g, ""))}
              inputMode="tel"
              dir="ltr"
              aria-label="رقم الموبايل في الملاحظات"
            />
          </StepField>
          {current === 5 ? (
            <p className="text-[11px]" style={{ color: IP.orange }}>
              مطلوب: اكتب رقم هاتفك للتواصل وتأكيد التحويل
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

type WalletFormProps = {
  phone: string;
  setPhone: (v: string) => void;
  amount: string;
  setAmount: (v: string) => void;
  purpose: string;
  setPurpose: (v: string) => void;
  onPaste: () => void;
  suggestedPhone: string;
};

function WalletForm({
  phone,
  setPhone,
  amount,
  setAmount,
  purpose,
  setPurpose,
  onPaste,
  suggestedPhone,
}: WalletFormProps) {
  const current = getWalletFormStep({ phone, amount, purpose });

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold" style={{ color: IP.muted }}>
          املأ الحقول بالترتيب ١ ← ٣
        </p>
        <h3 className="text-sm font-bold" style={{ color: IP.purple }}>
          رقم المحفظة
        </h3>
      </div>

      <StepField
        step={1}
        label="رقم محفظة شركة الوسام"
        active={current === 1}
        done={Boolean(phone)}
        locked={false}
      >
        <button
          type="button"
          onClick={onPaste}
          className="text-[#7a6f8c]"
          aria-label="لصق"
        >
          <IconClipboard />
        </button>
        <input
          className="w-full bg-transparent text-sm outline-none"
          placeholder="رقم الهاتف"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          dir="ltr"
        />
        {!phone ? (
          <button
            type="button"
            onClick={() => setPhone(suggestedPhone)}
            className="shrink-0 text-[10px] font-bold"
            style={{ color: IP.orange }}
          >
            تعبئة
          </button>
        ) : null}
      </StepField>

      <StepField
        step={2}
        label="المبلغ"
        active={current === 2}
        done={Boolean(amount)}
        locked={current < 2}
      >
        <span className="text-xs font-bold text-[#7a6f8c]">EGP</span>
        <span className="mx-1 h-5 w-px bg-[#e5e1eb]" />
        <input
          className="w-full bg-transparent text-sm outline-none"
          placeholder="المبلغ"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^\d]/g, ""))}
          inputMode="numeric"
          dir="ltr"
          disabled={current < 2}
        />
      </StepField>

      <StepField
        step={3}
        label="غرض التحويل"
        active={current === 3}
        done={Boolean(purpose)}
        locked={current < 3}
      >
        <select
          className="w-full bg-transparent text-sm outline-none"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          disabled={current < 3}
        >
          <option value="">اختر الغرض</option>
          <option value="نفقات المعيشة">نفقات المعيشة</option>
          <option value="دفع فواتير">دفع فواتير</option>
          <option value="أخرى">أخرى</option>
        </select>
      </StepField>
    </div>
  );
}
