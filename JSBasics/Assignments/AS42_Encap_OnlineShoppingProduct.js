/*
Encapsulations_Assignment-2
PS: Online Shopping – Product Class
## Build a JavaScript class Product that stores the following product details:
    • productId – number
    • productName – string
    • price – number
    • quantityInStock – number
## Requirements
1. All fields must be private using JavaScript private fields (#).
2. Provide public getters and setters for all fields.
3. Add validation to the setters:
    o price must be greater than 0.
    o quantityInStock must be 0 or greater.
4. ProductName should not be empty.
5. Create an object of the Product class.
6. Use the public setters to set or modify product details.
7. Use the public getters to retrieve and display product details.
8. Try accessing a private field directly from outside the class and observe what happens.
*/

class Product{
    #productId;
    #productName;
    #price;
    #quantityInStock;

    constructor(productId, productName, price, quantityInStock) {
        this.#productId = productId;
        this.#productName = productName;
        this.#price = price;
        this.#quantityInStock = quantityInStock;
    }

    getData(){
        console.log("Product ID:", this.#productId);
        console.log("Product Name:", this.#productName);
        console.log("Price:", this.#price);
        console.log("Quantity in Stock:", this.#quantityInStock);
    }

    //ProductID
    set productId(productId){ 
        this.#productId = productId; 
    }
    get productId(){ 
        return this.#productId; 
    }

    //productName
    set productName(productName){ 
        if (productName === null || productName === undefined || productName.trim() === "") {
            throw new Error("Product name cannot be empty.");
        }

        this.#productName = productName; 
    }
    get productName(){ 
        return this.#productName;
    }
    
    //price
    set productPrice(price){
        if(price < 0) {
            throw new Error("Price must be greater than 0.");
        }

        this.#price = price; 
    }
    get productPrice(){ 
        return this.#price; 
    }
    
    //ProductID
    set productQuantityInStock(quantityInStock){ 
        if (quantityInStock < 0) {
            throw new Error("Quantity in stock cannot be negative.");
        }

        this.#quantityInStock = quantityInStock; 
    }

    get productQuantityInStock(){ 
        return this.#quantityInStock; 
    }
}


// Create an object of Product class
const product1 = new Product(101, "Laptop", 55000, 10);

// Display product details using getters
console.log("Initial Product Details: -");
product1.getData();

// Modify product details using setters
product1.productName = "Dell Laptop";
product1.productPrice = 60000;
product1.productQuantityInStock = 15;

// Display modified details using getters
console.log("Modified Product Details: -");
product1.getData();

// Trying to access private field directly
// console.log(product1.#price); //Property '#price' is not accessible outside class 'Product' because it has a private identifier.