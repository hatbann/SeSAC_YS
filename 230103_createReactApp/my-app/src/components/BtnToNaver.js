import React, { Component } from 'react';


class BtnToNaver extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{window.open("https://www.naver.com/")}}>네이버로</button>
            </div>
        );
    }
}

export default BtnToNaver;