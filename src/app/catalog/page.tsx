import React from 'react'
import Link from 'next/link'
import category from '../[category]/page'
import { json } from 'stream/consumers'

// src/lib/getCategories.ts
export const getCategories = async (): Promise<string[]> => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    if (!res.ok) {
        throw new Error('Не вдалося завантажити категорії!');
    }
    const categories = await res.json();
    return categories;
};




export default function catalogPage({ categories }: { categories: string[] }) {
    return (
        <div className="category-container">
            <h2 className="category-title">
            </h2>
            <ul className="category-list">
                {categories.map((category) => (
                    <li key={category}>
                        <Link href={`/catalog/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


