      // 크롤링한 데이터를 아래와 같은 형태의 객체 배열로 가정합니다.
      // 추후 데이터베이스에 있는 데이터를 쿼리문으로 불러 올 수 있게 쿼리르 작성해 볼 수 있음
      const data = [
        { gender: "공용", category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
        { gender: "여성", category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
        { gender: "남성", category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
        { gender: "공용", category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
        // ...
    ];
    
    const dataTable = document.getElementById('data-table');
    const chk = document.createElement("checkbox")

    data.forEach((item) => {
        const row = dataTable.insertRow();
        const chkCell = row.insertCell(0);

        chkCell.innerHTML = '<input type="checkbox" class="select_chk">'

        row.insertCell(1).innerHTML = item.category;
        row.insertCell(2).innerHTML = item.gender;
        row.insertCell(3).innerHTML = item.brand;
        row.insertCell(4).innerHTML = item.product;
        row.insertCell(5).innerHTML = item.price;
    });
    const allselectBtn = document.querySelector('.select_all_chk');
    allselectBtn.addEventListener('change', function(){
      const boxs = document.querySelectorAll('.select_chk');
      boxs.forEach(chkbox => {
          chkbox.checked = this.checked;
      });
    });

    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
      const checkedRows = document.querySelectorAll('.select_chk:checked');
      checkedRows.forEach(row => {
          row.parentElement.parentElement.remove(); // 체크된 행 삭제
      });
  });
// 파일 최종 수정 날짜 가져오기
const lastretouchDate = new Date(document.lastModified);
const formattedDate = lastretouchDate.getFullYear() + '/' + (lastretouchDate.getMonth() + 1) + '/' + lastretouchDate.getDate();

// HTML에 표시
const lastretouchElement = document.querySelector('h3');
lastretouchElement.textContent += `(최종 업데이트: ${formattedDate})`;

document.getElementById('category').addEventListener('change', function(){
    const selectCate = this.value;
    if(selectCate === '전체'){
        row
    }
})