<template>
	<header class="header">
		<div class="header-content container">
			<div class="header-content-row-1" >
				<div class="header-content-row-1-col-1" >
					<div class="header-content-row-1-col-1-row-1" >
						Сочи
						<i class="el-icon-location"></i>
					</div>
					<div class="header-content-row-1-col-1-row-2" >
						Пн-Вс 10:00-18:30
					</div>
				</div>
				<div class="header-content-row-1-col-2" >
					<nuxt-link to="/">
						<h2>Skypark!</h2>
						<img src="./../static/images/hackett.svg" alt="hackett">
					</nuxt-link>
					
				</div>
				<div class="header-content-row-1-col-3" >
					<div class="header-content-row-1-col-3-row-1" >
						<i class="el-icon-s-custom"></i>
					</div>
					<div class="header-content-row-1-col-3-row-2" >
						8 800 100 4 207
					</div>
				</div>
			</div>
			<div class="header-content-row-2" >
				<nav class="header-content-row-2-menu" >
					<nuxt-link class="header-content-row-2-menu__item" to="/about">О парке</nuxt-link>
					<nuxt-link class="header-content-row-2-menu__item" to="/events">Развлечения</nuxt-link>
					<nuxt-link class="header-content-row-2-menu__item" to="/news">Новости и события</nuxt-link>
					<nuxt-link class="header-content-row-2-menu__item" to="/visitors">Посетитлям</nuxt-link>
					<nuxt-link class="header-content-row-2-menu__item" to="/news">Как доехать</nuxt-link>
				</nav>
			</div>
		</div>
	</header>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'header-component',
	methods: {
	}
})
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
.header {
	background-color: rgb(248, 248, 248);
	position: absolute;
	z-index: 100;
	top: 0;
	height: 200px;
	width: 100%;

	&-content {
		height: 100%;
		display: grid;
		grid-template-rows: auto 65px;

		&-row-1 {
			align-self: center;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			&-col-1 {
				justify-self: start;
				display: grid;
				grid-template-rows: 1fr 1fr;
				&-row-1 {
					align-self: end;
					i {
						font-size: 25px;
					}
				}
				&-row-2 {
					
				}

			}
			&-col-2 {
				a {
					display: grid;
					grid-template-columns: 1fr 1fr;
					h2 {
						padding: 0 20px;
						color: black;
						align-self: center;
						text-transform: lowercase;
						font-size: 35px;
						font-weight: 400;
						font-family: "Poetsen One", sans-serif;
						border-right: 1px solid rgba(0, 0, 0, 0.2);
					}
					img {
						padding: 0 20px;
						align-self: end;
					}
					
				}
				
				justify-self: center;
				align-self: center;
				
			}
			&-col-3 {
				justify-self: end;
				display: grid;
				grid-template-rows: 1fr 1fr;
				&-row-1 {
					font-size: 25px;
					align-self: end;
					justify-self: end;
				}
				&-row-2 {
					
				}
			}
		}
		&-row-2 {
			&-menu {
				height: 100%;
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
				grid-column-gap: 50px;
				&__item {
					cursor: pointer;
					padding: 20px 0;
					transition: all .3s linear;
					border-bottom: 2px solid rgba(0, 0, 0, 0);
					display: grid;
					text-align: center;
					color: black;
					&:hover {
						border-bottom: 2px solid black;
					}
						
					
				}
				
			}
		}
	}
}
@media (max-width: 1357px) {
	.header {
		&-content {
			&-row-2 {
				&-menu {
					grid-column-gap: 25px;
					
				}
			}
		}
	}
}
</style>
