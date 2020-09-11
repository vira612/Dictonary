
const historyTrackerComponent = {
    template:`<div>
                <div class="col" v-for="element in searchHistory">
                    <ul>
                        <li>
                            <small>
                            
                            <button type="button" class="btn btn-outline-dark btn-sm border-top border-right border-left decoration" @click="findMean(element.word)"> {{ element.word }} </button>  @ {{ element.time }}
                            
                            </small>
                        </li>
                    </ul>
                </div>
            </div>`,       
    props:['searchHistory','findMean']


};

const Dictionary = new Vue({
    el:'#Dictionary',
    data:{
        appName: 'Dictionary',
        numberOfSearch:0,
        word:'',
        options:[],
        imageLink:{pic:"logo.jpg",pic1:"dic.jpg"},
        selected:'',
        final:{mean:[],type:''},
        searchHistory:[]     
    },
    methods:{
        findWord: async function(){
            // console.log(this.word)
            const word_list = await axios.get(`http://localhost:8888/api/find`, {params: {'word':this.word}})
            this.options=word_list.data
        },
        findMean: async function(selected){
            this.selected=selected
            // console.log(this.selected)
            const meaning = await axios.get(`http://localhost:8888/api/meaning`,{params: {'selected':this.selec}})
            this.final.mean=meaning.data[0].shortdef
            this.final.type=meaning.data[0].fl
            // console.log(this.final.type)

        },
        history :function(){
            const date = new Date().toLocaleString('en-US');
            
            let flag=false       
            if(this.searchHistory.length!=0){
                this.searchHistory.forEach(element => {
                    if(element.word==this.selected){
                        flag=true
                    }
                    console.log(element.word)
                });
            }
            if(flag===false){
                this.searchHistory.push({word:this.selected ,time:date})
                this.numberOfSearch++
            }
           
        },
        findMore:function(){
            this.history()
            this.selected=''
            this.final.mean=[]
            this.final.type=''
            this.word=''
            this.options=[]
        }
    },
    components:{
        'history-component': historyTrackerComponent,
    }
})