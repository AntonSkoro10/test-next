// src/app/catalog/[category]/page.tsx
import { useEffect, useState } from 'react';

const CategoryPage = ({ params }) => {
    const { category } = params; // Отримуємо категорію з параметрів маршруту
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                if (!res.ok) {
                    throw new Error('Не вдалося завантажити товари!');
                }
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка: {error}</p>;

    return (
        <div>
            <h2>Товари в категорії: {category}</h2>
            {products.length === 0 ? (
                <p>Товари не знайдені.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Ціна: ${product.price}</p>
                            <button>Купити</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryPage;
