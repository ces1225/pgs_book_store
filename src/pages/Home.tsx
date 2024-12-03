import { styled } from 'styled-components';
import MainReview from '@/components/main/MainReview';
import { useMain } from '@/hooks/useMain';
import Title from '@/components/common/Title';
import MainNewBooks from '@/components/main/MainNewBooks';
import MainBest from '@/components/main/MainBest';
import Banner from '@/components/common/banner/Banner';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function Home() {
    // useMain에서 데이터를 fetch해온다. 하단에서는 데이터를 정제해서 보여준다.
    const { reviews , newBooks , bestBooks , banners } = useMain();
    const { isMobile } = useMediaQuery();

    console.log("isMobile", isMobile)

    return (
        <HomeStyle>
            {/*배너*/}
            <Banner banners={banners} />

            {/*베스트셀러*/}
            <section className='section'>
                <Title size="large">베스트셀러</Title>
                <MainBest books={bestBooks} />
            </section>
            {/*신간*/}
            <section className='section'>
                <Title size="large">신간 안내</Title>
                <MainNewBooks books={newBooks} />
            </section>

            {/*리뷰*/}
            <section className='section'>
                <Title size="large">리뷰</Title>
                <MainReview reviews={reviews} />
            </section>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap : 24px;
`;

export default Home;

