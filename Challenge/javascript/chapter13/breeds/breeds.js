const apiRandomDogs = 'https://dog.ceo/api/breeds/image/random/42';
const apiAllBreeds = 'https://dog.ceo/api/breeds/list/all';
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const input = document.querySelector('.filter-text');
const button = document.querySelector('.filter-button');
const select = document.querySelector('.filter-select');
const more = document.querySelector('.more');
const toTheTop = document.querySelector('.top');
const reset = document.querySelector('.reset');

const currentDogs = [];

// 화면에 뿌리는 함수
const displayDogs = (item) => {
    const dogImageDiv = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add('flex-item');
    img.src = item;

    dogImageDiv.append(img);
    main.append(dogImageDiv);
};

// 필터링
button.addEventListener('click', () => {
    main.innerHTML = '';
    let filteredDogs = currentDogs.filter((breed) => {
        return breed.includes(input.value) === true;
    });

    input.value = '';

    filteredDogs.forEach((item) => {
        displayDogs(item);
    });
});

// 셀렉트
select.addEventListener('change', () => {
    main.innerHTML = '';
    let filteredDogs = currentDogs.filter((breed) => {
        return breed.includes(select.value) === true;
    });

    filteredDogs.forEach((item) => {
        displayDogs(item);
    });
});

// 강아지 사진 뿌리기
const randomDogs = () => {
    request1.open('get', apiRandomDogs);
    request1.addEventListener('load', () => {
        const response = JSON.parse(request1.response);
        response.message.forEach((item) => {
            currentDogs.push(item);

            displayDogs(item);
        });
    });
    request1.send();
};

// 셀렉트에 견종 정보 뿌리기
const allBreeds = () => {
    request2.open('get', apiAllBreeds);
    request2.addEventListener('load', () => {
        const response = JSON.parse(request2.response);
        Object.keys(response.message).forEach((item) => {
            const option = document.createElement('option');

            option.innerText = item;
            option.value = item;

            select.append(option);
        });
    });
    request2.send();
};

// 강아지 api 가져오기
window.addEventListener('load', () => {
    // 강아지 사진 뿌리기
    randomDogs();

    // 셀렉트에 견종 정보 뿌리기
    allBreeds();
});

// more
more.addEventListener('click', randomDogs);

// top
toTheTop.addEventListener('click', () => {
    // scrollTo : 주어진 위치로 스크롤을 이동한다.
    window.scrollTo({ top: 0 });
});

// 리셋 버튼 추가하기
reset.addEventListener('click', () => {
    main.innerHTML = '';
    randomDogs();
});
