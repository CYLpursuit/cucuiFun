<template>
    <section class="home">
        <!-- 头部部分 start -->
        <div class="header">
            <!-- 轮播图部分 start -->
            <div id="container">
				<div id="list">
					<swiper ref="mySwiper" :options="swiperOption">
						<!--  v-for="(item,index) in bgImg" :key=index -->
						<swiper-slide>
							<img style="width:wWidth" src="../assets/images/headerdefault.jpg" alt="" no-repeat>
						</swiper-slide>
						<!-- <swiper-slide>
							<img style="width:wWidth" src="../assets/images/header9.jpg" alt="" no-repeat>
						</swiper-slide> -->
						<swiper-slide>
							<img style="width:wWidth" src="../assets/images/header2.jpg" alt="" no-repeat>
						</swiper-slide>
						<swiper-slide>
							<img style="width:wWidth" src="../assets/images/header3.jpg" alt="" no-repeat>
						</swiper-slide>
						<!-- <swiper-slide>
							<img style="width:wWidth" src="../assets/images/header4.jpg" alt="" no-repeat>
						</swiper-slide> -->
						<swiper-slide>
							<img style="width:wWidth" src="../assets/images/header5.jpg" alt="" no-repeat>
						</swiper-slide>
				</swiper>
				</div>
                <!-- <div id="list" style="left:-1366px;">
                    <img src="../assets/images/headerdefault.jpg" alt="" no-repeat>
                    <img src="../assets/images/header9.jpg" alt="" no-repeat>
                    <img src="../assets/images/header2.jpg" alt="" no-repeat>
                    <img src="../assets/images/header3.jpg" alt="" no-repeat>
                    <img src="../assets/images/header4.jpg" alt="" no-repeat>
                    <img src="../assets/images/header5.jpg" alt="" no-repeat>
                    <img src="../assets/images/header9.jpg" alt="" no-repeat>
                    <img src="../assets/images/headerdefault.jpg" alt="" no-repeat>
                </div> -->
            </div>
            <!-- 轮播图部分 end -->
            <div class="w">
                <div class="top">
                    <div class="lang fl">
                        <a href="#">默认</a><span>/</span><a href="#">主题色</a>
                    </div>
                    <div class="dialoge fl">
                        <ul>
                            <li><a href="#">前端工作</a></li>
                            <li><a href="#">情绪生活</a></li>
                            <li><a href="#">未来式</a></li>
                            <li><a href="#">联系我</a></li>
                        </ul>
                    </div>
                    <div class="wiki fr">
                        <ul>
                            <li><a href="#"><i></i></a></li>
                            <li><a href="#"><i></i></a></li>
                            <li><a href="#"><i></i></a></li>
                        </ul>
                    </div>
                    </div>
                    <div class="bottom">
                        <div v-show="currentIndex>0" @click="slideBg('prev')" id="prev" class="arrow1"><i></i></div>
                        <div class="info">
                            <i></i>
                                <div class="info-t">
                                    崔崔/紫鼠
                                </div>
								<div class="info-c">
                                    再小的个体都有自己的品牌
                                </div>
                                <div class="info-b">
                                    你不在时，我和自己在一起
                                </div>
                        </div>
                        <div v-show="currentIndex<3" @click="slideBg('next')" id="next" class="arrow2"><i></i></div>
                    </div>
            </div>
        </div>
        <!-- 头部部分 end -->
        <!-- 表单部分 start -->
        <!-- <div class="w form">
            <input type="email" name="email" placeholder="E-mail" class="email fl">
            <input type="password" name="psd" placeholder="Password" class="psd fl">
            <button value="submit" class="submit fl">LET'S START</button>
        </div> -->
        <!-- 表单部分 end -->
            <!-- 介绍部分 start -->
            <div class="next">
                <div class="circle">
                    <i></i>
                </div>
                <div class="text-t">近期内容</div><br/>
                <div class="text-b">potential. Help us help them thrive.</div>
            </div>
            <div class="expand">
                <ul>
                    <li>
                        <div class="icon">
                                    <i></i>
                                </div>
                                <div class="text-t">文字</div><br/>
                                <div class="text-b">72% of the students <br/>attended on scholarship</div>
                    </li>
                    <li>
                        <div class="icon">
                                    <i></i>
                                </div>
                                <div class="text-t">摄图</div><br/>
                                <div class="text-b">20% of its student body is<br/>currently under scholarship</div>
                    </li>
                    <li>
                        <div class="icon">
                                    <i></i>
                                </div>
                                <div class="text-t">技术</div><br/>
                                <div class="text-b">{{rspData[0].author}}<br/>{{rspData[0].createtime}}<br/>{{rspData[0].content}}</div>
                    </li>
                    <li>
                        <div class="icon">
                                    <i></i>
                                </div>
                                <div class="text-t">伙伴</div><br/>
                                <div class="text-b">Anatolia Collage has always <br/>relied on donations</div>
                    </li>
                </ul>
            </div>
        <!-- 介绍部分 end -->
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	name:'home',
	data(){
		return{
			currentIndex:1,
			bgImg:[
				{url:'../assets/images/headerdefault.jpg'},
				{url:'../assets/images/header9.jpg'},
				{url:'../assets/images/header2.jpg'},
				{url:'../assets/images/header3.jpg'},
				{url:'../assets/images/header4.jpg'},
				{url:'../assets/images/header5.jpg'},
			],
			swiperOption: {
				speed: 3000,//切换速度
				// autoplay: {
				// 	delay: 2000,
				// },
				loop: true,
			},
			rspData:[],
		}
	},
	components:{
		swiper,
		swiperSlide,
	},
	created(){
		this.wWidth = $(window).width();
		this.getData();
	},
	computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
    },
	methods:{
		getData(){
			this.axios.get('/api/blog/list')
			.then((cbData)=>{
				const rspCode = cbData.data.rspCode;
				if(rspCode === 0){
					this.rspData = cbData.data.data;
				}
			})
			.catch((err)=>{
				console.log(err)
			})
		},
		slideBg(flag){
			switch(flag){
				case 'prev':this.swiper.slideTo(--this.currentIndex, 3000, false);break;
				case 'next':this.swiper.slideTo(++this.currentIndex, 3000, false);break;
			}
		}
	}
}
</script>

