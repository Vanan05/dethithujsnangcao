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
        <td>
            <button onclick="deleteProduct(${product.id})" class="btn btn-danger">Delete</button>
        </td>
    </tr>
    `
}
const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    productList.innerHTML = response.data.map(rawHtml).join('');
};

fetchProducts();

const deleteProduct = async (id) => {
    const inConfim = confirm("Bạn có chắc chắn muốn xóa không")
    if (!inConfim) return;
    await axios.delete(`http://localhost:3000/products/${id}`)

}

