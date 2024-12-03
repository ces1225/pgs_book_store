import { Book } from "@/models/book.model";
import { http, HttpResponse } from "msw";
import { fakerKO as faker } from "@faker-js/faker"

const bestBooksData: Book[] = Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    title: faker.lorem.sentence(),
    img: faker.number.int({ min: 100, max: 200 }), // 정수 생성
    category_id: faker.number.int({ min: 0, max: 2 }), // 정수 생성
    form: "종이책",
    isbn: faker.string.numeric(13), // 13자리 숫자 ISBN
    summary: faker.lorem.paragraph(),
    detail: faker.lorem.paragraph(),
    author: faker.person.firstName(),
    pages: faker.number.int({ min: 100, max: 500 }), // 정수 생성
    contents: faker.lorem.paragraph(),
    price: faker.number.int({ min: 10000, max: 50000 }), // 정수 생성
    likes: faker.number.int({ min: 0, max: 100 }), // 정수 생성
    pubDate: faker.date.past().toISOString(), // 과거 날짜 ISO 형식으로 변환
}));

export const bestBooks = http.get("http://localhost:9999/books/best", () =>{
    return HttpResponse.json(bestBooksData, {
        status : 200,
    })
});
