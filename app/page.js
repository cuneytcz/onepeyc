import Banner from "@/components/banner";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Portfolio from "@/components/portfolio";
import Section from "@/components/section";
import Services from "@/components/services";
import Tag from "@/components/tag";
import { CliensData, PortfolioData, ServicesData } from "@/constants";
import React from "react";

export default function Page() {
  return (
    <>
      <Heading
        subtitle="Harika fikirleri hayata geçiriyoruz."
        title="Yazılımın Gücüyle Geleceği Şekillendiriyoruz. Yaratıcı Çözümler, Mükemmel Deneyim."
      />
      <Section>
        <Container>
          <Tag title="Hizmetlerimiz" />
          <Services data={ServicesData} />
        </Container>
      </Section>
      <Section>
        <Container>
          <Tag title="Portfolyo" />
          <Portfolio data={PortfolioData} />
        </Container>
      </Section>
      <Section>
        <Container>
          <Banner
            title="İşletmeleri Strateji, Tasarım ve Geliştirme ile İnşa Ediyor ve Dönüştürüyoruz"
            description="Biz, işletmelerinizi strateji, tasarım ve geliştirme ile güçlendirerek dönüştüren bir ekibiz. Her adımımızda, özgün bir vizyonu hayata geçirmek ve işletmenizi çığır açan bir başarıya taşımak için çabalıyoruz. Stratejik yaklaşımlarımız, etkileyici tasarımlarımız ve güçlü geliştirme süreçlerimizle, işletmenizi modern iş dünyasında öne çıkaracak çözümler sunuyoruz. Müşteri odaklı yaklaşımımız ve sektöre özgü çözümlerimizle, işletmenizin potansiyelini maksimuma çıkarıyor ve sürdürülebilir bir başarıya yönlendiriyoruz."
            src="/h-img-3.jpg"
            href=""
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <Tag title="Müşterilerimiz" />
          <Clients data={CliensData} />
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
