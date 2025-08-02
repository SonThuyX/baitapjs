// gan error
let isError = false; 
// ham tai ho so ng dung
function fetchUserProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isError) {
                reject("Không thể tải hồ sơ người dùng");
            } else {
                resolve({
                    id: 1,
                    name: "Alice",
                    email: "alice@example.com"
                });
            }
        }, 2000); 
    });
}

async function getUserProfile() {
    try {
        const user = await fetchUserProfile();
        console.log("Thông tin người dùng:", user);
    } catch (error) {
        console.error("Lỗi:", error);
    }
}

getUserProfile();
