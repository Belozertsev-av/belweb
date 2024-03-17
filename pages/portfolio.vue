<template>
    <div class="portfolio" v-if="projects != null">
        <transition-group name="items" tag="div">
            <portfolio-item class="portfolio__item" v-for="item in filtredProjects" :key="item.id" :item="item">
            </portfolio-item>
        </transition-group>
    </div>

</template>

<script setup>
import PortfolioItem from '~/components/portfolio/PortfolioItem.vue';
const projects = ref(null)
const error = ref({})

const filtredProjects = computed(() => {
    if (projects.value != null) {
        const tempArr = []
        for (let i = 0; i < projects.value.length; i++) {
            if (projects.value[i].homepage != null) tempArr.unshift(projects.value[i])
            else tempArr.push(projects.value[i])
        }
        return tempArr
    }

})
onMounted(() => {
    useFetch('/api/projects')
        .then((response) => {
            projects.value = response.data.value.data
            console.log(projects.value)
        })
        .catch((error) => {
            error.value = error
        })
})


</script>

<style lang="scss" scoped>
.portfolio {
    @include adaptive-value('padding', 15, 5, 0);
}

.items-enter-active,
.items-leave-active {
    transition: all 0.5s ease;
}

.items-enter-from,
.items-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>