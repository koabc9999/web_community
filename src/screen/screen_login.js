import React, {useState} from 'react';
import styled from 'styled-components';// 스타일드 컴포넌트 패키지를 사용
import axios from 'axios';
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
    const [account, setAccount] = useState({// account의 초기 설정을 다음과 같은 object로 해주었음
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
        console.log('clicked login');
        console.log('ID : ', account.id);
        console.log('PW : ', account.password);

        axios.post('/user_inform/onLogin', null, {
            params: {
                'user_id': account.id,
                'user_pw': account.password
            }
        })
        .then(res => {
            console.log(res);
            console.log('res.data.userId :: ', res.data.userId);
            console.log('res.data.message :: ', res.data.message);
            if(res.data.userId === undefined) {
                // 아이디가 데이터베이스에 존재하지 않는 경우
                console.log('====================', res.data.message);
                alert('입력하신 아이디가 존재하지 않습니다');
            } else if(res.data.userId === null) {
                // 아이디는 존재하지만 비밀번호가 일치하지 않을 경우
                console.log('====================', '입력하신 비밀번호가 일치하지 않습니다.');
                alert('입력하신 비밀번호가 일치하지 않습니다.');
            } else if(res.data.userId === account.id) {
                // 아이디, 비밀번호가 모두 일치하는 경우. userId -> userId, msg -> undefined
                console.log('====================', '로그인 성공');
                sessionStorage.setItem('user_id', account.id);
            }
            // 작업이 완료되면 새로고침
            document.location.href = '/';
        })
        .catch();
    };

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