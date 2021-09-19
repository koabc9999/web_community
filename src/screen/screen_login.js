import React, {useState} from 'react';
import styled from 'styled-components';// 스타일드 컴포넌트 패키지를 사용
import pepe from "../images/pepe.jpg"


// input과 button을 담아줄 컨테이너의 스타일 선언
const Container = styled.div`
    margin: 2% 32%;
    padding: 20px;
    width: 30%;
    height: 700px;
    border-radius: 10px;
    background: white;
`;

const PepeImage = styled.div`
    background-image: url(${pepe});
    width: 88%;
    height: 60%;
    margin: 6%
    `
    
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
`

const Button = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 49px;
    display: block;
    width: 100%;
    height: 49px;
    margin: 16px 0 7px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 0;
    background-color: mediumpurple;
`

function ScreenLogin() {
    const [account, setAccount] = useState({
        id: "",
        password: "",
    });

    const onChangeAccount = (e) => {// 입력이 들어왔을 때 작동하는 기능. 자신을 저장한 뒤 바뀔 부분을 바꿔줌
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };
    const onButtonPressed = (e) => {
        alert("login operation");
    }

    //<img src="./images/pepe.jpg" />
    return (
        <Container>
            <style>{'body {background-color: mediumpurple; }'}</style>
            <PepeImage />
            <Input
                type="text"
                id="id"
                name="id"
                placeholder="아이디를 입력해 주세요"
                onChange={onChangeAccount}
            />
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={onChangeAccount}
            />
            <Button onClick={onButtonPressed}>로그인</Button>
        </Container>
    )
}

export default ScreenLogin;