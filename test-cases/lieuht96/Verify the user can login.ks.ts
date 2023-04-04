import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://example.com/");
  await web.click({
    type: "Web",
    id: "7ece9058-93d6-4fb3-b867-23dfe036893a",
    attributes: { href: "https://www.iana.org/domains/example" },
    childIndex: 1,
    hashes: { "md5.v1": "c4933253752bc5164cc8ef8354e95cac" },
    name: "a - More information...",
    selectors: [
      {
        id: "f0831ce8-18e3-40b3-95c4-8a6a26571f1c",
        type: "CSS",
        value: '[href="https\\:\\/\\/www\\.iana\\.org\\/domains\\/example"]',
        isDefault: true,
      },
      {
        id: "3da759c8-b52d-41c3-a470-1a8d921e0ee2",
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
    id: "6c917c83-dcac-4b19-b234-96a025695703",
    attributes: {},
    childIndex: 5,
    hashes: { "md5.v1": "d085c25d10e49cad3430e8a64ee9674b" },
    name: "h2 - Test IDN top-level domains",
    selectors: [
      {
        id: "edf6c0e2-7943-40b0-b920-8ceab5a318a2",
        type: "CSS",
        value: "h2:nth-child(5)",
        isDefault: true,
      },
      {
        id: "412b411d-de5a-4c01-8143-f73d9b5ad919",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "h2",
    text: "Test IDN top-level domains",
    pageUrl: "https://www.iana.org/domains/reserved",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.doubleClick({
    type: "Web",
    id: "6c917c83-dcac-4b19-b234-96a025695703",
    attributes: {},
    childIndex: 5,
    hashes: { "md5.v1": "d085c25d10e49cad3430e8a64ee9674b" },
    name: "h2 - Test IDN top-level domains",
    selectors: [
      {
        id: "edf6c0e2-7943-40b0-b920-8ceab5a318a2",
        type: "CSS",
        value: "h2:nth-child(5)",
        isDefault: true,
      },
      {
        id: "412b411d-de5a-4c01-8143-f73d9b5ad919",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "h2",
    text: "Test IDN top-level domains",
    pageUrl: "https://www.iana.org/domains/reserved",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "a405e283-570c-4ea8-82b7-240393eda8fd",
    attributes: { href: "/about" },
    childIndex: 1,
    hashes: { "md5.v1": "8aa8a78ce4e6bd3cd16a4c147bad1e02" },
    name: "a - About",
    selectors: [
      {
        id: "93d989ea-2c89-4fa7-a201-d194b4e90ff5",
        type: "CSS",
        value: 'li:nth-child(4) [href="\\/about"]',
        isDefault: true,
      },
      {
        id: "701365c6-e689-48d4-a2ad-dc5361f4dca1",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "About",
    pageUrl: "https://www.iana.org/domains/reserved",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});