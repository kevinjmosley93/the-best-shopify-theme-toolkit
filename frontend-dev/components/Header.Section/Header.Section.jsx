import React from "react";
import { ReactLiquid } from "react-liquid";

const Header = () => {
  const template = `
<header class="main-header">
  <h1>Hello world</h1>
</header>  


{% schema %}
{
  "name": "Header",
  "class": "main-header",
  "settings": [
    {
      "type": "text",
      "id": "header_name",
      "default": "This is header",
      "label": "header name"
    }
  ],
  "presets": [
    {
      "name": "HEader"
    }
  ]
}
{% endschema %}`;

  const data = { header_name: "This is the header" };
  return <ReactLiquid template={template} data={data} html />;
};

export default Header;
