const API_URL = `https://fakestoreapi.com/products`;
const STORAGE_KEY = `crud_products`;

let editingId = null;

const productForm        = document.querySelector(`#productForm`);
const productIdField     = document.querySelector(`#productId`);
const productNameField   = document.querySelector(`#productName`);
const productPriceField  = document.querySelector(`#productPrice`);
const productCategoryField = document.querySelector(`#productCategory`);
const productDescField   = document.querySelector(`#productDescription`);
const productImageField  = document.querySelector(`#productImage`);
const imagePreview       = document.querySelector(`#imagePreview`);
const submitBtn          = document.querySelector(`#submitBtn`);
const cancelEditBtn      = document.querySelector(`#cancelEditBtn`);
const searchInput        = document.querySelector(`#searchInput`);
const statusMsg          = document.querySelector(`#statusMsg`);
const productsGrid       = document.querySelector(`#productsGrid`);

function getProducts() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function setStatus(message, isError = false) {
  statusMsg.textContent = message;
  statusMsg.classList.toggle(`is-error`, isError);
}

async function seedFromApiIfEmpty() {
  const existing = getProducts();
  if (existing.length > 0) {
    renderProducts(existing);
    return;
  }

  setStatus(`Loading products…`);
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Request failed`);
    const apiProducts = await res.json();

    const mapped = apiProducts.map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      category: item.category,
      description: item.description,
      image: item.image
    }));

    saveProducts(mapped);
    renderProducts(mapped);
    setStatus(`${mapped.length} products loaded`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    setStatus(`Could not load products from the API.`, true);
    renderProducts([]);
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function resetForm() {
  productForm.reset();
  productIdField.value = ``;
  imagePreview.classList.add(`d-none`);
  imagePreview.src = ``;
  editingId = null;
  submitBtn.textContent = `Add Product`;
  cancelEditBtn.classList.add(`d-none`);
}

function fillFormForEdit(product) {
  editingId = product.id;
  productIdField.value = product.id;
  productNameField.value = product.name;
  productPriceField.value = product.price;
  productCategoryField.value = product.category;
  productDescField.value = product.description || ``;

  if (product.image) {
    imagePreview.src = product.image;
    imagePreview.classList.remove(`d-none`);
  } else {
    imagePreview.classList.add(`d-none`);
  }

  submitBtn.textContent = `Update Product`;
  cancelEditBtn.classList.remove(`d-none`);
  productForm.scrollIntoView({ behavior: `smooth`, block: `start` });
}

productImageField.addEventListener(`change`, async function (e) {
  const file = e.target.files[0];
  const base64 = await fileToBase64(file);
  if (base64) {
    imagePreview.src = base64;
    imagePreview.classList.remove(`d-none`);
  }
});

async function addProduct(productData) {
  try {
    await fetch(API_URL, {
      method: `POST`,
      headers: { 'Content-Type': `application/json` },
      body: JSON.stringify({
        title: productData.name,
        price: productData.price,
        category: productData.category,
        description: productData.description,
        image: productData.image || `https://via.placeholder.com/300`
      })
    });
  } catch (error) {
    console.error(`API create failed: ${error}`);
  }

  const products = getProducts();
  const newProduct = {
    id: Date.now(),
    name: productData.name,
    price: productData.price,
    category: productData.category,
    description: productData.description,
    image: productData.image
  };
  products.unshift(newProduct);
  saveProducts(products);
  renderProducts(products);
  setStatus(`"${newProduct.name}" added`);
}

async function updateProduct(id, productData) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: `PUT`,
      headers: { 'Content-Type': `application/json` },
      body: JSON.stringify({
        title: productData.name,
        price: productData.price,
        category: productData.category,
        description: productData.description,
        image: productData.image
      })
    });
  } catch (error) {
    console.error(`API update failed: ${error}`);
  }

  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return;

  products[index] = { ...products[index], ...productData };
  saveProducts(products);
  renderProducts(products);
  setStatus(`"${products[index].name}" updated`);
}

async function deleteProduct(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: `DELETE` });
  } catch (error) {
    console.error(`API delete failed: ${error}`);
  }

  const products = getProducts().filter((p) => p.id !== id);
  saveProducts(products);
  renderProducts(products);
  setStatus(`Product deleted`);
}

function searchProducts(term) {
  const products = getProducts();
  const lowerTerm = term.trim().toLowerCase();

  if (lowerTerm === ``) {
    renderProducts(products);
    setStatus(`${products.length} products`);
    return;
  }

  const filtered = products.filter((p) => p.name.toLowerCase().includes(lowerTerm));
  renderProducts(filtered);
  setStatus(`${filtered.length} result${filtered.length === 1 ? `` : `s`} for "${term}"`);
}

function renderProducts(products) {
  if (!products || products.length === 0) {
    productsGrid.innerHTML = `<p class="text-center" style="color:var(--ink-soft); padding:2rem 0;">No products to show.</p>`;
    return;
  }

  let cardsHtml = ``;
  for (const product of products) {
    cardsHtml += buildCardHtml(product);
  }
  productsGrid.innerHTML = cardsHtml;
}

function buildCardHtml(product) {
  const image = product.image || `https://via.placeholder.com/300`;
  const price = Number(product.price).toFixed(2);
  const description = product.description || ``;

  return `
    <div class="col-md-4 col-sm-6">
      <div class="product-card">
        <div class="thumb-wrap">
          <img src="${image}" alt="${product.name}" class="thumb">
        </div>
        <div class="body">
          <span class="category-tag">${product.category}</span>
          <h3>${product.name}</h3>
          <span class="price">$${price}</span>
          <p class="desc">${description}</p>
          <div class="card-actions">
            <button class="btn-edit" data-action="edit" data-id="${product.id}">Edit</button>
            <button class="btn-delete" data-action="delete" data-id="${product.id}">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

productForm.addEventListener(`submit`, async function (e) {
  e.preventDefault();

  const name = productNameField.value.trim();
  const price = parseFloat(productPriceField.value);
  const category = productCategoryField.value.trim();
  const description = productDescField.value.trim();
  const file = productImageField.files[0];

  if (!name || Number.isNaN(price) || !category) {
    setStatus(`Please fill in name, price and category.`, true);
    return;
  }

  let image = imagePreview.src && !imagePreview.classList.contains(`d-none`) ? imagePreview.src : ``;
  if (file) {
    image = await fileToBase64(file);
  }

  const productData = { name, price, category, description, image };

  if (editingId) {
    await updateProduct(editingId, productData);
  } else {
    await addProduct(productData);
  }

  resetForm();
});

cancelEditBtn.addEventListener(`click`, function () {
  resetForm();
});

searchInput.addEventListener(`input`, function (e) {
  searchProducts(e.target.value);
});

productsGrid.addEventListener(`click`, function (e) {
  const button = e.target.closest(`button[data-action]`);
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;
  const products = getProducts();
  const product = products.find((p) => p.id === id);
  if (!product) return;

  if (action === `edit`) {
    fillFormForEdit(product);
  } else if (action === `delete`) {
    const confirmed = confirm(`Delete "${product.name}"?`);
    if (confirmed) deleteProduct(id);
  }
});

seedFromApiIfEmpty();