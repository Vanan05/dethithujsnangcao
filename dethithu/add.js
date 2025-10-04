const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const category = document.getElementById('category').value;

    if (!name || !price || !quantity || !category) {
        alert("Vui lòng nhập đầy đủ các trường");
        return;
    };
    const payload = {
        name,
        price,
        quantity,
        category
    };
    
    await axios.post('http://localhost:3000/products',payload);
    location.href = 'index.html';

};