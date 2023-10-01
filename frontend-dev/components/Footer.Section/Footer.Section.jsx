import React from "react";
import { ReactLiquid } from "react-liquid";

const Footer = () => {
  const template = `
<footer id="footer" class="footer">
  <h1>{{ section.settings.footer_name }}</h1>
</footer>

{% schema %}
  {
    "name": "Foooooooterrrrr",
    "settings": [
      {
        "type": "text",
        "id": "footer_name",
        "default": "This is footer",
        "label": "footer name"
      }
    ],
    "presets": [
      {
        "name": "Foooooooterrrrr"
      }
    ]
  }
{% endschema %}`;

  const data = {
    footer_name: "footer",
  };
  return <ReactLiquid template={template} data={data} html />;
};

export default Footer;
