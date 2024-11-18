import React from "react";
import { render } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";

const dummyBook = {
    id: 1,
    title: "어린 왕자",
    img: 101,
    category_id: 0, // 예: 동화
    form: "Hardcover",
    isbn: "978-3-16-148410-0",
    summary: "사막에서 어린 왕자를 만난 조종사의 이야기입니다.",
    detail: "어린 왕자는 다양한 행성을 여행하며 인생의 의미를 찾고 사람들과의 관계를 배웁니다.",
    author: "앙투안 드 생텍쥐페리",
    pages: 96,
    contents: "어린 왕자가 행성을 여행하며 만난 사람들과 그로부터 배운 깨달음들",
    price: 15000,
    likes: 250,
    pubDate: "1943-04-06"
};

describe("BookItem", () => {
    it("렌더 여부", () => {
        const {getByText , getByAltText } = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBook} />
            </BookStoreThemeProvider>
        );

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText("15,000원")).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
        expect(getByText(dummyBook.pubDate)).toBeInTheDocument();
        expect(getByAltText(dummyBook.title)).toHaveAttribute("src", `http://picsum.photos/id/${dummyBook.img}/600/600`);
    });
});