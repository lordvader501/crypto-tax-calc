import GetStartedCard from "@/components/item/GetStartedCard";
import { Container } from "@/components/layout/Container";
import CryptoTaxCalcSection from "@/components/sections/CryptoTaxCalcSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <Container className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-x-8 gap-y-5">
      <div>
        <CryptoTaxCalcSection />
        <FaqSection />
      </div>
      <GetStartedCard />
    </Container>
  );
}
