<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="step==1" @click="step++">Next</li>
            <li v-if="step==2" @click="publish">upload</li>
        </ul>
    </div>
    <Thecontainer :postdata="postdata" :step="step" :img="img" @write="myData = $event"/>
    
    <button @click="more">더보기</button>
    
    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
    <!-- <div v-if="step == 0">내용0</div>
                <div v-if="step == 1">내용1</div>
                <div v-if="step == 2">내용2</div>
                <button @click="step =0">버튼0</button>
                <button @click="step =1">버튼1</button>
                <button @click="step =2">버튼2</button>
                <div style="margin-top:500px;"></div> -->
</template>

<script>
import Thecontainer from './components/container.vue'
import postdata from './assets/postdata.js'
import axios from 'axios'
axios.post()

export default {
    name: 'App',
    components: {
        Thecontainer,
    },
    data() {
        return {
            postdata: postdata,
            themore: 0,
            step: 0,
            img: '',
            myData : '',
        }
    },
    methods: {
        more() {
            axios.get(`https://codingapple1.github.io/vue/more${this.themore}.json`).then(
                result => {
                    console.log(result.data)
                    this.postdata.push(result.data);
                    this.themore++;
                }
            )
        },
        upload(e) {
            let a = e.target.files;
            console.log(a)
            let url = URL.createObjectURL(a[0]);
            console.log(url);
            this.img = url;
            this.step++;
        },
        // this.게시물에 내가 만든 데이터 밀어넣기
        publish() {
            var myData = {
                name: "Kim Hyun",
                userImage: "https://placeimg.com/100/100/arch",
                postImage: this.img,
                likes: 36,
                date: "May 15",
                liked: false,
                content: this.myData,
                filter: "perpetua"
            };
            this.postdata.unshift(myData);
            this.step = 0;
        }
    },
}
</script>

<style>
body {
    margin: 0;
}

ul {
    padding: 5px;
    list-style-type: none;
}

.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}

.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}

.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}

.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
}

.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}

.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}

.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}

.inputfile {
    display: none;
}

.input-plus {
    cursor: pointer;
}

#app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
