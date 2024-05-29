<template>
	<div class="app">
		<Header />
		<div class="content">
			<div class="container">
				<Breadcrumbs />
			</div>
			<nuxt />
		</div>

		<Footer />
		<div class="copyright">
			<div class="copyright-row container">
				
				<span
					>COPYRIGHT © 2024 СКАЙПАРК</span
				>
				<h3>skypark!</h3>
				<div class="copyright-row-social" >
					<img src="./../static/images/tg.svg" alt="tg">
					<img src="./../static/images/vk.svg" alt="vk">
					<img src="./../static/images/ig.svg" alt="ig">
					<img src="./../static/images/fb.svg" alt="fb">
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
export default Vue.extend({
	components: { Header, Footer, Breadcrumbs }
})
</script>
<style lang="scss">
.content {
	margin-top: 200px;
}
.copyright {
	background-color: #181818;
	width: 100%;
	height: 90px;
	border-top: 1px solid white;
	&-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		height: 100%;
		span {
			font-size: 14px;
			line-height: 115%;
			color: #ffffff;
			align-self: center;
		}
		h3 {
			align-self: center;
			justify-self: center;
			color: rgb(255, 255, 255);
			text-transform: lowercase;
			font-size: 35px;
			font-weight: 400;
			font-family: "Poetsen One", sans-serif;
		}
		&-social {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			align-self: center;
			justify-self: end;
			grid-column-gap: 10px;
			img {
				color: white;
				align-self: center;
				justify-self: center;
			}
		}
	}
}
</style>
