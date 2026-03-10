<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card shadow-lg border-0 rounded-lg">
                    <div class="card-header bg-primary text-white text-center py-4">
                        <h4 class="mb-0 font-weight-bold">ĐĂNG NHẬP HỆ THỐNG</h4>
                    </div>
                    <div class="card-body p-5">
                        <form @submit.prevent="handleLogin">
                            <div class="form-group mb-3">
                                <label class="font-weight-bold">Tên đăng nhập</label>
                                <input v-model="username" type="text" class="form-control form-control-lg" placeholder="Nhập: admin" required />
                            </div>
                            <div class="form-group mb-4">
                                <label class="font-weight-bold">Mật khẩu</label>
                                <input v-model="password" type="password" class="form-control form-control-lg" placeholder="Nhập: admin" required />
                            </div>
                            
                            <div class="alert alert-info py-2 shadow-sm">
                                <small>💡 <b>Ghi Chú:</b> Tài Khoản <u>admin</u> / <u>admin</u></small>
                            </div>
                            
                            <button class="btn btn-primary btn-lg btn-block shadow-sm font-weight-bold">
                                ĐĂNG NHẬP
                            </button>
                        </form>
                        <p v-if="message" class="text-danger mt-3 text-center font-italic">{{ message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            message: ""
        };
    },
    methods: {
        handleLogin() {
            if (this.username === "admin" && this.password === "admin") {
                sessionStorage.setItem("isLoggedIn", "true");
                this.$router.push({ name: "contactbook" });
            } else {
                this.message = "Tên đăng nhập hoặc mật khẩu không đúng!";
            }
        }
    }
}
</script>

<style scoped>
.card {
    transition: all 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
}
.btn-primary {
    background: linear-gradient(45deg, #007bff, #0056b3);
    border: none;
}
.btn-primary:hover {
    background: linear-gradient(45deg, #0056b3, #004085);
}
</style>