<template>
    <div class="page container mt-3">
        <h4>Tạo liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="uploadContact" />
        <p class="text-success">{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import ContactService from '../services/contact.service';

export default {
    components: {
        ContactForm
    },
    data() {
        return {
            contact: {}, // Khởi tạo đối tượng rỗng cho liên hệ mới [cite: 727]
            message: ""
        }
    },
    methods: {
        async uploadContact(data) {
            try {
                // Gọi dịch vụ tạo mới liên hệ từ backend [cite: 104-106]
                await ContactService.create(data);
                this.message = "Liên hệ được tạo thành công.";
                alert("Liên hệ đã được lưu thành công!");
                // Sau khi lưu xong, chuyển hướng về trang danh sách [cite: 672]
                this.$router.push({ name: "contactbook" });
            }
            catch (error) {
                console.log(error);
                this.message = "Có lỗi xảy ra khi tạo liên hệ.";
            }
        }
    },
}
</script>