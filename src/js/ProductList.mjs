import { renderListWithTemplate } from "./utils.mjs";

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(list)
    }

    renderList(list) {
        renderListWithTemplate(productListCard, this.listElement, list);    
    }
}

    function productListCard(product) {
        return `
        <li class="product-card">
            <a href="product_pages/?product=${product.Id}">
                <img src="${product.Image}" alt="${product.Name}">
                <h2 class="card__brand">${product.Brand.Name}</h2>
                <h3 class="card__name">${product.Name}</h3>
                <p class="product-card__price">$${product.FinalPrice}</p>
            </a>
        </li>`
    }