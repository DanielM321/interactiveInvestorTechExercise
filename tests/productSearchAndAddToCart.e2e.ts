import { expect, test } from "../Fixtures/PageObjectFixtures";

test("Search for a product and add in to cart", async ({
  homePage,
  navigation,
  productsPage,
  productInfoPage,
  cartPage,
  productData,
}) => {
  const productQuantity = 1;

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
    expect(cartItemDetails.total).toBe(`Rs. ${expectedTotal}`);
    expect(cartItemDetails.description).toContain(productData.productName);
    expect(cartItemDetails.description).toContain(productData.productCategory);
    expect(cartItemDetails.price).toBe(`Rs. ${productData.productPrice}`);
    expect(cartItemDetails.quantity).toBe(productQuantity.toString());
    expect(cartItemDetails.total).toBe(`Rs. ${expectedTotal}`);
  });
});
