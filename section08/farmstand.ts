interface ProductItem {
    price: number;
    name: string;
    quantity: number;
}

const printProductItem = (productItem: ProductItem): void => {
    console.log(`${productItem.name} - $${productItem.price}`);
}