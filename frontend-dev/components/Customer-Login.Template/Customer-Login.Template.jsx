import React from "react";
import { ReactLiquid } from "react-liquid";

const Header = () => {
  const template = `
  <div id="login-form">
  <h1>Sign in to your account</h1>
  {% form 'customer_login' %}
    {% if form.errors %}
      {{ form.errors | default_errors }}
    {% endif %}
    <label for="email_address">Email</label>
    <input type="email" name="customer[email]" id="email_address" autocomplete="email" placeholder="Email">
    {% if form.password_needed %}
      <label for="password">Password</label>
      <input type="password" name="customer[password]" id="password" autocomplete="current-password" placeholder="Password">
    {% endif %}
    <button type="submit">Sign in</button>
    <a href="javascript:void(0)" onclick="toggleRecoverPasswordForm()">Forgot your password?</a>
    <a style="text-decoration: underline" href="/account/register">Don't have an account? Create one</a>
  {% endform %}
</div>

<div id="recover-password-form" style="display: none;">
  <h2>Recover your password</h2>
  {% form 'recover_customer_password' %}
  {{ form.errors | default_errors }}
  <label for="customer_email">Email</label>
  <input type="email" name="email" id="customer_email" autocomplete="email" placeholder="Email address">
  <button type="submit">Recover password</button>
  <a href="javascript:void(0)" onclick="toggleRecoverPasswordForm()">Back to login</a>
  {% endform %}
</div>

<script>
  function toggleRecoverPasswordForm() {
    const loginForm = document.getElementById("login-form");
    const recoverForm = document.getElementById("recover-password-form");
    if (recoverForm.style.display === "none") {
      recoverForm.style.display = "block";
      loginForm.style.display = "none";
    } else {
      recoverForm.style.display = "none";
      loginForm.style.display = "block";
    }
  }
</script>
          
  
  {% schema %}
  {
    "name": "Customer Login",
    "settings": [
      {
        "type": "text",
        "id": "menu",
        "default": "Customer Login",
        "label": "Customer Login"
      }
    ]
  }
  {% endschema %}`;

  const data = { header_name: "This is the customer login" };
  return <ReactLiquid template={template} data={data} html />;
};

export default Header;
