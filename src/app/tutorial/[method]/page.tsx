import { notFound } from "next/navigation";
import { TutorialPlayer } from "@/components/TutorialPlayer";
import type { PaymentMethodId } from "@/data/accounts";

const VALID_METHODS: PaymentMethodId[] = [
  "banque-misr",
  "cib",
  "vodafone-cash",
];

type TutorialPageProps = {
  params: Promise<{ method: string }>;
};

export function generateStaticParams() {
  return VALID_METHODS.map((method) => ({ method }));
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { method } = await params;

  if (!VALID_METHODS.includes(method as PaymentMethodId)) {
    notFound();
  }

  return <TutorialPlayer method={method as PaymentMethodId} />;
}
