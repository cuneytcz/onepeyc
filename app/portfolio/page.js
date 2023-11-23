import Contact from "@/components/contact";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Portfolio from "@/components/portfolio";
import Section from "@/components/section";
import Tag from "@/components/tag";
import { PortfolioData } from "@/constants";
import React from "react";

export default function Page() {
  return (
    <>
      <Heading
        subtitle="Benzersiz Projeler ve Elde Edilen Başarılar"
        title=" İnceleyin, İlham Alın, Geleceği Keşfedin"
      />
      <Section>
        <Container>
          <Portfolio data={PortfolioData} />
        </Container>
      </Section>
      <Section>
        <Container>
          <Tag title="İletişim" />
          <Contact />
        </Container>
      </Section>
    </>
  );
}
