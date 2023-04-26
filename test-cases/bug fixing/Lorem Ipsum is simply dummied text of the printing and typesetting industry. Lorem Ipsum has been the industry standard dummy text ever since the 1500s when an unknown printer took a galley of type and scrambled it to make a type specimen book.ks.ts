import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "01534a89-a0dd-4b6c-825b-dfd1ba44ae34",
    attributes: {
      id: "menu-toggle",
      href: "#",
      class: "btn btn-dark btn-lg toggle",
    },
    childIndex: 1,
    hashes: { "md5.v1": "bd1a4d233fee02bdbcf85af89867c9de" },
    name: "a - btn btn-dark btn-lg toggle",
    selectors: [
      {
        id: "a136f770-626e-4b84-95fb-9992c70711b6",
        type: "CSS",
        value: "#menu-toggle",
        isDefault: true,
      },
      {
        id: "621c7a7c-74de-448d-a707-278bc64f4cbb",
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
    id: "8bd87285-b0c8-4eb8-a4fa-a8dea388e9d3",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "9e4f233a-8612-4acf-9863-057d9fbb01a5",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "b3bd7d1c-9a9d-4763-99a6-870421ab0d93",
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