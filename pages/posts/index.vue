<template>
	<div style="display:flex; flex-direction: column; gap: 10px;">
		<pre>{{posts}}</pre>
		<div style="font-size: 22px;color:#101010">{{loading}}</div>
		<div
			style="width: 50px;height: 50px;"
			:style="{background: loading ? 'red' : 'green'}"
		/>
		<post-card
			v-for="post in posts"
			:key="post.id"
			:id="post.id"
			:name="post.name"
			:age="post.age"
			@click:button="alertMsg"
		/>
	</div>
</template>


<script setup lang="ts">
import {randInt} from "@/composables/rand";
import {onMounted, onUpdated, ref} from "vue";

const loading = ref(true)
const posts = ref([])

$fetch('/api/posts').then((res) => {
	loading.value = false
	posts.value = res
})
function alertMsg() {
	alert("Это карточка удалена")
}
</script>
