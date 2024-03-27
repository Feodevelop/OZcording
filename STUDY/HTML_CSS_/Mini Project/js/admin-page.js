// 크롤링한 데이터를 아래와 같은 형태의 객체 배열로 가정합니다.
// 추후 데이터베이스에 있는 데이터를 쿼리문으로 불러 올 수 있게 쿼리를 작성해 볼 수 있음
const data = [
    { gender: "공용", category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { gender: "여성", category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { gender: "남성", category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { gender: "공용", category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
    // ...
];

//data 값 앞에 체크박스 구현
const dataTable = document.getElementById('data-table');

data.forEach((item) => {
    const row = dataTable.insertRow();
    const chkCell = row.insertCell(0);

    chkCell.innerHTML = '<input type="checkbox" class="select_chk">';

    row.insertCell(1).innerHTML = item.category;
    row.insertCell(2).innerHTML = item.gender;
    row.insertCell(3).innerHTML = item.brand;
    row.insertCell(4).innerHTML = item.product;
    row.insertCell(5).innerHTML = item.price;
});
//전체선택 기능 구현
const allselectBtn = document.querySelector('.select_all_chk');
allselectBtn.addEventListener('change', function(){
    const boxs = document.querySelectorAll('.select_chk');
    boxs.forEach(chkbox => {
        chkbox.checked = this.checked;
    });
});
//선택항목 삭제버튼 구현
const deleteBtn = document.querySelector('.delete-btn');
deleteBtn.addEventListener('click', function () {
    const checkedRows = document.querySelectorAll('.select_chk:checked');
    checkedRows.forEach(row => {
        row.parentElement.parentElement.remove(); // 체크된 행 삭제
    });
});

// 파일 최종 수정 날짜 가져오기
const lastRetouchDate = new Date(document.lastModified);
const formattedDate = lastRetouchDate.getFullYear() + '/' + (lastRetouchDate.getMonth() + 1) + '/' + lastRetouchDate.getDate();

const lastRetouchElement = document.querySelector('h3');
lastRetouchElement.textContent += `(최종 업데이트: ${formattedDate})`;

//카테고리 대분류 소분류 구현
document.getElementById('inlineFormSelectPref').addEventListener('change', function(){
    const selectCategory = this.value;
    const selectGender = document.getElementById('inlineFormSelectPref1').value;
    const filteredData = data.filter(item => (selectCategory === '전체' || item.category === selectCategory) && (selectGender === '전체' || item.gender === selectGender));
    renderTable(filteredData);
});

document.getElementById('inlineFormSelectPref1').addEventListener('change', function(){
    const selectCategory = document.getElementById('inlineFormSelectPref').value;
    const selectGender = this.value;
    const filteredData = data.filter(item => (selectCategory === '전체' || item.category === selectCategory) && (selectGender === '전체' || item.gender === selectGender));
    renderTable(filteredData);
});

function renderTable(data) {
    dataTable.innerHTML = '';

    data.forEach((item) => {
        const row = dataTable.insertRow();
        const chkCell = row.insertCell(0);

        chkCell.innerHTML = '<input type="checkbox" class="select_chk">';

        row.insertCell(1).textContent = item.category;
        row.insertCell(2).textContent = item.gender;
        row.insertCell(3).textContent = item.brand;
        row.insertCell(4).textContent = item.product;
        row.insertCell(5).textContent = item.price;
    });
}

//검색 기능 구현 (검색어 미입력시 검색되지 않으며, 필터링한 결과값 유지)
document.querySelector('.search-btn').addEventListener('click', function(){
    const searchKeyword = document.getElementById('search').value.trim().toLowerCase();
    
    if (searchKeyword === '') {
        alert('검색어를 입력해주세요.');
    } else {
        const selectCategory = document.getElementById('inlineFormSelectPref').value;
        const selectGender = document.getElementById('inlineFormSelectPref1').value;
        
        const filteredData = data.filter(item => {
            return (selectCategory === '전체' || item.category === selectCategory) &&
                   (selectGender === '전체' || item.gender === selectGender) &&
                   (item.category.toLowerCase().includes(searchKeyword) ||
                   item.gender.toLowerCase().includes(searchKeyword) ||
                   item.brand.toLowerCase().includes(searchKeyword) ||
                   item.product.toLowerCase().includes(searchKeyword) ||
                   item.price.toLowerCase().includes(searchKeyword));
        });

        if (filteredData.length === 0) {
            dataTable.innerHTML = '<tr><td colspan="6">검색하신 검색어로 확인되는 항목이 없습니다.</td></tr>';
        } else {
            renderTable(filteredData);
        }
    }
});

//검색창에 엔터기능 비활성화(조회버튼으로만 조회가능)
document.getElementById('search').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});


//페이지네이션 구현(솔직히 지피티 도움받은내용)
const itemsPerPage = 10;
const totalItems = data.length;
let currentPage = 1;

function renderTablePage(page) {
    dataTable.innerHTML = '';

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    for (let i = startIndex; i < endIndex; i++) {
        const item = data[i];
        const row = dataTable.insertRow();
        const chkCell = row.insertCell(0);

        chkCell.innerHTML = '<input type="checkbox" class="select_chk">';

        row.insertCell(1).textContent = item.category;
        row.insertCell(2).textContent = item.gender;
        row.insertCell(3).textContent = item.brand;
        row.insertCell(4).textContent = item.product;
        row.insertCell(5).textContent = item.price;
    }
}

function renderPagination() {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationElement = document.querySelector('.pagination');
    paginationElement.innerHTML = '';

    // 이전 버튼 추가
    const previousButton = document.createElement('li');
    previousButton.classList.add('page-item');
    if (currentPage === 1) {
        previousButton.classList.add('disabled');
    }
    previousButton.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>`;
    previousButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderTablePage(currentPage);
            renderPagination();
        }
    });
    paginationElement.appendChild(previousButton);

    // 페이지 번호 추가
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('li');
        pageButton.classList.add('page-item');
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageButton.addEventListener('click', function() {
            currentPage = i;
            renderTablePage(currentPage);
            renderPagination();
        });
        paginationElement.appendChild(pageButton);
    }

    // 다음 버튼 추가
    const nextButton = document.createElement('li');
    nextButton.classList.add('page-item');
    if (currentPage === totalPages) {
        nextButton.classList.add('disabled');
    }
    nextButton.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>`;
    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            renderTablePage(currentPage);
            renderPagination();
        }
    });
    paginationElement.appendChild(nextButton);
}

// 페이지네이션 및 테이블 첫 페이지 렌더링
renderTablePage(currentPage);
renderPagination();
