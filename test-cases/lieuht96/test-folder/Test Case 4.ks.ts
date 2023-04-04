import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://testops.katalon.io/");
  await web.click({
    type: "Web",
    id: "91d2bb69-144b-4dc7-9b6d-2e779c8ff59a",
    attributes: {
      class: "counter__value-small",
      "data-traffic-agent-last-action-id":
        "cb328220-3839-4c2c-ab95-f551311b7b63",
      "data-rnd-last-action-id": "809232a4-8319-4ea0-b267-f75e666fa6ef",
    },
    childIndex: 1,
    hashes: { "md5.v1": "92cb6a08ce061a1b3bd9489e38cfa6b5" },
    name: "div - 24h 51m 43s",
    selectors: [
      {
        id: "0ea40b23-6846-4761-b828-20f8a9fa2f29",
        type: "CSS",
        value: ".card:nth-child(1) div:nth-child(1) > .counter__value-small",
        isDefault: true,
      },
      {
        id: "8d2961f7-94e5-4729-9e16-16eb6f5aff1c",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "24h 51m 43s",
    pageUrl: "https://testops.katalon.io/organization/743630/home",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});