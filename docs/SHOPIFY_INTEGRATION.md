
# IRONIX – Shopify Integration Approach

## 1. Overview

The current Smart Size Finder is developed as a standalone React application using sample product data.

For production integration, the functionality can be adapted into the existing Shopify theme using Liquid, JavaScript, CSS and Shopify storefront capabilities.

## 2. Integration Architecture

### Frontend
- Shopify Liquid sections for rendering the interface.
- CSS for responsive styling.
- JavaScript for size recommendation and user interactions.

### Product Data
- Shopify product objects for product information.
- Product variants for size selection.
- Product metafields for product-specific sizing information.

### Cart Integration
- Shopify Ajax Cart API to add selected variants.
- Cart API responses to update cart information.
- Shopify cart attributes or line item properties where appropriate.

## 3. Implementation Steps

1. Create a custom Liquid section for the Smart Size Finder.
2. Add the required HTML structure.
3. Load the JavaScript and CSS assets.
4. Retrieve product sizing information from metafields.
5. Implement the recommendation logic using validated sizing rules.
6. Match the recommended size with an available Shopify variant.
7. Add the selected variant using the Ajax Cart API.
8. Update the cart drawer after successful addition.

## 4. Example Shopify Cart Integration

The following example demonstrates adding a selected product variant to the Shopify cart.

```javascript
async function addToShopifyCart(variantId, quantity = 1) {
  try {
    const response = await fetch(
      `${window.Shopify.routes.root}cart/add.js`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          items: [
            {
              id: Number(variantId),
              quantity: Number(quantity)
            }
          ]
        })
      }
    );

    if (!response.ok) {
      throw new Error("Unable to add product to cart.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

## 5. Edge Cases and Error Handling

- Missing height or weight.
- Invalid measurement values.
- Unsupported size recommendations.
- Unavailable product variants.
- Out-of-stock products.
- Cart API failures.
- Network errors.

The application should display clear messages when an operation fails.

## 6. Dependencies and Limitations

- Access to a Shopify development or test store is required for actual integration testing.
- The current React prototype is not connected to the IRONIX production store.
- Official product measurements must be obtained before deploying size recommendations.
- Shopify theme compatibility must be checked.
- Actual discounts for bundles must be configured separately.

## 7. Verification

The implementation should be tested for:

- Correct variant selection.
- Correct product availability.
- Successful cart additions.
- Correct cart quantities.
- Mobile responsiveness.
- Error handling.

## Conclusion

The proposed architecture allows the standalone prototype to be adapted into Shopify while retaining the core size recommendation experience and integrating with Shopify's native product and cart functionality.
