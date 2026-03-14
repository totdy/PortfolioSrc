<template>
    <article>
        <a :href="atLink" target="_blank">
            <span>
                <img :src="baseUrl + '/assets/icons/' + logo" :title="at + ' logo'">
            </span>
        </a>
        <div>
            <a :href="atLink" target="_blank">
                <h3>{{ at }}<img src="/assets/icons/link.svg"></h3>
            </a>
            <slot></slot>
        </div>
    </article>
</template>

<script setup lang="ts">
const props = defineProps(
    {
        at: {
            type: String,
            required: true
        },
        atLink: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        }
    })

const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>

article {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

h3{
    font-size: 1.3rem;
    font-weight: normal;
}

span {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: oklch(from var(--bg2) calc(l/2 + 0.5) c h);

    padding: 0.6rem;
    width: 3rem;
    height: 3rem;
    border-radius: 1000rem;

    img {
        width: -webkit-fill-available;
        aspect-ratio: 1/1;
    }
}
</style>
