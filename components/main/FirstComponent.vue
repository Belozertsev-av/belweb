<template>
    <section class="first">
        <div class="first__body">
            <h1>Белозерцев Андрей</h1>
            <h2>Web-разработчик</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem ea, commodi
            porro cumque repellendus reiciendis neque accusantium laborum expedita. Suscipit quaerat
            dolorem eius aut.</p>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.first {
    &__body {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            color: $primaryColor;
            font-size: 32px;
            padding: 50px 0 10px 0;
        }
        h2 {
            color: $secondaryColor;
            font-size: 24px;
        }
        p {
            padding: 20px;
        }
    }
}
</style>