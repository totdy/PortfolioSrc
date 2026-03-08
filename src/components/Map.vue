<template>
    <fieldset>
        <legend>Based In Porto, Portugal <img src="/assets/pt.png" alt="Portugal flag" title="Portugal flag"></legend>
        <div class="map" ref="mapContainer"></div>
    </fieldset>    
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue"
import L from "leaflet"

const mapContainer = useTemplateRef("mapContainer")

onMounted(() => {
    if (!mapContainer.value) return

    const map = L.map(
        mapContainer.value, 
        { 
            zoomControl: false 
        }
    ).setView([41.1579, -8.6291], 11)

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    {
        attribution: "OpenStreetMap | CARTO"
    }
    ).addTo(map)

})
</script>

<style scoped>
.map {
    height: 15rem;
    width: 100%;
    border-radius: 0.5rem;
}

fieldset{
    padding: 1rem;
    overflow: hidden;
}
legend {
    font-size: 1rem;
    font-weight: normal;

    img {
        width: 1.5rem;
        vertical-align: middle;
        border-radius: 0.2rem;
    }
}
</style>