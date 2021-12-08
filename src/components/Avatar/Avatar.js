import styled from "@emotion/styled";

const ImageWrapper = styled.img`
  border-radius: 50%;
  width: ${(props) => (props.width ? props.width : 50)}px;
  height: ${(props) => (props.height ? props.height : 50)}px;
  cursor: pointer;
`;

export default function (props) {
  return <ImageWrapper src={props.imgSrc ? props.imgSrc : "/src/assets/defaultAvatar.png"} {...props}></ImageWrapper>;
}
