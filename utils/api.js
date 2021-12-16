export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI("/api/categories");
  return categories;
}

// export async function getCategory(slug) {
//   const categories = await fetchAPI(`/categories?slug=${slug}`);
//   return categories?.[0];
// }

export async function getProducts() {
  const products = await fetchAPI("/api/products?populate=image");
  return products;
}

export async function getProduct(id) {
  const product = await fetchAPI(`/api/products/${id}?populate=image`);
  return product;
}


export const fromImageToUrl = (product, image) => {
  return `http://localhost:1337${product.attributes.image.data[0].attributes.url}`;
};
