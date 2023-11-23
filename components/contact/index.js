import React from "react";
import Icon from "../icon";
import { Monitor, PenLine } from "lucide-react";
import TextLink from "../textlink";

export default function Contact() {
  return (
    <div className="grid xl:grid-cols-2 gap-12">
      <div className="bg-white p-4 md:p-10">
        <div className="flex gap-6">
          <div>
            <Icon as={Monitor} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-black/60 font-outfit uppercase tracking-wider mb-3">
              Proje yönetimi
            </span>
            <h3 className="text-xl xl:text-2xl mb-24">Bir projeye başlayın</h3>
            <TextLink
              href=""
              title="Hemen Teklif Al"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 md:p-10">
        <div className="flex gap-6">
          <div>
            <Icon as={PenLine} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-black/60 font-outfit uppercase tracking-wider mb-3">
              Merhaba !
            </span>
            <h3 className="text-xl xl:text-2xl mb-24">
              Bizimle iletişime geçin
            </h3>
            <TextLink
              href=""
              title="Bize E-posta Gönder"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
