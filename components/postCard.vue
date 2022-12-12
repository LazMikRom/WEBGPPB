<template>
	<div style="background:#dbdbdb;">
		<h1>ID: {{ id }}</h1>
		<h2>name: {{ name }}</h2>
		<p>age: {{ age }}</p>
		<p>age: {{ databirth }}</p>
		<button @click="ONCLICK">Удалить</button>
	</div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps({
	id: Number,
	name: String,
	age: Number,
})
const emit = defineEmits(['click:button'])

const databirth = ref(props.age + 2000)

function ONCLICK () {
	emit('click:button')
}
// TODO Почитать
const counter = computed(() => databirth.value + 1)
</script>
