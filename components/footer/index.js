import React from "react";
import Container from "../container";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-woodsmoke-500">
      <section className="py-20">
        <Container>
          <div className="grid xl:grid-cols-4 gap-12">
            <div className="xl:col-span-2 flex flex-col">
              <div className="min-h-[60px]">
                <img
                  src="/logo_white.png"
                  alt=""
                  className="max-w-full h-auto object-cover"
                />
              </div>
              <p className="text-white/60 font-outfit">
                İşletmenizi strateji, tasarım ve geliştirme ile dönüştürüyoruz.
                İnovasyon ve müşteri odaklı yaklaşımımızla başarıya bir adım
                daha yaklaşın. Bizimle tanışın, geleceğinizi şekillendirin.
              </p>
              <ul className="flex items-center gap-6 mt-12">
                <li className="w-9 h-9 group cursor-pointer flex justify-center items-center rounded-sm border border-white hover:bg-white transition duration-300 ease-in-out">
                  <Facebook
                    strokeWidth={1.25}
                    className="text-white w-5 h-5 group-hover:text-black transition duration-150 ease-in-out"
                  />
                </li>
                <li className="w-9 h-9 group cursor-pointer flex justify-center items-center rounded-sm border border-white hover:bg-white transition duration-300 ease-in-out">
                  <Twitter
                    strokeWidth={1.25}
                    className="text-white w-5 h-5 group-hover:text-black transition duration-150 ease-in-out"
                  />
                </li>
                <li className="w-9 h-9 group cursor-pointer flex justify-center items-center rounded-sm border border-white hover:bg-white transition duration-300 ease-in-out">
                  <Linkedin
                    strokeWidth={1.25}
                    className="text-white w-5 h-5 group-hover:text-black transition duration-150 ease-in-out"
                  />
                </li>
                <li className="w-9 h-9 group cursor-pointer flex justify-center items-center rounded-sm border border-white hover:bg-white transition duration-300 ease-in-out">
                  <Github
                    strokeWidth={1.25}
                    className="text-white w-5 h-5 group-hover:text-black transition duration-150 ease-in-out"
                  />
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="min-h-[60px]">
                <h3 className="text-xl xl:text-2xl text-white">
                  İletişim Bilgileri
                </h3>
              </div>
              <ul className="flex flex-col gap-1.5">
                <li className="text-white/60 font-outfit">
                  1029 Sokak No 23 <br /> Berkay APT. Bornova / İzmir
                </li>
                <li className="text-white/60 font-outfit">09:00 - 16:00</li>
                <li className="text-white/60 font-outfit">info@onepeyc.com</li>
                <li className="text-white/60 font-outfit">
                  +90 0 ( 531 ) 747 65 04
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="min-h-[60px]">
                <h3 className="text-xl xl:text-2xl text-white">
                  Bizi Takip Edin
                </h3>
              </div>
              <ul className="grid grid-cols-3 gap-2 md:max-w-xs xl:max-w-none">
                <li className="aspect-square cursor-pointer">
                  <img
                    src="/h-port-img-1.jpg"
                    alt=""
                  />
                </li>
                <li className="aspect-square cursor-pointer">
                  <img
                    src="/h-port-img-2.jpg"
                    alt=""
                  />
                </li>
                <li className="aspect-square cursor-pointer">
                  <img
                    src="/h-port-img-3.jpg"
                    alt=""
                  />
                </li>
                <li className="aspect-square cursor-pointer">
                  <img
                    src="/h-port-img-4.jpg"
                    alt=""
                  />
                </li>
                <li className="aspect-square cursor-pointer">
                  <img
                    src="/h-port-img-1.jpg"
                    alt=""
                  />
                </li>
                <li className="aspect-square cursor-pointer">
                  <img
                    src="/h-port-img-2.jpg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-black">
        <Container>
          <div className="min-h-[70px] flex justify-center items-center text-center">
            <small className="text-sm font-light text-white font-outfit">
              © 2023 All Rights Reserved
            </small>
          </div>
        </Container>
      </section>
    </footer>
  );
}
