import { calcurateTotal } from "./calcurateTotal"

function ProductsPage() {
    const total = calcurateTotal(10, 5) // Example usage of the calcurateTotal function
    return (
        <div>
            <h1>Products</h1>
            <p>Total: {total}</p>
        </div>
    )
}

export default ProductsPage