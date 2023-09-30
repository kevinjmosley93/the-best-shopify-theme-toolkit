import React from "react";
import { ReactLiquid } from "react-liquid";

const Hero = () => {
  const template = `
<section class="hero">
  <h1>{{ section.settings.hero_name }}</h1>
</section>

{% schema %}
  {
    "name": "hero",
    "settings": [
      {
        "type": "text",
        "id": "hero_name",
        "label": "Hero",
        "default": "Hero"
      }
    ],
    "presets": [
      {
        "name": "Herooooo"
      }
    ]
  }
{% endschema %}`;

  const data = {
    "section.settings.hero_name": "hero",
  };
  return <ReactLiquid template={template} data={data} html />;
};

export default Hero;
