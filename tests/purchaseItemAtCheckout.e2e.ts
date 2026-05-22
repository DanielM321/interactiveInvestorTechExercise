import { expect, test } from "../Fixtures/PageObjectFixtures";

test("Purchase item at checkout", async ({
  homePage,
  navigation,
  productsPage,
  productInfoPage,
  cartPage,
  checkoutPage,
  paymentPage,
  orderConfirmationPage,
  productData,
}) => {
  const productQuantity = 1;
  const expiryYear = new Date().getFullYear() + 1;

  await test.step("Given I navigate to Home page", async () => {
    await homePage.navigateToHomePage();
    await navigation.acceptCookies();
  });

  await test.step("When I click the products link", async () => {
    await navigation.productsLink.click();
  });

  await test.step("And I search for a product", async () => {
    await productsPage.searchForProduct(productData.productName);
  });

  await test.step("And I click view product link", async () => {
    await productsPage.viewProductButton.click();
  });

  await test.step("And I add the product to cart", async () => {
    await productInfoPage.addProductToCart(productQuantity.toString());
  });

  await test.step("Then the cart modal is shown", async () => {
    await expect(productInfoPage.addedToCartModal.cartModal).toBeVisible();
  });

  await test.step("When I click view cart", async () => {
    await productInfoPage.addedToCartModal.viewCartButton.click();
  });

  await test.step("Then I should see the correct product in the cart", async () => {
    const cartItemDetails = await cartPage.cartTable.getCartItemDetails();
    const expectedTotal = await cartPage.cartTable.calculateTotalForItem(
      productData.productPrice,
      productQuantity,
    );
    expect.soft(cartItemDetails.total).toBe(`Rs. ${expectedTotal}`);
    expect.soft(cartItemDetails.description).toContain(productData.productName);
    expect
      .soft(cartItemDetails.description)
      .toContain(productData.productCategory);
    expect.soft(cartItemDetails.price).toBe(`Rs. ${productData.productPrice}`);
    expect.soft(cartItemDetails.quantity).toBe(productQuantity.toString());
    expect.soft(cartItemDetails.total).toBe(`Rs. ${expectedTotal}`);
  });

  await test.step("When I click proceed to checkout", async () => {
    await cartPage.proceedToCheckoutButton.click();
  });

  await test.step("Then I should see the correct delivery details", async () => {
    const deliveryAddressDetails = await checkoutPage.getAddressDetails(
      checkoutPage.deliveryAddress,
    );
    expect(deliveryAddressDetails).toContain(
      `${process.env.title}. ${process.env.firstName} ${process.env.lastName}`,
    );
    expect(deliveryAddressDetails).toContain(process.env.company!);
    expect(deliveryAddressDetails).toContain(process.env.address1!);
    expect(deliveryAddressDetails).toContain(process.env.address2!);
    expect(deliveryAddressDetails).toContain(
      `${process.env.city!}` +
        ` ${process.env.state!}` +
        ` ${process.env.zipcode!}`,
    );
    expect(deliveryAddressDetails).toContain(process.env.country!);
    expect(deliveryAddressDetails).toContain(process.env.mobileNumber!);
  });

  await test.step("And I should see the correct invoice details", async () => {
    const invoiceAddressDetails = await checkoutPage.getAddressDetails(
      checkoutPage.invoiceAddress,
    );
    expect(invoiceAddressDetails).toContain(
      `${process.env.title}. ${process.env.firstName} ${process.env.lastName}`,
    );
    expect(invoiceAddressDetails).toContain(process.env.company!);
    expect(invoiceAddressDetails).toContain(process.env.address1!);
    expect(invoiceAddressDetails).toContain(process.env.address2!);
    expect(invoiceAddressDetails).toContain(
      `${process.env.city!}` +
        ` ${process.env.state!}` +
        ` ${process.env.zipcode!}`,
    );
    expect(invoiceAddressDetails).toContain(process.env.country!);
    expect(invoiceAddressDetails).toContain(process.env.mobileNumber!);
  });

  await test.step("Then I should see the correct product in the Review your order table", async () => {
    const cartItemDetails = await cartPage.cartTable.getCartItemDetails();
    const expectedTotal = await cartPage.cartTable.calculateTotalForItem(
      productData.productPrice,
      productQuantity,
    );
    expect.soft(cartItemDetails.total).toBe(`Rs. ${expectedTotal}`);
    expect.soft(cartItemDetails.description).toContain(productData.productName);
    expect
      .soft(cartItemDetails.description)
      .toContain(productData.productCategory);
    expect.soft(cartItemDetails.price).toBe(`Rs. ${productData.productPrice}`);
    expect.soft(cartItemDetails.quantity).toBe(productQuantity.toString());
    expect.soft(cartItemDetails.total).toBe(`Rs. ${expectedTotal}`);
  });

  await test.step("When I click place order", async () => {
    await checkoutPage.placeOrderButton.click();
  });

  await test.step("And I submit the payment details", async () => {
    await paymentPage.submitPaymentDetails({
      nameOnCard: process.env.usersName!,
      cardNumber: process.env.cardNumber!,
      cvc: process.env.cardCvc!,
      expiryMonth: process.env.cardExpiryMonth!,
      expiryYear: expiryYear.toString(),
    });
  });

  await test.step("Then I should see the order confirmation page", async () => {
    await expect(orderConfirmationPage.heading).toHaveText("Order Placed!");
    await expect(orderConfirmationPage.body).toContainText(
      "Congratulations! Your order has been confirmed!",
    );
  });

  await test.step("When I click the continue button on order confirmation page", async () => {
    await orderConfirmationPage.continueButton.click();
  });

  await test.step("Then I am returned to the home page and I am logged in", async () => {
    await expect(homePage.page).toHaveURL(process.env.homePage!);
    await expect(navigation.logoutLink).toBeVisible();
    await expect(homePage.loggedInUser).toHaveText(
      `Logged in as ${process.env.usersName}`,
    );
  });
});
