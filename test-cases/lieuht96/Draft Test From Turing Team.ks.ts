import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com/");
  await web.click({
    type: "Web",
    id: "1cdde081-31c3-4a86-896b-8d5daaa9fef9",
    attributes: {
      id: "btn-make-appointment",
      href: "./profile.php#login",
      class: "btn btn-dark btn-lg",
    },
    childIndex: 4,
    hashes: { "md5.v1": "3caec008087ccb7a1cb3fc698fbf83c2" },
    name: "a - Make Appointment",
    selectors: [
      {
        id: "e6efda6e-d3ca-4fea-8fb5-71d2634ab982",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "566fbd77-a383-4991-a13f-8c77e39c2e4a",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "81d42cb7-4fa4-402b-9da7-c954f421f127",
    attributes: {
      type: "text",
      class: "form-control",
      id: "txt-username",
      name: "username",
      placeholder: "Username",
      value: "",
      autocomplete: "off",
    },
    childIndex: 1,
    hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
    name: "input - Username",
    selectors: [
      {
        id: "108ffccd-ffeb-4749-907a-87422a6e0d60",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "9f57fc64-af23-4bc7-9510-4e433ff9dd5b",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setText(
    {
      type: "Web",
      id: "81d42cb7-4fa4-402b-9da7-c954f421f127",
      attributes: {
        type: "text",
        class: "form-control",
        id: "txt-username",
        name: "username",
        placeholder: "Username",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
      name: "input - Username",
      selectors: [
        {
          id: "108ffccd-ffeb-4749-907a-87422a6e0d60",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "9f57fc64-af23-4bc7-9510-4e433ff9dd5b",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "John Doe"
  );
  await web.setEncryptedText(
    {
      type: "Web",
      id: "0712907a-0f8e-476e-aa1d-1f58cb18219a",
      attributes: {
        type: "password",
        class: "form-control",
        id: "txt-password",
        name: "password",
        placeholder: "Password",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
      name: "input - Password",
      selectors: [
        {
          id: "e39aac67-4073-4225-901c-27720047ad7a",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "55b2662e-706e-4951-83fd-2cedc9c70bac",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "0d3058f31fbd2c176dfb8ac2f0a17af7-U2FsdGVkX1/yXqXkkUofslIUBcuZrgglcV7Yaa8bvyKjnmLj9kZeolRWr8GmVMgs"
  );
  await web.click({
    type: "Web",
    id: "f57c5e7b-31db-4334-8f8e-3ba312d376a7",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "8e64654e-4df9-4826-b578-d10f17ef32b8",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "0424379d-09c6-45a3-a91a-a98c8146216e",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Login",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});