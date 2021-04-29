import { cyan } from "@material-ui/core/colors";

describe("Test the Home input form", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });
  it("adds price, percent, and number of people to inputs", function () {
    cy.screenshot("my-image");
    cy.get(":nth-child(1) > .css-1volggs > .css-1dz8a4t")
      .type(20)
      .should("have.value", 20);
    cy.get(".css-wss6d0 > :nth-child(2)").click();
    cy.get(".css-okhpiw > .css-1volggs > .css-1dz8a4t")
      .clear()
      .type(2)
      .should("have.value", 2);
    cy.get('[type="submit"]').click();
    cy.get(".css-gddlv3 > :nth-child(1) > :nth-child(1)").should(
      "contain.text",
      "Total Tip:"
    );
    cy.get(".css-gddlv3 > :nth-child(1) > :nth-child(2)").should(
      "contain.text",
      "2.00"
    );
    cy.get(".css-dypgbr > :nth-child(1) > :nth-child(1)").should(
      "contain.text",
      "Tip per Person:"
    );
    cy.get(".css-dypgbr > :nth-child(1) > :nth-child(2)").should(
      "contain.text",
      "1.00"
    );
    cy.get(".css-dypgbr > :nth-child(2) > :nth-child(1)").should(
      "contain.text",
      "Total per Person:"
    );
    cy.get(".css-dypgbr > :nth-child(2) > :nth-child(2)").should(
      "contain.text",
      "11.00"
    );
    cy.get(".css-bfed0g").click();
    cy.location("pathname").should("include", "split");
    cy.get(":nth-child(1) > .css-139h64c > .css-20am2x").click();
    cy.get(".css-x0dw5o")
      .clear()
      .type("Jane")
      .should("have.value", "Jane")
      .type("{enter}");

    cy.get(
      ":nth-child(1) > .css-1n7y7g1 > .css-20am2x > div > .MuiSvgIcon-root"
    ).click();
    cy.get(".css-mk8550")
      .clear()
      .type(20)
      .should("have.value", 20)
      .type("{enter}");
    cy.get(".css-eeyd96").should("contain.text", "33.00");

    cy.get(
      ':nth-child(2) > .css-1n7y7g1 > .css-20am2x > [style="color: rgb(163, 0, 31); cursor: pointer;"]'
    ).click();
    cy.get(".css-eeyd96").should("contain.text", "22.00");
    cy.get(".css-bfed0g").click();
    cy.location("pathname").should("include", "");
  });
});
describe("Viewport", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("sets the viewport size and dimension", () => {
    cy.get(".css-10uvc49").should("be.visible");

    cy.viewport(768, 1024);
    cy.get(".css-10uvc49").should("be.visible");

    cy.viewport("macbook-15");
    cy.wait(200);
    cy.viewport("macbook-13");
    cy.wait(200);
    cy.viewport("macbook-11");
    cy.wait(200);
    cy.viewport("ipad-2");
    cy.wait(200);
    cy.viewport("ipad-mini");
    cy.wait(200);
  });
});
