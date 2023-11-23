import Banner from "@/components/banner";
import Clients from "@/components/clients";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Section from "@/components/section";
import Services from "@/components/services";
import Tag from "@/components/tag";
import { CliensData, ServicesData } from "@/constants";
import React from "react";

export default function Page() {
  return (
    <>
      <Heading
        subtitle="Güvenilir, Yaratıcı ve Özelleştirilmiş Çözümler"
        title="Teknolojik Çözümlerle Geleceği Şekillendiriyoruz"
      />
      <Section>
        <Container>
          <Banner
            title="Marketi Daha İyiye Taşıyacak Projeler İnşa Ediyoruz"
            description="Vizyonumuz, piyasanın dinamiklerini olumlu yönde değiştirmek üzere tasarlanmış projeleri hayata geçirmek. Yaratıcı çözümlerimiz ve sıradışı yaklaşımımızla, müşterilerimize değer katmayı hedefliyor ve sektörü daha ileriye taşımak için el birliğiyle çalışıyoruz."
            href="about/page"
            src="h-img-3.jpg"
            reverse={true}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <Tag title="Hizmetlerimiz" />
          <Services data={ServicesData} />
        </Container>
      </Section>
      <Section>
        <Container>
          <Tag title="Müşterilerimi" />
          <Clients data={CliensData} />
        </Container>
      </Section>
    </>
  );
}
