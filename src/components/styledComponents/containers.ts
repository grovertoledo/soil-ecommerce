import styled from 'styled-components';
import tw from 'twin.macro';

const MainContainer = styled.div`
  ${tw`w-full`}
`;

const InnerContainer = styled.div`
  ${tw`flex h-auto mx-auto justify-center items-center`}
  @media (min-width: 320px) {
    width: 272px;
  }
  @media (min-width: 375px) {
    width: 327px;
  }
  @media (min-width: 425px) {
    width: 377px;
  }
  @media (min-width: 768px) {
    width: 688px;
  }
  @media (min-width: 1024px) {
    width: 792px;
  }
  @media (min-width: 1440px) {
    width: 1170px;
  }
`;

export { MainContainer, InnerContainer };
