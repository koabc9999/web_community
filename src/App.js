import React, {useEffect, useState} from 'react';
import ScreenLogin from './screen/screen_login.js';
import ScreenMain from './screen/screen_main.js';


function App() {
    const [isLogin, setIsLogin] = useState(false);// 로그인 여부를 boolean 값으로 저장하는 변수를 state로 선언

    useEffect(() => {// 해당  App.js 컴포넌트가 로드 될 때 먼저 실행되는 코드
        if(sessionStorage.getItem('user_id') === null) {// 세션 스토리지에 저장된 값이 없다면
            console.log('isLogin ?? :: ', isLogin);
        } else {// 해당 세션에 아이템이 뭐라도 있다면 로그인 되어있는 상태임
            setIsLogin(true);
            console.log('isLogin ?? :: ', isLogin);
        } 
    });

    return (
        <div>
            {isLogin ? <ScreenMain isLogin={isLogin}></ScreenMain> : <ScreenLogin></ScreenLogin>}
        </div>
    );
}

export default App;