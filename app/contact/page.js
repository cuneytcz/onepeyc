import Container from "@/components/container";
import Heading from "@/components/heading";
import Input from "@/components/input";
import Section from "@/components/section";
import { Send } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <>
      <Heading
        subtitle="Bize Ulaşın"
        title="İş Birliği Teklifleriniz İçin Bizimle İletişime Geçin"
      />
      <Section>
        <Container>
          <div className="grid xl:grid-cols-12 gap-12">
            <div className="col-span-full xl:col-span-7">
              <form className="flex flex-col gap-12">
                <Input label="Ad Soyad *" />
                <Input label="E-posta *" />
                <Input label="Bize bir şeyler yazın *" />
                <button
                  type="submit"
                  className="w-fit flex justify-center items-center gap-1.5 relative group overflow-hidden">
                  <span className="text-black font-outfit -mt-0.5">Gönder</span>
                </button>
              </form>
            </div>
            <div className="col-span-full xl:col-span-5">
              <div className="flex flex-col gap-12 xl:pl-12">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl xl:text-2xl mb-3">Merhaba:</h3>
                  <a
                    href="mailto:info@onepeyc.com"
                    className="text-base xl:text-lg text-black/60 hover:text-black font-outfit transition-colors">
                    info@onepeyc.com
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl xl:text-2xl mb-3">İzmir Ofis</h3>
                  <a
                    href="https://www.google.com/maps/place/330+W+30th+St,+New+York,+NY+10001,+USA/@40.7501123,-73.9994699,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x89c259bb65ffb4b7:0xfb6f9cef91401b93!2sEvents+Coverage+and+Photography!8m2!3d40.74309!4d-73.9966117!16s%2Fg%2F11gv0rqfs5!3m5!1s0x89c259b1b1b7c207:0xf59f433cb3517899!8m2!3d40.7501083!4d-73.996895!16s%2Fg%2F11b8vfzz21?entry=ttu"
                    target="_blank"
                    className="text-base xl:text-lg text-black/60 hover:text-black font-outfit transition-colors">
                    1029 Sokak No 23 Berkay APT. <br /> Bornova / İzmir
                  </a>
                  <a
                    href="mailto:info@onepeyc.com"
                    className="text-base xl:text-lg text-black/60 hover:text-black font-outfit transition-colors">
                    info@onepeyc.com
                  </a>
                  <a
                    href="tel:+90 0 ( 531 ) 747 65 04"
                    className="text-base xl:text-lg text-black/60 hover:text-black font-outfit transition-colors">
                    +90 0 ( 531 ) 747 65 04
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
