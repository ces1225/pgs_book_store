import { useEffect, useState } from "react"
import { BookDetail } from "../models/book.model";
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAlert } from "./useAlert";
import { useAuthStore } from "../store/authStore";
import { addCart } from "../api/carts.api";


export const useBook = ( bookId : string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const { isloggedIn } = useAuthStore();
    const [cartAdded , setCartAdded] = useState(false);
    const showAlert = useAlert();
    

    const likeToggle = () => {
        console.log("Is logged in:", isloggedIn);
        if  (!isloggedIn) {
            showAlert('로그인이 필요합니다.')
            return;
        }

        if(!book) return;

        if (book.liked && bookId) {
        // like 상태 => unlike
            unlikeBook(Number(bookId)).then(()=>{
                setBook({
                    ...book,
                    liked : false,
                    likes : book.likes - 1
                })
            })

        } else {
            likeBook(Number(bookId)).then(()=>{
                setBook({
                    ...book,
                    liked:true,
                    likes:book.likes + 1
                })
            })
        console.log(book);
        console.log(bookId)
        }
    }

    const addToCart = (quantity : number) => {
        if (!book) return;
        
        addCart({
            book_id : book.id,
            quantity : quantity
        }).then(()=> {
            setCartAdded(true);
            setTimeout(()=>{
                setCartAdded(false);
            }, 3000);
        })
    }

    useEffect(()=>{
        if (!bookId) return;

        console.log("Fetching book with ID:", bookId);
        fetchBook(bookId).then((book)=> {
            console.log("Fetched book:", book);
            setBook(book);
        });
    }, [bookId]);

    return { book , likeToggle , addToCart , cartAdded };
};
