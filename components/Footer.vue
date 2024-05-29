<template>
	<footer class="footer">
		<div class="footer-content container">
			<div class="footer-content-row-1">
				<div class="footer-content-row-1-col-1 footer-content-row-1-col">

					<h3>Контакты</h3>

					<p>8 800 100 4 207 <br>
						sochi@skypark.ru</p>
					
					<p>г. Сочи, с. Казачий брод, <br>
						ул. Краснофлотская, 54а</p> 
				
					<p>ООО «Скайпарк», ИНН 2317052629, <br>
						юридический адрес: 354392, г. Сочи, <br>
						Красная Поляна, ул. Мичурина, дом 1</p>
					
					<p>Онлайн оплата услуг на нашем сайте <br>
						производится только российскими <br>
						банковскими картами через сервис <br>
						платежного шлюза Сбербанка.</p>
					
				</div>
				<div class="footer-content-row-1-col-2 footer-content-row-1-col">

					<h3>График работы ресторана</h3>

					<p>Ежедневно с 12:00 до 20:00</p>
					<p>Бронирование столов 
						restoran@skypark.ru</p>
						
						<p>+7(862)243-20-20</p>
					<p>Организация мероприятий <br>
						event@skypark.ru</p> 

					<p>Для посещения ресторана <br>
						в часы работы Скайпарка <br>	
						требуется приобретение <br>
						входного билета в парк</p>
				</div>
				<div class="footer-content-row-1-col-3 footer-content-row-1-col">
					
					<h3>График работы парка</h3>

					<h4>Ежедневно с 10:00 до 18:30*</h4>	
					
					<p>* для вошедших до закрытия кассы <br>
						прогулка по мосту доступна до 19:15 </p>

					<h4>График работы аттракционов **</h4>	
					
					<p>Ежедневно с 10:30 до 18:45</p>

					<p>** последняя регистрация на 
						маршруты веревочного парка в 17:45</p>

					<h4>Для посещения аттракционов <br>
						требуется приобретение входного <br>
						билета в парк</h4>
				</div>
				<div class="footer-content-row-1-col-4 footer-content-row-1-col">

					<h3>Внимание</h3>

					<p>Call-центр работает с 9:00 до 20:00</p>

					<p>Доступность аттракционов <br> 
						проверяйте в разделе Развлечения, <br>
						количество мест ограничено, <br>
						рекомендуем приобретать заранее</p>

					<p>Только онлайн-бронирование и <br>
						покупка билета минимум за день <br>
						гарантирует посещение аттракциона</p>
					
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'footer-component'
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poetsen+One&display=swap');
.footer {
	background-color: #181818;
	&-content {
		display: grid;
		grid-template-rows: 1fr;
		&-row-1 {
			padding: 50px 0;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-column-gap: 25px;
			&-col {
				padding: 10px;
				
				color: #D3D3D3;
				
				p {
					margin-bottom: 21px;
					font-size: 14px;
					line-height: 1.89em;
					
				}
				h3 {
					font-weight: 700;
					line-height: 1.89em;
					font-family: BodyGrotesqueFit, "San Francisco", sans-serif;
					margin-bottom: 25px;
				}
				h4 {
					font-size: 14px;
					line-height: 1.89em;	
				}
			}
			&-col-1 {
			}
			&-col-2 {
			}
			&-col-3 {
			}
			&-col-4 {
			}
		}
	}
}

</style>
