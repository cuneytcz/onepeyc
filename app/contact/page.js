"use client";

import Container from "@/components/container";
import Heading from "@/components/heading";
import Input from "@/components/input";
import Section from "@/components/section";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Page() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = React.useState({});

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Adınızı giriniz"),
      email: Yup.string()
        .email("Geçerli bir e-posta adresi giriniz")
        .required("E-posta adresinizi giriniz"),
      message: Yup.string().required("Mesajınızı giriniz"),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();

      setFormData((prev) => ({ ...prev, ...values }));
      return values;
    },
  });

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
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-12">
                <Input
                  label="Ad Soyad *"
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={formik.touched.name && formik.errors.name}
                  feedback={formik.errors.name}
                />
                <Input
                  label="E-posta *"
                  type="text"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={formik.touched.email && formik.errors.email}
                  feedback={formik.errors.email}
                />
                <Input
                  label="Bize bir şeyler yazın *"
                  type="text"
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={formik.touched.message && formik.errors.message}
                  feedback={formik.errors.message}
                />
                <button
                  type="submit"
                  className="w-fit flex items-center px-9 py-3 bg-black">
                  <span className="text-white font-outfit -mt-0.5">Gönder</span>
                </button>
              </form>
            </div>
            <div className="col-span-full xl:col-span-5">
              <div className="flex flex-col gap-12 xl:pl-12">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl xl:text-2xl mb-3">Merhaba:</h3>
                  <a
                    href="mailto:info@onepeyc.com"
                    className="text-black/60 hover:text-black font-outfit transition-colors">
                    info@onepeyc.com
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl xl:text-2xl mb-3">İzmir Ofis</h3>
                  <a
                    href="https://www.google.com/maps/place/330+W+30th+St,+New+York,+NY+10001,+USA/@40.7501123,-73.9994699,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x89c259bb65ffb4b7:0xfb6f9cef91401b93!2sEvents+Coverage+and+Photography!8m2!3d40.74309!4d-73.9966117!16s%2Fg%2F11gv0rqfs5!3m5!1s0x89c259b1b1b7c207:0xf59f433cb3517899!8m2!3d40.7501083!4d-73.996895!16s%2Fg%2F11b8vfzz21?entry=ttu"
                    target="_blank"
                    className="text-black/60 hover:text-black font-outfit transition-colors">
                    1029 Sokak No 23 Berkay APT. <br /> Bornova / İzmir
                  </a>
                  <a
                    href="mailto:info@onepeyc.com"
                    className="text-black/60 hover:text-black font-outfit transition-colors">
                    info@onepeyc.com
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
