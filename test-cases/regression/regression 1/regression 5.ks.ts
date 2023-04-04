import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "9f03d773-975b-42e6-a564-02d66c7ca7eb",
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
        id: "8d294134-16a1-4f21-8f34-71393ad8059f",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "150f96fa-c5c1-446f-9c74-edce99c291b5",
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
    id: "6ac55316-2b2d-4d67-9613-0822929639b9",
    attributes: { class: "fa fa-bars" },
    childIndex: 1,
    hashes: { "md5.v1": "7404fc617199bc0378c5447931ad5838" },
    name: "i - fa fa-bars",
    selectors: [
      {
        id: "4fd43d65-75d3-4d17-80d0-d4dc86a6ef8c",
        type: "CSS",
        value: ".fa-bars",
        isDefault: true,
      },
      {
        id: "b2f4faa4-221e-4519-93a0-e83b947f69ab",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "i",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "8eb0e594-474f-4f7e-a8c6-81d230646de0",
    attributes: { href: "./", onclick: "$('#menu-close').click();" },
    childIndex: 1,
    hashes: { "md5.v1": "55fbd90a737c1163415dd358745da1b2" },
    name: "a - Home",
    selectors: [
      {
        id: "0b93c05f-7c78-4ef8-b91d-b69069aab7e0",
        type: "CSS",
        value: 'li:nth-child(3) [href="\\.\\/"]',
        isDefault: true,
      },
      {
        id: "ea7c4297-9918-407f-9fcc-a30887c5b288",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Home",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});