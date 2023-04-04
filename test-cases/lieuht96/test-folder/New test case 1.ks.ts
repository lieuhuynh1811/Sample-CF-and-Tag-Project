import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://testops.qa.katalon.com/");
  await web.click({
    type: "Web",
    id: "ee903464-23c5-41f1-881b-6be91ff42749",
    attributes: {
      class: "card-header",
      "data-traffic-agent-last-action-id":
        "a4692aa6-c9f5-4fa5-bf81-1ab2a6a8a251",
      "data-rnd-last-action-id": "ca093da8-3179-4ffd-82cd-7237ef9301fa",
    },
    childIndex: 1,
    hashes: { "md5.v1": "087ece4cdca13a11b9cd13ddc92238ff" },
    name: "div - PS",
    selectors: [
      {
        id: "17a12da5-bd0e-4b1f-9ce6-21b8ce69390d",
        type: "CSS",
        value: ".dashboard-card:nth-child(2) .card:nth-child(1) .card-header",
        isDefault: true,
      },
      {
        id: "e7a31b2c-248d-4d5f-acdd-5b945ffa68b1",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "PS\nPopulate Sample Data Flag",
    pageUrl: "https://testops.qa.katalon.com/organization/85/home",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});