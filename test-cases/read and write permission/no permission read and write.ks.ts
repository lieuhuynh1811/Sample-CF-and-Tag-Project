import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "7af0814f-46a9-428d-a49d-90cce51c5637",
    attributes: { class: "fa fa-bars" },
    childIndex: 1,
    hashes: { "md5.v1": "7404fc617199bc0378c5447931ad5838" },
    name: "i - fa fa-bars",
    selectors: [
      {
        id: "5c1d89ae-e16e-48d2-b6ab-4c7a761998b0",
        type: "CSS",
        value: ".fa-bars",
        isDefault: true,
      },
      {
        id: "b5efe1c3-81fd-4430-bd21-fed2363a66c2",
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
    id: "957eb773-6b08-4745-a602-7b9889f0a5c8",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "d849cbf9-ab00-45fe-8d7e-34ab02e00f0e",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "039e3965-1eff-4841-86bc-0b0f309568eb",
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
  await web.closeBrowser();
});