<style scoped>
/* 抽离css文件的话 需要其他 */
/*公共部分*/
blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul{
	margin:0;
	padding: 0;
}
a{
	text-decoration: none;
	color:#fff;
}
li{
	list-style: none;
}
.fl{
	float:left;
}
.fr{
	float: right;
}
input,button{
	border:0;
	outline: none;
}
/*使用精灵图*/
@font-face {
  font-family: 'MyFont';
  src:  url('../assets/fonts/icomoon.eot?f7up8l');
  src:  url('../assets/fonts/icomoon.eot?f7up8l#iefix') format('embedded-opentype'),
    	url('../assets/fonts/icomoon.ttf?f7up8l') format('truetype'),
    	url('../assets/fonts/icomoon.woff?f7up8l') format('woff'),
    	url('../assets/fonts/icomoon.svg?f7up8l#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}
/*头部部分*/
.header{
	width: 100%;
	height: 636px;
	margin:0 auto;
	/*background:url("../images/headerdefault.jpg") no-repeat;*/
}
.header .w{
	width: 1130px;
	height: 100%;
	margin:0 auto;
	position: 	relative;
}
.header .top{
	height: 30px;
	line-height: 30px;
	padding-top:60px;
	color:rgb(187,188,193);
}
/*轮播图部分*/
#container{
	width: 100%;
	height: 636px;
	margin:0 auto;
	position: absolute;
	overflow: hidden;
}
#container #list{
	width: 100%;
	height: 636px;
	z-index: 1;
}
#container #list >>>.swiper-wrapper{
	display:flex;
	flex-direction: row;
}
#container #list img{
	height: auto;
}
/*头部上部分*/
.top span{
	display:inline-block;
	padding:0 20px;
	font-size: 20px;
}
.dialoge ul{
	width: 450px;
	margin-left: 278px;
}
.dialoge li{
	float: left;
	text-align: center;
	margin-right:32px;
}
.wiki ul{
	width: 135px;
}
.wiki li{
	float:left;
	padding-left:25px;
}
.wiki i{
	font-family:'MyFont';
	font-size:20px;
	font-weight: normal;
	font-style: normal;
	color:#fff;
}
/*头部下部分*/
.bottom{
	margin-top:150px;
	height: 314px;
	position: relative;
}
.arrow1{
	width: 70px;
	height: 70px;
	border:2px solid rgb(255,255,255,0.6);
	border-radius: 50%;
	position:absolute;
	top: 100px;
	left: 8px;
	z-index: 2;
}
.arrow1:hover,.arrow2:hover{
	border:2px solid rgb(255,255,255,.2);
}
.arrow2{
	width: 70px;
	height: 70px;
	border:2px solid rgb(255,255,255,0.6);
	border-radius: 50%;
	position:absolute;
	top: 100px;
	right: 8px;
	z-index: 2;
}
.bottom  i{
	font-family:'MyFont';
	font-size:50px;
	font-weight: normal;
	font-style: normal;
	color: #fff;
	text-align: center;
	line-height: 70px;
	padding-left:8px;
}
.info{
	width: 540px;
	height: 100%;
	margin:0 auto;
}
.info i{
	display:block;
	margin:0 auto;
	text-align: 30px;
	color:#fff;
}
.info .info-t{
	text-align: center;
	font-size: 50px;
	color:#fff;
	margin-bottom:6px;
}
.info .info-c{
	text-align: center;
	font-size: 25px;
	color:rgb(187,188,193);
	margin-bottom: 6px;
}
.info .info-b{
	text-align: center;
	font-size: 20px;
	color:rgb(187,188,193,.8);
}
/*中间表单部分*/
.form{
	height: 50px;
	background-color: rgba(28,107,121);
	padding:70px 0;
}
.form .email{
	width: 289px;
	height: 53px;
	margin-left:120px;
	border-radius: 5px;
	padding-left: 20px;
	background-color:rgb(187,188,193) ;
}
.form .psd{
	width: 606px;
	height: 53px;
	margin-left:17px;
	margin-right: 29px;
	border-radius: 5px;
	padding-left: 20px;
	background-color:rgb(187,188,193);
}
.form .submit{
	width: 190px;
	height: 53px;
	border-radius: 25px;
	background-color:rgba(46,113,242,0.6) ;
}
/*额外部分*/
.next{
	width: 450px;
	height: 245px;
	margin:0 auto;
	padding-top: 20px;
	box-sizing: border-box;
}
.next .circle{
	height: 80px;
	width: 80px;
	border:3px solid rgb(41,110,242);
	border-radius:80px; 
	margin:0 auto;
	position: relative;
}
.next i{
	position: absolute;
	left: 10px;
	top: 8px;
	font-family: 'MyFont';
	font-weight: normal;
	font-style: normal;
	font-size: 60px;
	color: rgb(41,110,242);
}
.next .text-t{
	margin-top: 15px;
	font-size:50px;
	text-align: center;
	font-weight: 550;
	color: rgb(59,61,64);
}
.next .text-b{
	font-size:20px;
	text-align: center;
	color: rgb(72,79,84);
	font-family: arial;
}
.expand ul{
	height: 200px;
	width: 100%;
}
.expand ul{
	box-sizing: border-box;
	padding: 30px 100px;
}
.expand ul li{
	float:left;
	height: 100%;
	width: 25%;
}
.expand ul li i{
	font-family: 'MyFont';
	font-weight: normal;
	font-style:normal;
	font-size: 25px;
	color: rgb(59,61,64);
	margin-left: 130px;
}
.expand li .text-t{
	margin-top: 15px;
	font-size:18px;
	text-align: center;
	font-weight: 550;
	color: rgb(59,61,64);
}
.expand li .text-b{
	font-size:16px;
	text-align: center;
	color: rgb(72,79,84);
	font-family: arial;
}
</style>