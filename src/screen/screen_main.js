import React from 'react';


function ScreenMain(props) {
    const isLogin = props.isLogin;

    const onLogout = () => {
        sessionStorage.removeItem('user_id');// 세션 스토리지에 있는 아이템을 삭제해준다
        document.location.href = '/';// index 화면으로 전환해준다
    }

    return(
        <div>
            <div>
                <h2>메인 페이지</h2>
            </div>
            <div>
                <button type='button' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ScreenMain;