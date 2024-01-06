<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__body">
                Автор: Белозерцев Андрей
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
html.dark-mode{
    .footer{
        background-color: $backgroundColorDark;
    }
}
.footer {
    box-shadow: 0 0 4px $shadowColor;
    background-color: $backgroundColor;
    &__body {
        margin: 0 auto;
        width: 100%;
        @include adaptive-value("padding", 30, 15, 0);
        text-align: center;
    }
}

</style>