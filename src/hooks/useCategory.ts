import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "../models/category.model";

export const useCategory = () => {
    const [category, setCategory] = useState<Category[]>([]);

    useEffect(()=>{
        fetchCategory().then((category) => {
            const categoryWithAll = [
                {
                    id : null,
                    name : "전체",
                },
                ...category
            ];

            setCategory(categoryWithAll);
        });
    },[]);

    return { category };
};