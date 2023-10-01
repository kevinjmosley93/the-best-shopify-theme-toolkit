import React from "react";
import { ReactLiquid } from "react-liquid";

const Header = () => {
  const template = `
  {% liquid 
    if section.settings.menu.links == blank
      assign main_menu_linklist = linklists[section.settings.menu].links
    else
      assign main_menu_linklist = section.settings.menu.links
    endif
  %}
  
  <header id="header" class="header">
    <nav role="navigation">
      {% for link in main_menu_linklist %}
        {% if link.links != blank %}
          {% assign link_handle = link.handle | replace: '-', '_' %}
          {% for childlink in link.links %}
            <a href="{{ childlink.url }}">{{ childlink.title }}</a>
          {% endfor %}     
        {% else %}
          <a href="{{ link.url }}">{{ link.title }}</a>
        {% endif %}
      {% endfor %}
      <form action="{{ routes.search_url }}" method="get">
        <input type="search" name="q" placeholder="Search">
        <button type="submit">Search</button>
      </form>
    </nav>     
  </header>
          
  
  {% schema %}
  {
    "name": "Header",
    "settings": [
      {
        "type": "link_list",
        "id": "menu",
        "default": "main-menu",
        "label": "Headingggg Navigation Menu"
      }
    ]
  }
  {% endschema %}`;

  const data = { header_name: "This is the header" };
  return <ReactLiquid template={template} data={data} html />;
};

export default Header;
