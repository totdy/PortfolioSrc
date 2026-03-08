<template>
    <article>
        <a :href="atLink" target="_blank">
            <div>
                <img :src="'/assets/' +  logo " :title="at + 'Internship'">
            </div>            
            <h1>
                {{ at }}<img src="/assets/link.svg">
            </h1>
        </a>
        <div>
            <span>{{ title }}</span>
            <span>{{ when }} {{ experienceTime }}</span>
        </div>        
        <div>{{ what }}</div>
        <ul>
            <li v-for="skill in skillsArray" :key="skill">{{ skill }}</li>
        </ul>
    </article>
</template>

<script lang="ts">

export default {
    name: "Experience",
    props: {
        intern: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true
        },
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
            if (years > 1) experienceTime += "s";
        }
        experienceTime += " ";
        if (months > 0) {
            experienceTime += months + " month";
            if (months > 1) experienceTime += "s";
        }

        return { skillsArray, experienceTime };
    }
};
</script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    h1{
        font-size: 2rem;
        font-weight: bold;
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.2);
        padding: 1rem;
        border-radius: 1000rem;
    }
    
    img{        
        height: 1.5rem;
    }
}

ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;   

    li {                
        border-radius: 100rem;
        padding: 0.3rem 0.6rem;
        background-color: rgba(255, 255, 255, 0.2);

        &::marker {
            content: "";
        }
    }
}
</style>
