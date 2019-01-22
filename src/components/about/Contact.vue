<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <h4 class="card-text">273472805@qq.com</h4>
            <router-link :to="{name:'phoneNumber'}">电话</router-link>
            <router-link :to="{name:'personName'}">联系人</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
