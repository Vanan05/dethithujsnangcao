const productList = document.getElementById("product-list");
// productList.innerHTML=`
// <tr>
// <td>1</td>
// <td>Iphone 17</td>
// <td>10000</td>
// <td>10</td>
// <td>smartPhone</td>
// </tr>
// `

const rawHtml = (product) => {
    return `
    <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${product.category}</td>
    </tr>
    `
}
const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    productList.innerHTML = response.data.map(rawHtml).join('');
};

fetchProducts();

