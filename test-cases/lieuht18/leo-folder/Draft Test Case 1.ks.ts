import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "84bb6418-ab8f-4c39-a523-e33508f8845c",
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
        id: "78d55651-a80f-4b5a-baba-ffc984a57b32",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "2c52d2f3-a4f0-4bb1-9d3d-ffbbffe52be4",
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
    id: "390236a5-9807-430f-a7e1-d12fa328fd1f",
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
        id: "8c0c06d1-28ae-468a-bcf7-2c5cdd0d3eec",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "4ff0a13e-964b-4119-bf9a-94284ba1058a",
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
      id: "390236a5-9807-430f-a7e1-d12fa328fd1f",
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
          id: "8c0c06d1-28ae-468a-bcf7-2c5cdd0d3eec",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "4ff0a13e-964b-4119-bf9a-94284ba1058a",
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
      id: "d6b2e68a-6588-4882-abe5-b7179667fd10",
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
          id: "e75b933e-f4fe-46a7-93f0-76ce087cbe9a",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "c282345d-8eaa-48be-a41e-7cd04a37923b",
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
    "a5d9ef78366d6c941422e94631ae8b53-U2FsdGVkX1+aciT2TSX3I8m7LuMfEiyPqdvKxGm8jtcHIzdwJnRGkLxwLz24hMUq"
  );
  await web.click({
    type: "Web",
    id: "5ac6c299-820c-4fa6-9f88-cc204a7cadc3",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "8128d235-c19f-4dd8-b027-08cbbd801c01",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "43069ae7-0cb8-4453-955b-251cc1c2cbba",
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