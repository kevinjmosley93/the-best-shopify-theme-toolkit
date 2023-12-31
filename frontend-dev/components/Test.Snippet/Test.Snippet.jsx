import React from "react";
import { ReactLiquid } from "react-liquid";

const Test = () => {
  const template = `
{%- for collection in collections -%}
  {%- if collection.title == 'home' -%}
    {{ section.settings.test | capitalize }}
    <h1 class="test-snippet">{{ collection.products.length }} products in the {{ collection.title }} collection</h1>
  {%- endif -%}
{%- endfor -%}`

  const data = {
   "section.settings.test": "testtt",
  };
  return <ReactLiquid template={template} data={data} html />;
};

export default Test;
