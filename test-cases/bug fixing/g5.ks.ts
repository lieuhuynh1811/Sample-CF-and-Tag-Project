import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "e1ae2165-f9d3-4cc4-aadd-df949afe935e",
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
        id: "6d3cdcd9-eee3-436b-814d-5b86f9ffef87",
        type: "CSS",
        value: "#menu-toggle",
        isDefault: true,
      },
      {
        id: "e7730880-d67d-40c2-ace6-b69fd2bafc68",
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
    id: "d1a4cee9-8c35-4526-8069-77f2f5cf2a65",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "68d15906-d7cf-45f5-bf7d-20dfdd0b278e",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "1ca45694-494c-498c-9c3b-ef558bb4ad23",
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