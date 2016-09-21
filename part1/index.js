new Vue({
	el: '#apps',
	data: {
		msg: 'Hi vue!',
		todos:[
			{task:'Started'},
			{task:'finished'}
		]
	},
	methods:{
		dofor:function(){
			this.msg = 'Dont try again!'
		}
	}
})