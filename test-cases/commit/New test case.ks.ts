import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "ecccfcb1-9c66-453c-886c-dd21f6a4db56",
    attributes: { class: "fa fa-bars" },
    childIndex: 1,
    hashes: { "md5.v1": "7404fc617199bc0378c5447931ad5838" },
    name: "i - fa fa-bars",
    selectors: [
      {
        id: "f623da0d-f53a-4dbe-a3f3-7e52ce8e46aa",
        type: "CSS",
        value: ".fa-bars",
        isDefault: true,
      },
      {
        id: "bc66af6c-f1f3-40ff-837f-370c3c0d9d46",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "i",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "a91ee131-8583-45cd-a542-ca97144bc618",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "17391d81-cf69-4e8d-88dd-a81c915c9705",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "b6d6fbca-9327-46d5-b3f8-875ac6cf8c04",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Home",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "1e9dd4ef-a448-4b14-babd-65240aa826d6",
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
        id: "440e2565-8ab1-4031-9b99-f23fc423aaf1",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "caf95296-7824-477c-a8bf-44da147967e0",
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
    id: "9183d263-fa5c-429d-9393-b49372a1c210",
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
        id: "ffc1e815-8513-4279-8c70-e6f49dc3685a",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "d7764faf-3eaa-4140-ba4b-eeccaffb5491",
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
      id: "9183d263-fa5c-429d-9393-b49372a1c210",
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
          id: "ffc1e815-8513-4279-8c70-e6f49dc3685a",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "d7764faf-3eaa-4140-ba4b-eeccaffb5491",
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
  await web.click({
    type: "Web",
    id: "68ed04fa-0a9a-447e-85d6-eb97f5ae7f14",
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
        id: "75bf0836-cef4-49c3-9f1f-c729b281d480",
        type: "CSS",
        value: "#txt-password",
        isDefault: true,
      },
      {
        id: "9dbe2549-71fb-4e75-b47e-533e213e7f95",
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
  await web.setEncryptedText(
    {
      type: "Web",
      id: "68ed04fa-0a9a-447e-85d6-eb97f5ae7f14",
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
          id: "75bf0836-cef4-49c3-9f1f-c729b281d480",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "9dbe2549-71fb-4e75-b47e-533e213e7f95",
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
    "0fe81ff1a9173ab335ca782c6ee7cdf2-U2FsdGVkX18h5guxsyDHmkPLkHqGKbGzMp901T7+9sg4jeWC1TSNVTyoKN9Ok71T"
  );
  await web.closeBrowser();
});