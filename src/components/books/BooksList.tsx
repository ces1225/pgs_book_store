import { styled } from 'styled-components';
import BookItem from './BookItem';
import { Book } from '../../models/book.model';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { QUERYSTRING } from '../../constants/querystring';
import { ViewMode } from './BooksViewSwitcher';

// const dummyBook: Book = {
//     id: 1,
//     title: "어린 왕자",
//     img: 101,
//     category_id: 0, // 예: 동화
//     form: "Hardcover",
//     isbn: "978-3-16-148410-0",
//     summary: "사막에서 어린 왕자를 만난 조종사의 이야기입니다.",
//     detail: "어린 왕자는 다양한 행성을 여행하며 인생의 의미를 찾고 사람들과의 관계를 배웁니다.",
//     author: "앙투안 드 생텍쥐페리",
//     pages: "96",
//     contents: "어린 왕자가 행성을 여행하며 만난 사람들과 그로부터 배운 깨달음들",
//     price: 15000,
//     likes: 250,
//     pubDate: "1943-04-06"
// };

interface Props {
    books : Book[];
}

interface BooksListStyleProps {
    view : ViewMode
}

function BooksList( {books} : Props) {
    const location = useLocation();
    const [view, setView] = useState<ViewMode>('grid');

    useEffect(()=>{
        const params = new URLSearchParams(location.search);
        if (params.get(QUERYSTRING.VIEW)){
            setView(params.get(QUERYSTRING.VIEW) as ViewMode);
        }
    }, [location.search] )

    return (
        <div>
            <BooksListStyle view={view}>
                {books.map((item) => (
                    <BookItem key = {item.id} book ={item} view={view}/>
                ))}
            </BooksListStyle>
        </div>
    )
}

const BooksListStyle = styled.div<BooksListStyleProps>`
    display : grid;
    grid-template-columns: ${({view}) => (view === "grid"  ? "repeat(4,1fr);" : "repeat(1,1fr);")};
    gap : 24px;
`;

export default BooksList;