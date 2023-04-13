import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "6a7fa931-4d7e-4fed-84cb-b3370d029cb5",
    attributes: { class: "fa fa-bars" },
    childIndex: 1,
    hashes: { "md5.v1": "7404fc617199bc0378c5447931ad5838" },
    name: "i - fa fa-bars",
    selectors: [
      {
        id: "2b5a6c70-0e48-4a1e-94e5-c8a02ba287cf",
        type: "CSS",
        value: ".fa-bars",
        isDefault: true,
      },
      {
        id: "5b8d2bd8-bf40-4725-986d-1ece9240396e",
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
    id: "9b4b7e22-0e18-4394-af5c-41f53f620b78",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "b965ad0f-1264-4b62-8963-bb9afa2a31bd",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "033bc4f3-fc23-4653-97a4-1372ba5faf30",
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