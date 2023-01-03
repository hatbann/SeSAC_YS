//React 따라하기
function HelloWorldButton() {
    const [isClick, setIsclick] = React.useState("It isn't clicked");
    console.log(isClick);
    return React.createElement("button", 
        { onClick: ()=>{isClick == "It isn't clicked" ? setIsclick("It is Clicked!") : setIsclick("It isn't clicked")}}, 
        isClick);
}

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorldButton));