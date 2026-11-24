
# IRONIX – Custom Shopify Feature Proposals

## Feature 1: Smart Size Finder

### Problem
Customers may struggle to identify the correct clothing size when shopping online. Incorrect size selection can create uncertainty and potentially increase returns.

### Proposed Solution
Develop an interactive Smart Size Finder that provides an illustrative size recommendation based on customer inputs.

### How It Works
1. Customer enters height in centimetres.
2. Customer enters weight in kilograms.
3. Customer selects preferred fit: Tight, Regular or Loose.
4. The application calculates a suggested size.
5. The recommended size can automatically update product size selections.

### Business Benefits
- Improves product discovery and shopping experience.
- Helps customers make more informed size selections.
- Reduces uncertainty during online shopping.

### Implementation
React components can be converted into Shopify Liquid sections and JavaScript assets. Product sizing information can be stored in Shopify metafields.

The recommendation rules must be calibrated against IRONIX's actual product measurements before production deployment.

### Prototype Status
A working standalone React prototype has been developed using sample product data and illustrative recommendation rules.

---

## Feature 2: Smart Product Bundle Builder

### Problem
Customers may purchase individual apparel products without discovering complementary products or available combinations.

### Proposed Solution
Build a Smart Product Bundle Builder that allows customers to combine multiple apparel products into one shopping selection.

### How It Works
1. Customer opens the Bundle Builder.
2. Customer selects a primary product.
3. Customer selects complementary products or colours.
4. The application displays selected products and the combined price.
5. The customer can add the selected bundle to the cart.

### Business Benefits
- Encourages customers to explore more products.
- Can increase average order value.
- Provides a convenient shopping experience.
- Creates opportunities for promotional bundles.

### Shopify Integration
The feature can use Shopify product and variant data, Liquid sections and the Ajax Cart API. Bundle discounts would need to be configured using appropriate Shopify discount functionality.

### Prototype Status
Proposed feature. Not implemented in the current standalone demo.
