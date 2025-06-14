function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }

  getData() {
    console.log("Trying to fetch:", this.path);
    return fetch(this.path)
      .then((res) => {
        console.log("Fetch response:", res);
        return convertToJson(res);
      })
      .then((data) => {
        console.log("Parsed JSON:", data);
        return data;
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
      });
  }

  
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}
