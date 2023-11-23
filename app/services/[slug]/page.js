import Container from "@/components/container";
import Heading from "@/components/heading";
import Section from "@/components/section";
import Tag from "@/components/tag";
import { ServicesData } from "@/constants";
import React from "react";

export default function Page({ params }) {
  const slug = ServicesData.find((item) => item.url === params.slug);

  return (
    <>
      <Heading title={slug.title} />
      <Section>
        <Container></Container>
      </Section>
    </>
  );
}
