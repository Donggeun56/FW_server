let day_temp = [];//옷 종류 구분함수 [아침, 점심, 저녁]
// let set_reg = 'M';
let bw = [];
const shoesC = [3,1];//앞 남자신발 수, 뒤 여자신발 수



function Cloth_change() {
    let bw = [];
        if(weadet.length!==0){
            T_logic();
            for (let ic = 0; ic < 3; ic++) {
                const clothes = set_reg === 'M' ? Cloths_M(day_temp[ic]) : Cloths_W(day_temp[ic]);
    
                document.getElementById(`chara-img${[ic]}`).src = (set_reg === 'M') ? 'cImg/Human_M.png' : 'cImg/Human_W.png';
                document.getElementById(`chara-clo${[ic]}`).src = `cImg/${clothes[0]}.png`;
                document.getElementById(`chara-pan${[ic]}`).src = `cImg/${clothes[1]}.png`;
                document.getElementById(`chara-sho${[ic]}`).src = `cImg/Shoes${Math.floor(Math.random() * shoesC[Number(set_reg==='W')])}_${set_reg}.png`;
                console.log(Number(set_reg==='W'));
                document.getElementById(`chara-umb${[ic]}`).src = bw[ic] ? 'cImg/umbrella.png' : 'cImg/Clean.png';
            }
        }
    }


const set_toggle = document.getElementById('toggle');
// loggedInUserGender 값을 가져옴
const gender = set_toggle.getAttribute('data-gender');
console.log(gender);
// const loggedInUserGender = document.querySelector('script[data-gender]').getAttribute('data-gender');
// console.log(loggedInUserGender);


// const gender = '<%= loggedInUserGender %>';
let set_reg = 'M';

if (gender === 'female') {
    set_reg = 'W';
} else {
    set_reg = 'M';
}

function GenderToggle() {
    const isFemale = set_toggle.checked;
    if (gender === 'female') {
        set_reg = isFemale ? 'M' : 'W';
    } else {
        set_reg = isFemale ? 'W' : 'M';
    }
    Cloth_change();
}

(() => {
    set_toggle.addEventListener('change', GenderToggle);
})();

window.onload = function () {
    weather.searchseoul();
};
    


// const set_toggle = document.getElementById('toggle');
// const gender = '<%= loggedInUserGender %>';
// let set_reg; // 변수를 밖에서 선언

// if (gender === 'female') {
//     set_reg = 'W';
// } else {
//     set_reg = 'M';
// }

// function GenderToggle() {
//     const isFemale =set_toggle.checked;
//     if(gender === 'female'){
//         set_reg = isFemale ? 'M' : 'W';
//     } else{
//         set_reg = isFemale ? 'W' : 'M'
//     }
//     // set_reg = isFemale ? 'W' : 'M';
//     Cloth_change();
// }// 성별 토글 스위치

// (() => {
//     set_toggle.addEventListener('change', GenderToggle);
// })();

// window.onload = function(){
//     weather.searchseoul();

// };

/*
기온별로 A,B,C,D,E단계
성별 선택 랜덤추천
상의(원피스여부) 하의
모자 마스크 우산

*/