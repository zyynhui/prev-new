<template>
    <div class="public">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#6aacef" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">左右沙发</template>
                <el-menu-item index="2-1">沙克家具</el-menu-item>
                <el-menu-item index="2-2"><img src="../image/set.jpg" style="width:19px;height:18px;margin-right:10px;">管理</el-menu-item>
                <el-menu-item index="2-3"><img src="../image/add.png" style="width:19px;height:18px;margin-right:10px;">新增</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">基础中心</el-menu-item>
            <el-menu-item index="2">门店管理</el-menu-item>
            <el-menu-item index="2">案例管理</el-menu-item>
            <el-menu-item index="2">营销活动管理</el-menu-item>
            <el-menu-item index="2">商品管理</el-menu-item>
        </el-menu>
        <p>当前登陆：admin<span>注销</span></p>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.public {
    width: 100%;
    height: 100%;
    position: relative;

    p {
        position: absolute;
        top: 15px;
        right: 30px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        font-weight: normal;
        color: #ffffff;
    }

    span {
        margin-left: 20px;
        width: 72px;
        height: 30px;
        display: inline-block;
        background-color: #589fe5;
        border-radius: 94px;
        text-align: center;
        line-height: 30px;
    }
}
</style>