export default function carrinhoForm(items = [
  { id: '1', name: 'Deluxe Suite', price: 150.00, nights: 3, guests: 2, view: 'Ocean View', image: 'https://via.placeholder.com/120' },
  { id: '2', name: 'Standard Room', price: 80.00, nights: 2, guests: 1, view: 'City View', image: 'https://via.placeholder.com/120' }
]) {
  const cart = document.createElement('div');
  cart.className = 'container cart-container';

  // Log to confirm function execution
  console.log('carrinhoForm executed, rendering cart with items:', items);

  // Calculate totals
  const calculateTotals = () => {
    let subtotal = items.reduce((sum, item) => sum + item.price * item.nights * (item.quantity || 1), 0);
    const taxes = subtotal * 0.1;
    let total = subtotal + taxes;
    if (window.discountApplied) {
      total *= 0.9; // Apply 10% discount
    }
    return { subtotal: subtotal.toFixed(2), taxes: taxes.toFixed(2), total: total.toFixed(2) };
  };

  // Render cart
  const renderCart = () => {
    const totals = calculateTotals();
    cart.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <style>
        .cart-container {
          max-width: 1200px;
          margin: 40px auto;
          font-family: Arial, sans-serif;
        }
        .cart-item {
          margin-bottom: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background: #fff;
        }
        .cart-item img {
          max-width: 120px;
          border-radius: 5px;
        }
        .summary-card {
          position: sticky;
          top: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background: #fff;
        }
        .btn-checkout {
          width: 100%;
          padding: 12px;
          background: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          text-align: center;
          text-decoration: none;
          display: block;
        }
        .btn-checkout:hover {
          background: #0056b3;
          color: #fff;
        }
        .btn-outline-secondary {
          padding: 5px 10px;
          border: 1px solid #6c757d;
          background: #fff;
          color: #6c757d;
          border-radius: 4px;
          cursor: pointer;
        }
        .btn-outline-secondary:hover {
          background: #6c757d;
          color: #fff;
        }
        .btn-link.text-danger {
          color: #dc3545;
          text-decoration: none;
        }
        .btn-link.text-danger:hover {
          text-decoration: underline;
        }
        .input-group {
          display: flex;
          align-items: stretch;
        }
        .form-control {
          padding: 5px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          flex-grow: 1;
        }
        .fw-bold {
          font-weight: bold;
        }
        .text-muted {
          color: #6c757d;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: -15px;
        }
        .col-lg-8, .col-lg-4 {
          padding: 15px;
        }
        .col-lg-8 {
          flex: 1 1 66.6667%;
        }
        .col-lg-4 {
          flex: 1 1 33.3333%;
        }
        .card {
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .card-body {
          padding: 1rem;
        }
        .d-flex {
          display: flex;
        }
        .align-items-start {
          align-items: flex-start;
        }
        .flex-grow-1 {
          flex-grow: 1;
        }
        .me-3 {
          margin-right: 1rem;
        }
        .mb-4 {
          margin-bottom: 1.5rem;
        }
        .mb-3 {
          margin-bottom: 1rem;
        }
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        .justify-content-between {
          justify-content: space-between;
        }
        .w-50 {
          width: 50%;
        }
        .text-center {
          text-align: center;
        }
        .fa-users, .fa-bed, .fa-water, .fa-city, .fa-moon, .fa-trash-alt {
          margin-right: 0.5em;
        }
        @media (max-width: 768px) {
          .col-lg-8, .col-lg-4 {
            flex: 1 1 100%;
          }
          .cart-item img {
            max-width: 100%;
            margin-bottom: 15px;
          }
          .input-group {
            flex-direction: column;
          }
          .input-group input, .input-group button {
            width: 100%;
            margin-bottom: 5px;
          }
          .row {
            flex-direction: column;
          }
        }
      </style>
      <div class="row">
        <!-- Cart Items -->
        <div class="col-lg-8">
          <h2 class="mb-4">Your Stay</h2>
          <div id="cart-items">
            ${items.length === 0 ? `
              <p class="text-muted">Your cart is empty</p>
            ` : items.map(item => `
              <div class="cart-item card" data-id="${item.id}" data-price="${item.price}" data-nights="${item.nights}">
                <div class="card-body d-flex align-items-start">
                  <img src="${item.image}" alt="${item.name}" class="me-3">
                  <div class="flex-grow-1">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text"><i class="fas fa-users me-2"></i>${item.guests} Guest${item.guests > 1 ? 's' : ''}</p>
                    <p class="card-text"><i class="fas fa-${item.view === 'Ocean View' ? 'water' : 'city'} me-2"></i>${item.view}</p>
                    <p class="card-text"><i class="fas fa-moon me-2"></i>${item.nights} Night${item.nights > 1 ? 's' : ''}</p>
                    <p class="card-text">Price per night: $<span class="price">${item.price.toFixed(2)}</span></p>
                  </div>
                  <div class="d-flex flex-column align-items-end">
                    <div class="input-group quantity-control mb-3 w-50">
                      <button class="btn btn-outline-secondary" type="button" data-action="decrease" title="Decrease quantity">-</button>
                      <input type="number" class="form-control text-center" value="${item.quantity || 1}" min="1" aria-label="Number of rooms">
                      <button class="btn btn-outline-secondary" type="button" data-action="increase" title="Increase quantity">+</button>
                    </div>
                    <p class="fw-bold">Subtotal: $<span class="subtotal">${(item.price * item.nights * (item.quantity || 1)).toFixed(2)}</span></p>
                    <button class="btn btn-link text-danger" data-id="${item.id}" title="Remove item"><i class="fas fa-trash-alt"></i> Remove</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <!-- Summary Section -->
        <div class="col-lg-4">
          <div class="summary-card card">
            <div class="card-body">
              <h4 class="card-title">Booking Summary</h4>
              <div class="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span id="cart-subtotal">$${totals.subtotal}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Taxes & Fees (10%)</span>
                <span id="cart-taxes">$${totals.taxes}</span>
              </div>
              <div class="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span id="cart-total">$${totals.total}</span>
              </div>
              <div class="input-group mb-3">
                <input type="text" id="promo-code" class="form-control" placeholder="Promo Code" aria-label="Promo Code">
                <button class="btn btn-outline-secondary" type="button" title="Apply promo code">Apply</button>
              </div>
              <a href="/checkout" class="btn btn-primary btn-checkout" title="Proceed to payment">Proceed to Checkout</a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Event listeners for quantity controls
    cart.querySelectorAll('.quantity-control button').forEach(button => {
      button.addEventListener('click', () => {
        const input = button.closest('.quantity-control').querySelector('input');
        const action = button.getAttribute('data-action');
        let quantity = parseInt(input.value);
        if (action === 'increase') {
          quantity += 1;
        } else if (action === 'decrease' && quantity > 1) {
          quantity -= 1;
        }
        input.value = quantity;
        const itemId = button.closest('.cart-item').getAttribute('data-id');
        const item = items.find(i => i.id === itemId);
        if (item) {
          item.quantity = quantity;
        }
        const subtotal = item.price * item.nights * quantity;
        button.closest('.cart-item').querySelector('.subtotal').textContent = subtotal.toFixed(2);
        updateTotals();
      });
    });

    // Event listeners for remove buttons
    cart.querySelectorAll('.btn-link.text-danger').forEach(button => {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const itemIndex = items.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
          items.splice(itemIndex, 1);
        }
        renderCart();
      });
    });

    // Event listener for promo code
    const applyBtn = cart.querySelector('button[title="Apply promo code"]');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        const promoInput = cart.querySelector('#promo-code');
        const promoValue = promoInput.value.trim().toUpperCase();
        if (promoValue === 'SAVE10' && !window.discountApplied) {
          window.discountApplied = true;
          updateTotals();
          alert('Promo code applied! 10% discount added.');
        } else if (window.discountApplied) {
          alert('Promo code already applied.');
        } else {
          alert('Invalid promo code.');
        }
      });
    }

    // Update totals function
    const updateTotals = () => {
      const totals = calculateTotals();
      const subtotalEl = cart.querySelector('#cart-subtotal');
      const taxesEl = cart.querySelector('#cart-taxes');
      const totalEl = cart.querySelector('#cart-total');
      if (subtotalEl) subtotalEl.textContent = `$${totals.subtotal}`;
      if (taxesEl) taxesEl.textContent = `$${totals.taxes}`;
      if (totalEl) totalEl.textContent = `$${totals.total}`;
    };
  };

  // Initialize discount flag
  window.discountApplied = window.discountApplied || false;

  // Initial render
  renderCart();

  return cart;
}