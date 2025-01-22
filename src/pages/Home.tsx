import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <h2>중고거래 인기매물</h2>
      <ProductGrid>
        {/* 추후 실제 상품 데이터로 대체될 예정 */}
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard key={index}>
            <ProductImage />
            <ProductInfo>
              <ProductTitle>상품 {index + 1}</ProductTitle>
              <ProductPrice>₩10,000</ProductPrice>
              <ProductLocation>서울 강남구 역삼동</ProductLocation>
              <ProductStats>
                <span>관심 1</span> • <span>채팅 1</span>
              </ProductStats>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProductInfo = styled.div`
  padding: 0.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const ProductLocation = styled.div`
  font-size: 0.875rem;
  color: #868e96;
  margin-bottom: 0.5rem;
`;

const ProductStats = styled.div`
  font-size: 0.875rem;
  color: #868e96;
`;

export default Home;
