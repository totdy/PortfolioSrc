<template>
    <article>
        <div class="title">{{ title }}</div>
        <div>{{ at }} 🌍{{ where }}</div>
        <div>{{ experienceTime }} • {{ when }}</div>
        <div>{{ what }}</div>
        <div class="skills">
            <div v-for="skill in skillsArray" :key="skill">{{ skill }}</div>        
        </div>
    </article>
</template>

<script lang="ts">
export default {
    name: 'Experience',
    props: {
        title: {
            type: String,
            required: true
        },
        at: {
            type: String,
            required: true
        },
        where: {
            type: String,
            required: true
        },
        when: {
            type: String,
            required: true
        },
        what: {
            type: String,
            required: true
        },
        skills: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const skillsArray = props.skills.split(",");

        const [experienceStart, experienceEnd] = props.when.split(" - ");
        const start = new Date(experienceStart || "");
        const end = new Date(experienceEnd || "");
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }
        months++;

        let experienceTime = "";
        if (years > 0) {
            experienceTime += years + " year";
            if(years > 1)experienceTime += "s";            
        }
        experienceTime += " ";
        if(months > 0){
            experienceTime += months + " month";
            if(months > 1)experienceTime += "s";
        }

        return { skillsArray, experienceTime };
    }
};
</script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.title {
    font-size: 1.2em;
    font-weight: bold;
}
.skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;

    div{
        border:     1px solid black;
        border-radius: 100vw;
        padding: 5px 10px;
    }
}
</style>
