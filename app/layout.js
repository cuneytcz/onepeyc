import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/style.css";

export const metadata = {
  title: "ONE - Web Tasarım Ajansı | Web Tasarım | Kurumsal Web Tasarım",
  description:
    "Web teknolojileri ve sahip olduğu bilgi birikimi ile müşterilerine özel Web tasarım, Web Yazılım ve Web Portal Tasarım çözümleri sunmaktadır.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-wild-sand-500">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
