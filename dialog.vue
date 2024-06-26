<template>
    <el-dialog v-model="dialogVisible" title="Custom Dialog" :visible="dialogVisible" @close="handleClose">
        <p>Content of the dialog</p>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="handleConfirm">Confirm</el-button>
        </span>
    </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElDialog, ElButton } from 'element-plus';

export default defineComponent({
    components: {
        ElDialog,
        ElButton,
    },
    setup() {
        const dialogVisible = ref(false);

        const handleClose = () => {
            dialogVisible.value = false;
        };

        const handleConfirm = () => {
            // Handle confirm logic here
            dialogVisible.value = false;
        };

        return {
            dialogVisible,
            handleClose,
            handleConfirm,
        };
    },
});
</script>

<style scoped>
/* Add your custom styles here */
</style>