import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "218e5f1b-2559-4fe7-b5c4-2a680667c9de",
    attributes: {
      id: "menu-toggle",
      href: "#",
      class: "btn btn-dark btn-lg toggle",
    },
    childIndex: 2,
    hashes: { "md5.v1": "bd1a4d233fee02bdbcf85af89867c9de" },
    name: "a - btn btn-dark btn-lg toggle",
    selectors: [
      {
        id: "8fbd6d23-c114-4856-949d-6c0a15090e62",
        type: "CSS",
        value: "#menu-toggle",
        isDefault: true,
      },
      {
        id: "9c56706f-5084-44a9-9275-26ef11ed1c40",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "f37302fc-273e-4c9d-8b66-798a181f1831",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "9d7a2ca3-768b-4904-880f-a33bdf1c6a0c",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "949cbec6-4452-4b8f-88a2-656fdd08485f",
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
    id: "6ceb5ec3-c9fc-4a32-9887-d78b819fffea",
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
        id: "c7b2350e-a601-44b5-bfea-1e56fbeac405",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "76e849eb-7c09-41d3-ac34-9ced10cae499",
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
  await web.closeBrowser();
});