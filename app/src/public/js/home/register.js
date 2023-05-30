"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
password = document.querySelector("#password"),
confirmPassword = document.querySelector("#confirm-password"),
registerBtn = document.querySelector("#button");
const toggleButton = document.querySelector(".toggleButton");

// gender = document.querySelector('input[name="gender"]:checked');


registerBtn.addEventListener("click", register);

function register(){
    const genderRadios = document.querySelectorAll('input[name="gender"]:checked');
    const selectedGender =  genderRadios.length ? genderRadios[0].value : "male";
    


    if(!id.value || !password.value || !name.value || 
        confirmPassword.value != password.value){
        if(!id.value) return alert("아이디를 입력해주십시오.");
        if(!name.value) return alert("이름을 입력해주십시오.");
        if(!password.value) return alert("비밀번호를 입력해주십시오.");
        if(!confirmPassword.value) return alert("비밀번호 확인을 입력해주십시오.");
        if(password.value !== confirmPassword.value) return alert("비밀번호가 맞지 않습니다.");
        // if (!genderRadios.length) return alert("성별을 선택해주십시오.");
    }
    

    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
        gender: selectedGender,
    };

    // 데이터 전달, 회원가입 경로로
    fetch('/register', {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        // 제이슨 형태로 해당 오브젝트 데이터를 문자열로 바꿔서 json올 바꾸겠다.
        body: JSON.stringify(req),
    })
    .then((res)=> res.json())
    .then((res)=>{
        if(res.success){ //로그인시 이동할 경로
            location.href = "/login?gender=" + selectedGender
        } else{
            alert(res.msg) // 회원가입 실패시 ctrl에 있는 실패 메시지 가져옴
        }
    })
    .catch((err) => { // 에러 발생시 콘솔에 찍음
        console.error(new Error("회원가입 중 에러 발생"));
    });

    // Set toggle button state based on gender
    // const genderToggleButtons = document.querySelectorAll(".cam");
    // genderToggleButtons.forEach((button) => {
    //     const genderToggleButtons = document.querySelectorAll(".cam");
    //     genderToggleButtons.forEach((button) => {
    //         const buttonGender = button.getAttribute("data-gender");
    //         if (buttonGender === "female" && selectedGender === "female") {
    //             button.classList.add("active");
    //         } else {
    //             button.classList.remove("active");
    //         }
    //     });
    // })
}
// enterkey event
function EnterkeyRe(){
    if(window.event.keyCode == 13){ // 엔터 키 번호가 13번
        // enter key event 내용
        register()
    } 
}