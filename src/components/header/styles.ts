import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`bg-[#aaa]`}
  & svg {
    ${tw`h-[40px] w-auto fill-white`}
  }
`;

export default Container;
