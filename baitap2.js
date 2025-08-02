// du lieu dang nhap
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "st" && password === "st") {
                resolve({ token: "BIN", userId: 2310 });
            } else {
                reject("Tên đăng nhập hoặc mật khẩu không đúng!");
            }
        }, 1500); 
    });
}

//lay token
function getPosts(userId, token) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token === "BIN" && userId === 2310) {
                resolve(["Bài viết 1", "Bài viết 2", "Bài viết 3"]);
            } else {
                reject("Token không hợp lệ hoặc người dùng không tồn tại!");
            }
        }, 2000); 
    });
}

//check dang nhap va check token
async function processLoginAndFetchPosts(username, password) {
    try {
        console.log("🔐 Đang đăng nhập...");
        const { token, userId } = await loginUser(username, password);
        console.log("✅ Đăng nhập thành công:", { token, userId });

        console.log("📦 Đang lấy bài viết...");
        const posts = await getPosts(userId, token);
        console.log("✅ Danh sách bài viết cho userId", userId, "là:", posts);
    } catch (error) {
        console.error("❌ Lỗi:", error);
    }
}
// cai nay la nhap tk mk
processLoginAndFetchPosts("st", "st");