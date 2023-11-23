import React from "react";
import Section from "../section";
import Container from "../container";

export default function Heading({ subtitle, title }) {
  return (
    <Section>
      <Container>
        <div className="max-w-5xl w-full flex flex-col gap-3">
          {subtitle && (
            <h6 className="text-sm text-black/60 font-outfit uppercase tracking-wider mb-3">
              {subtitle}
            </h6>
          )}
          <h1 className="text-4xl xl:text-5xl tracking-wider !leading-tight">
            {title}
          </h1>
        </div>
      </Container>
    </Section>
  );
}
