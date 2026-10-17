// Lấy thẻ HTML chứa chữ chức danh
const textElement = document.getElementById("typing-text");

// Danh sách các câu bạn muốn nó tự động gõ và đổi qua lại
const words = [
    "Frontend Developer \"Tập sự\"",
    "Đang học HTML, CSS & JavaScript",
    "Thích làm web dễ thương ✨"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100; // Tốc độ gõ chữ (mili-giây)

function typeEffect() {
    let currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Đang xóa chữ
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Xóa nhanh hơn gõ
    } else {
        // Đang gõ chữ
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    // Nếu đã gõ xong một câu hoàn chỉnh
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Dừng lại 2 giây trước khi xóa
    } 
    // Nếu đã xóa xong, chuyển sang câu tiếp theo
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Chạy hiệu ứng khi tải trang xong
document.addEventListener("DOMContentLoaded", typeEffect);


// --- TÍNH NĂNG CHUYỂN ĐỔI DARK MODE ---
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    // Bật/tắt class 'dark-mode' cho thẻ body
    document.body.classList.toggle("dark-mode");

    // Đổi biểu tượng mặt trăng 🌙 thành mặt trời ☀️ và ngược lại
    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "☀️";
    } else {
        themeToggleBtn.textContent = "🌙";
    }
});