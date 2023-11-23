import Banner from "@/components/banner";
import Container from "@/components/container";
import Figure from "@/components/figure";
import Heading from "@/components/heading";
import Section from "@/components/section";
import { TeamData } from "@/constants";
import React from "react";

export default function Page() {
  return (
    <>
      <Heading
        subtitle="Başarı, yaratıcılığın sınırlarını zorlamakla başlar."
        title="Ana hedefimiz yaratıcılıktır."
      />
      <Section>
        <Container>
          <div className="grid  md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-12">
            <Figure data={TeamData} />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Banner
            title="Inovasyon ve Teknoloji Harmanında OnePeyc: Geleceği Şekillendiren Yazılım Çözümleri"
            description="OnePeyc olarak, yazılım dünyasında bir adım öne çıkmak, sıra dışı çözümler sunmak ve müşterilerimizin dijital dönüşüm yolculuklarını daha etkileyici ve verimli hale getirmek için buradayız. Teknolojiyi anlamak, onunla dans etmek ve her projemizde inovasyona liderlik etmek, varoluş nedenimizi oluşturuyor."
            href="about/page"
            src="/h-img-3.jpg"
            reverse={true}
          />
        </Container>
      </Section>
    </>
  );
}
