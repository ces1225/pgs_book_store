import { styled } from 'styled-components';
import { BookDetail } from '../../models/book.model';
import Button from '../common/Button';
import { FaHeart } from 'react-icons/fa';

interface Props {
    book : BookDetail;
    onClick : () => void;
}

function LikeButton( { book , onClick } : Props ) {
    return (
    <LikeButtonStyle size = "medium" scheme = {book.liked ? "like" : "normal"}
    onClick={onClick} >
        <FaHeart />
        {book.likes}
    </LikeButtonStyle>
    )
}
//컴포넌트를 가져와서 스타일할 때는, 이 것 자체가 컴포넌트가 된다.
const LikeButtonStyle = styled(Button)`
    display: flex;
    gap : 6px;
    svg {
        color : inherit;
        *{
            color : inherit;
        }
    }
`;

export default LikeButton;