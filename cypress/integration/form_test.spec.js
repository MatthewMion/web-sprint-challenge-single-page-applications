describe("Forms App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  //Helpers
  const nameInput = () => cy.get("input[name=name]");
  const sizeInput = () => cy.get("select[name=size]");
  const pepperoniInput = () => cy.get("input[name=pepperoni]");
  const sausageInput = () => cy.get("input[name=sausage]");
  const peppersInput = () => cy.get("input[name=peppers]");
  const meatballsInput = () => cy.get("input[name=meatballs]");
  const submitBtn = () => cy.get("button[id=order-button]");

  it("sanity check to make sure tests work", () => {
    // 'it' is a test
    // 'expect' is an assertion
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // strict equality === !===
    expect({}).not.to.equal({}); //strict equality === !===
    expect({}).to.eql({}); // not strict == !==
  });

  it("the proper elements are showing", () => {
    nameInput().should("exist");
    sizeInput().should("exist");
    pepperoniInput().should("not.checked");
    sausageInput().should("not.checked");
    peppersInput().should("not.checked");
    meatballsInput().should("not.checked");
  });

  describe("filling out inputs", () => {
    // it("can navigate to the site", () => {
    //   cy.url().should("include", "localhost:3001");
    // });

    it("submit button starts out disabled", () => {
      submitBtn().should("be.disabled");
    });

    it("can type in the inputs", () => {
      nameInput()
        .should("have.value", "")
        .type("Testing...")
        .should("have.value", "Testing...");
      sizeInput()
        .should("have.value", "")
        .select("large")
        .should("have.value", "large");
    });
    it("can check toppings boxes", () => {
      pepperoniInput().click();
      pepperoniInput().should("have.checked", "true");
      sausageInput().click();
      sausageInput().should("have.checked", "true");
      peppersInput().click();
      peppersInput().should("have.checked", "true");
      meatballsInput().click();
      meatballsInput().should("have.checked", "true");
    });
  });

  describe("Submitting a new order", () => {
    it("can submit a new order", () => {
      nameInput().type("Testing...");
      sizeInput().select("large");
      submitBtn().click();
    });
    it("form validation if input is left empty", () => {
      nameInput().type("Testing...");
      sizeInput().type("large");
      submitBtn().should("be.disabled");
    });
  });
});
