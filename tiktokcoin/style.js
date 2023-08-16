var customCoin = document.getElementById("customCoin");
var outClick = document.getElementById("outClick");
var onClick = document.getElementById("onClick");

if (customCoin.classList.contains("active")) {
  outClick.style.display = "none";
  onClick.style.display = "block";
} else {
  onClick.style.display = "none";
  outClick.style.display = "block";
}

$(".item").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  if (customCoin.classList.contains("active")) {
    outClick.style.display = "none";
    onClick.style.display = "block";
  } else {
    onClick.style.display = "none";
    outClick.style.display = "block";
  }
});

// Lắng nghe sự kiện khi input thay đổi
document.getElementById('inputPrice').addEventListener('input', function() {
  // Lấy giá trị từ input
  var inputValue = this.value;
  
  // Tìm thẻ div hiển thị kết quả
  var resultDiv = document.getElementById('resultDiv');
  
  // Cập nhật nội dung của div với giá trị mới
  resultDiv.innerText = inputValue;
});
