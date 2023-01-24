import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`w-full inline-flex pt-4 pb-3 px-12 bg-[#eee] items-center fixed z-50 justify-between`}
  top: 0px;
  @media (min-width: 425px) and (max-width: 767px) {
    ${tw`px-6`}
  }
  @media (max-width: 424px) {
    ${tw`pt-3 pb-2`}
  }
`;
const LeftContainer = styled.div`
  & svg {
    ${tw`h-10 fill-black`}
  }
`;
const RightContainer = styled.div`
  ${tw`flex`}
  button {
    ${tw`hover:cursor-pointer`}
    & span {
      ${tw`rounded-full`}
      width: 50px;
      height: 5px;
      background-color: black;
      display: block;
      margin: 8px 0;
      transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
    }
    &.active span:nth-child(1) {
      -webkit-transform: translateY(13px) rotate(45deg);
      -ms-transform: translateY(13px) rotate(45deg);
      -o-transform: translateY(13px) rotate(45deg);
      transform: translateY(13px) rotate(45deg);
    }
    &.active span:nth-child(2) {
      opacity: 0;
    }
    &.active span:nth-child(3) {
      -webkit-transform: translateY(-13px) rotate(-45deg);
      -ms-transform: translateY(-13px) rotate(-45deg);
      -o-transform: translateY(-13px) rotate(-45deg);
      transform: translateY(-13px) rotate(-45deg);
    }
    @media (min-width: 1024px) {
      ${tw`hidden`}
    }
  }
`;
const Links = styled.ul`
  ${tw`flex`}
  @media (max-width: 1023px) {
    /* -right-1/2 */
    ${tw`flex-col justify-center items-center absolute bg-gray-700 text-white w-1/2 h-screen top-0 -z-10`}
    right: -50%;
    transition: all 0.5s ease;
    &.active {
      right: 0;
    }
  }
`;
export { Container, LeftContainer, RightContainer, Links };
