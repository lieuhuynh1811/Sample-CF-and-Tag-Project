import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser();
  await web.closeBrowser();
  await web.openBrowser("https://example.com/");
  await web.click({
    type: "Web",
    id: "671ed784-8066-4d27-97b8-8c81dd3647eb",
    attributes: { href: "https://www.iana.org/domains/example" },
    childIndex: 1,
    hashes: { "md5.v1": "c4933253752bc5164cc8ef8354e95cac" },
    name: "a - More information...",
    selectors: [
      {
        id: "1fade411-03a4-4928-aa52-33bc1dfcea0e",
        type: "CSS",
        value: '[href="https\\:\\/\\/www\\.iana\\.org\\/domains\\/example"]',
        isDefault: true,
      },
      {
        id: "9830a5dc-3201-4ca8-9f91-b19ce52fd428",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "More information...",
    pageUrl: "https://example.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "2d0ea2f1-869d-475a-9c7b-7d556fa613b6",
    attributes: { href: "/domains" },
    childIndex: 1,
    hashes: { "md5.v1": "b48f8da14035998a74c94a2af30cebef" },
    name: "a - Domains",
    selectors: [
      {
        id: "a5ee68c3-8a52-446b-b98a-d9097cd3d2c2",
        type: "CSS",
        value: 'div.navigation [href="\\/domains"]',
        isDefault: true,
      },
      {
        id: "2f65629e-1205-4409-871b-e8128e1bea0a",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Domains",
    pageUrl: "https://www.iana.org/domains/reserved",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});