const blowButton = document.getElementById("blow-button");
const birthdayScreen = document.getElementById("birthday-screen");
const letterScreen = document.getElementById("letter-screen");
const cake = document.querySelector(".cake");
const flames = document.querySelectorAll(".flame");
const letter = document.querySelector(".letter");

blowButton.addEventListener("click", () => {

    // جلوگیری از کلیک دوباره
    blowButton.disabled = true;

    // خاموش شدن شعله‌ها
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.animation = "none";
            flame.style.transition = "opacity 2s ease";
            flame.style.opacity = "0";
        }, index * 150);
    });

    // محو شدن کیک
    setTimeout(() => {
        cake.style.transition = "opacity 0.8s ease";
        cake.style.opacity = "0";
    }, 700);

    // محو شدن صفحه اول و نمایش نامه
    setTimeout(() => {
        birthdayScreen.style.transition = "opacity 2s ease";
        birthdayScreen.style.opacity = "0";

        setTimeout(() => {
            birthdayScreen.classList.add("hidden");
            letterScreen.classList.remove("hidden");

            setTimeout(() => {
                letter.classList.add("show");
            }, 100);
        }, 700);

    }, 1500);
});

