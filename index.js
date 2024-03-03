function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var subscribeBtn = document.getElementById("subscribeBtn");
    
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
        subscribeBtn.removeAttribute("disabled");
    } else {
        subscribeBtn.setAttribute("disabled", "disabled");
    }
}
function toggleContent() {
    var content1 = document.getElementById("content1");
    var content2 = document.getElementById("content2");

    if (content1.classList.contains("java")) {
        content1.classList.remove("java");
        content2.classList.add("java");
    } else {
        content1.classList.add("java");
        content2.classList.remove("java");
    }
}

// function toggleContent() {
//     var content1 = document.getElementById("content1");
//     var content2 = document.getElementById("content2");

//     if (content1.classList.contains("hidden")) {
//         content1.classList.remove("hidden");
//         content2.classList.add("hidden");
//     } else {
//         content1.classList.add("hidden");
//         content2.classList.remove("hidden");
//     }
// }