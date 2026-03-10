<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark justify-content-between">
        <div class="d-flex align-items-center">
            <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
            <div class="mr-auto navbar-nav">
                <li class="nav-item">
                    <router-link :to="{ name: 'contactbook' }" class="nav-link">
                        Danh bạ
                        <i class="fas fa-address-book"></i>
                    </router-link>
                </li>
            </div>
        </div>

        <div v-if="isLoggedIn" class="navbar-nav">
            <button class="btn btn-outline-danger btn-sm" @click="logout">
                Đăng xuất <i class="fas fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: !!sessionStorage.getItem("isLoggedIn")
        };
    },
    watch: {
       
        $route() {
            this.isLoggedIn = !!sessionStorage.getItem("isLoggedIn");
        }
    },
    methods: {
        logout() {
            sessionStorage.removeItem("isLoggedIn");
            this.$router.push({ name: "login" });
        },
    },
};
</script>