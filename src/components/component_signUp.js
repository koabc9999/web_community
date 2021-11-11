import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import cat from '../images/cat.jpg';

const Container = styled.div`
    margin: 2% 32%;
    padding: 20px;
    width: 30;
    height: 720px;
    border-radius: 10px;
    background: white;
`;

const CatImage = styled.div`
    background-image: url(${cat});
    width: 88%;
    height:50%;
    margin: 0.4% 6% 3%;
`;

const Input = styled.input`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 40px;
    margin: 0 0 8px;
    padding: 5px 39px 5px 11px;
    border: solid 1px #dadada;
    background: #fff;
    box-sizing: border-box;
`;

const Button = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 49px;
    display: block;
    width: 100%;
    height: 49px;
    margin: 7px 0 7px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 0;
    background-color: mediumpurple;
`;

const StyledText = styled.text`
    margin: 100px 0px 0px 5px;
`;
const StyledLink = styled(Link)`
    color: blue;
`;

function ComponentSignUp() {

    return (
        <Container>
            <CatImage></CatImage>
            <StyledText>이름</StyledText>
            <Input
                id="name"
                name="name"
                type="text"
                placeholder="이름"
            />
            <StyledText>아이디</StyledText>
            <Input
                id="id"
                name="id"
                type="text"
                placeholder="아이디"
            />
            <StyledText>비밀번호</StyledText>
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호"
            />
            <Input
                id="pwcheck"
                name="pwcheck"
                type="password"
                placeholder="비밀번호 확인"
            />
            <Button>회원가입 요청</Button>
            <StyledLink to="/">로그인으로 돌아가기</StyledLink>
        </Container>
    );
}

export default ComponentSignUp;