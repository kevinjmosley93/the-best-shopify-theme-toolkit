import React from "react";
import { ReactLiquid } from "react-liquid";

const Test = () => {
  const template = `
{% render 'test' %}

{% schema %}
{
  "name": "Test",
  "class": "section-test",
  "settings": [
    {
      "type": "text",
      "id": "test",
      "default": "This is testinnggggg",
      "label": "test name"
    }
  ],
  "presets": [
    {
      "name": "Testinggggggg"
    }
  ]
}
{% endschema %}
`;

  const data = {
   "section.settings.test": "test",
  };
  return <ReactLiquid template={template} data={data} html />;
};

export default Test;
