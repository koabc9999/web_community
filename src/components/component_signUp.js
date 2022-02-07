import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

import cat from '../images/cat.jpg';

const Container = styled.div`
    margin: 2% 32%;
    padding: 20px;
    width: 30;
    height: 740px;
    border-radius: 10px;
    background: white;
`;

const CatImage = styled.div`
    background-image: url(${cat});
    width: 88%;
    height: 48%;
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

// 아이디 중복 확인 버튼을 위해서 가로 길이가 좀 더 짧은 입력창
const IDInput = styled.input`
    position: relative;
    overflow: hidden;
    width: 75%;
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

const IDButton = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 40px;
    background-color: mediumpurple;
    border-radius: 0;
    color: #fff;
    width: 15%;
    text-align: center;
`;

const StyledText = styled.text`
    margin: 100px 0px 0px 5px;
`;
const StyledLink = styled(Link)`
    color: blue;
`;

function ComponentSignUp() {
    const [newAccount, setNewAccount] = useState({// state를 선언해주는데 object 행태로 해줌
        name: "",
        id: "",
        password: "",
        pwcheck: "",
    });

    const onChangeAccount = (e) => {// 내부의 정보가 바뀌었을 때 state를 바꿔주도록 실행하는 함수
        setNewAccount({
            ...newAccount,
            [e.target.name]: e.target.value,
        });
    };

    const onButtonPressed = (e) => {// 회원가입 버튼이 눌렸을때 실행되는 함수
        console.log(`${newAccount.name}, ${newAccount.id}, ${newAccount.password}, ${newAccount.pwcheck}`);// 입력이 어떤게 들어왔는지 콘솔에 띄워줌
        if(newAccount.name === "" || newAccount.id === "" || newAccount.password === "" || newAccount.pwcheck === "") {// 비어있는 칸은 없는지 확인
            alert("모든 칸을 채워넣어야 합니다!");
        }
        else if(newAccount.password !== newAccount.pwcheck) {// 비밀번호와 비밀번호 확인이 같은지 확인
            alert("비밀번호가 동일하지 않습니다!");
        }
        else {// 입력이 온전하게 잘 되어서 회원가입이 완료됨
            axios.post('/user_inform/onSignUp', null, {
                params: {// 넘겨줄 정보로 param이라는 객체를 넘겨줌
                    'user_name': newAccount.name,
                    'user_id': newAccount.id,
                    'user_pw': newAccount.password
                }
            })
            .then(res => {// 서버에서 온 응답을 res에 넣고 이후 코드를 실행해줌
                console.log(res);
            });
        }
    }

    return (
        <Container>
            <CatImage></CatImage>
            <StyledText>이름</StyledText>
            <br/>
            <Input
                id="name"
                name="name"
                type="text"
                placeholder="이름"
                onChange={onChangeAccount}
            />
            <br/>
            <StyledText>아이디</StyledText>
            <br/>
            <IDInput
                id="id"
                name="id"
                type="text"
                placeholder="아이디"
                onChange={onChangeAccount}
            />
            <IDButton>중복확인</IDButton>
            <StyledText>비밀번호</StyledText>
            <br/>
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호"
                onChange={onChangeAccount}
            />
            <br/>
            <StyledText>비밀번호 확인</StyledText>
            <br/>
            <Input
                id="pwcheck"
                name="pwcheck"
                type="password"
                placeholder="비밀번호 확인"
                onChange={onChangeAccount}
            />
            <Button onClick = {onButtonPressed}>회원가입 요청</Button>
            <StyledLink to="/">로그인으로 돌아가기</StyledLink>
        </Container>
    );
}

export default ComponentSignUp;