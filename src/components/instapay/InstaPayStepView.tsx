"use client";

import type { PaymentAccount } from "@/data/accounts";
import { ConfirmScreen } from "./ConfirmScreen";
import { HomeScreen } from "./HomeScreen";
import { SendMoneyScreen, type SendMoneyMode } from "./SendMoneyScreen";
import { SuccessScreen } from "./SuccessScreen";

export type ScreenId =
  | "home"
  | "bank-form"
  | "confirm"
  | "select-wallet"
  | "confirm-wallet"
  | "success";

type InstaPayStepViewProps = {
  screen: ScreenId;
  account: PaymentAccount;
  onContinue: () => void;
};

export function InstaPayStepView({
  screen,
  account,
  onContinue,
}: InstaPayStepViewProps) {
  if (screen === "home") {
    return <HomeScreen highlightSend onSendMoney={onContinue} />;
  }

  if (screen === "confirm" || screen === "confirm-wallet") {
    return (
      <ConfirmScreen
        account={account}
        highlightConfirm
        onConfirm={onContinue}
      />
    );
  }

  if (screen === "success") {
    return <SuccessScreen account={account} onFinish={onContinue} />;
  }

  const mode = screen as SendMoneyMode;
  return (
    <SendMoneyScreen mode={mode} account={account} onContinue={onContinue} />
  );
}
