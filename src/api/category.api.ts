import { Category } from "../models/category.model";
import { httpClient } from "./http";

export const fetchCategory = async () => {
    try {
        const response = await httpClient.get<{ category_name: string; id: number }[]>("/category");

        // category_name을 name으로 변환
        const formattedCategories: Category[] = response.data.map((item) => ({
            id: item.id,
            name: item.category_name,
        }));

        return formattedCategories;
    } catch (error) {
        console.error("Category fetch failed:", error);
        throw new Error("Failed to fetch categories");
    }
};
