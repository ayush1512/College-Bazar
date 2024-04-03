    // Fetch the product data from the server
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById('products');
            products.forEach(product => {
                // Create a div for the product
                const productDiv = document.createElement('div');
                productDiv.className = 'product';

                // Add the product image
                const img = document.createElement('img');
                img.src = product.img;
                productDiv.appendChild(img);

                // Add the product title
                const title = document.createElement('h2');
                title.textContent = product.title;
                productDiv.appendChild(title);

                // Add the product description
                const description = document.createElement('p');
                description.textContent = product.description;
                productDiv.appendChild(description);

                // Add the product price
                const price = document.createElement('p');
                price.textContent = '$' + product.price;
                price.className = 'price';
                productDiv.appendChild(price);

                // Add the product to the page
                productsContainer.appendChild(productDiv);
            });
        });

    // Add an event listener to the "Switch View" button
    document.getElementById('switchView').addEventListener('click', function() {
        const productsContainer = document.getElementById('products');
        if (productsContainer.className === 'list-view') {
            productsContainer.className = 'grid-view';
        } else {
            productsContainer.className = 'list-view';
        }
    });