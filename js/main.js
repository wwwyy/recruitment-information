(function(d){
	var body = d.body;
	var n = 0 ;
	var max = 3;

	if(window.location.search=='?1'||window.location.search == ''){
		body.appendChild(create(aData,aData.sh));
		var li = d.querySelectorAll('ul li');
		li[0].className = 'focus';
		li[1].className = '';
		btn(aData.sh);
		content(aData.sh)
		var cont2 = 'sh';
	}

	if(window.location.search=='?2'){
		body.appendChild(create(aData,aData.xy));
		var li = d.querySelectorAll('ul li');
		li[0].className = '';
		li[1].className = 'focus';
		btn(aData.xy)
		content(aData.xy)
		var cont2 = 'xy';
	}

	if (window.location.hash) {
		window.location.hash ='#111'
	}

	d.onclick = function(ev){
		if(ev.target.tagName = 'A'&&ev.target.parentNode.tagName =='LI'||ev.target.parentNode.tagName=='SPAN'&&ev.target.href=="javascript:;"&& ev.target.children.length == 0){
			for (var i = 0; i < ev.target.parentNode.parentNode.children.length; i++) {
				ev.target.parentNode.parentNode.children[i].className = '';
			}
			ev.target.parentNode.className = 'focus' ;
			if (ev.target.parentNode.tagName=='SPAN'&&ev.target.href=="javascript:;"&&ev.target.children.length == 0) {
				window.location.hash = '#'+ev.target.innerHTML+''+ev.target.innerHTML+''+ev.target.innerHTML;
				n = parseInt(ev.target.innerHTML)-1;
			}
		}
		ev.cancelBubble = true;
	}
	
	function btn(data){
		var next = d.querySelector('.next a');
		var prev = d.querySelector('.prev a')
		var btn = d.querySelectorAll('.pages p span');
		
		next.onclick = function(){
			for (var i = 0; i < btn.length; i++) {
				btn[i].className = '';
			}
			n++;
			if (n>Math.ceil(data.text.length/3)-1) {
				n = Math.ceil(data.text.length/3)-1;
			}
			btn[n].className = 'focus';
			window.location.hash = '#'+(n+1)+(n+1)+(n+1);
		}
		prev.onclick = function(){
			for (var i = 0; i < btn.length; i++) {
				btn[i].className = '';
			}
			n--;
			if (n<0) {
				n = 0;
			}
			btn[n].className = 'focus';
			window.location.hash = '#'+(n+1)+(n+1)+(n+1);
		}
	}
	function content(data1){
		var conBtn1 = d.querySelectorAll('.zp a');
		var conBtn2 = d.querySelectorAll('.yq a')
		for (var i = 0; i < conBtn1.length; i++) {
			conBtn1[i].index = i;
			conBtn2[i].index = i;
			 conBtn1[i].onclick = conBtn2[i].onclick =function(){
				var cont1 = n*3+this.index;
				var myurl="content.html"+"?"+"cont1="+cont1+cont2; 
				window.location.assign(myurl);
			}
		}
	}
	function create(data,sx){
		var wrap = d.createElement('div');
		wrap.id = 'wrap';
			if (data.list) {
				var left = d.createElement('div');
				left.className = 'left';
				var h2 = d.createElement('h2');
				h2.innerHTML = '招贤纳士';
				var ul = d.createElement('ul');
				for(var h in data.list){
					if (data.list[h].lx) {
						var li = d.createElement('li')
						if (data.list[h].lx=='sh') {
							li.className = 'focus'
						} 
						var a = d.createElement('a');
						a.href = 'javascript:;';
						a.className = 'active';
						if (data.list[h].text) {
							a.innerHTML = data.list[h].text;
						}
						li.appendChild(a);
						ul.appendChild(li)
					}
				}
				left.appendChild(h2);
				left.appendChild(ul);
			}
			wrap.appendChild(left)
			var active = wrap.querySelectorAll('.active');
			createH()
			active[0].onclick = function(){
				window.location.search = 1;
			}
			active[1].onclick = function(){
				window.location.search = 2;
			}
			function createH(){
				if (sx) {
				var right = d.createElement('div');
				right.className = 'right';
				var title = d.createElement('div');
				title.className = 'title';
					if (sx.img) {
						var img = d.createElement('img');
						img.src = sx.img;
						title.appendChild(img)
						right.appendChild(title)
					}
					if (sx.text) {
						var info = d.createElement('div');
						info.className = 'info'
						right.appendChild(createInfo(0,3))
						window.onhashchange = function(){
							right.removeChild(right.children[1])
							info.innerHTML = '';
							var next = d.querySelector('.next a');
							var prev = d.querySelector('.prev a')
							var btn = d.querySelectorAll('.pages p span');
							for (var i = 0; i < btn.length; i++) {
								btn[i].className = '';
							}
							if (window.location.hash =='#111'||window.location.hash =='') {
								right.insertBefore(createInfo(0,3), right.children[right.children.length-1])
								btn[0].className = 'focus';
								n = 0;
								content(sx)
							}
							if (window.location.hash =='#222') {
								right.insertBefore(createInfo(3,6), right.children[right.children.length-1])
								btn[1].className = 'focus';
								n = 1;
								content(sx)
							}
							if (window.location.hash =='#333') {
								right.insertBefore(createInfo(6,7), right.children[right.children.length-1])
								btn[2].className = 'focus'
								n = 2;
								content(sx)
							}
						}
						function createInfo(n,max) {
							for(var x = n; x < max; x++){
							var zp = d.createElement('p');
							zp.className = 'zp';
							if (sx.text[x].zw) {
								var sp = d.createElement('span');
								var a = d.createElement('a');
								a.innerHTML = '★ 职位需求：'+sx.text[x].zw;
								sp.appendChild(a)
								zp.appendChild(sp)
							}
							if (sx.text[x].rs) {
								var sp = d.createElement('span');
								sp.innerHTML = '需求人数：'+sx.text[x].rs+'名';
								zp.appendChild(sp)
							}
							if (sx.text[x].sj) {
								var sp = d.createElement('span');
								sp.className = 'date';
								sp.innerHTML = sx.text[x].sj[0]+'年'+sx.text[x].sj[1]+'月'+sx.text[x].sj[2]+'日';
								zp.appendChild(sp)
							}
							if(sx.text[x].info){
								info.appendChild(zp)
								var yq = d.createElement('p');
								yq.className = 'yq';
									if (sx.text[x].info[0].l) {
										for (var i = 0; i < sx.text[x].info[0].l.length; i++) {
											yq.innerHTML +=sx.text[x].info[0].l[i];
										}
										if (yq.innerHTML.length > 100) {
											yq.innerHTML = yq.innerHTML.substring(0,100)+'...[';
										}
									}
									var a = d.createElement('a');
									a.href ="javascript:;";
									a.innerHTML = '查看详情';
									yq.appendChild(a);
									yq.innerHTML+="]"
									info.appendChild(yq)
								}
							}
							return info;
						}
						var page = d.createElement('div');
						page.className = 'pages';
						page.innerHTML = '<span class="prev"><a href="javascript:;"><img src="img/pre.gif"></a></span><span class="next"><a href="javascript:;"><img src="img/next.gif"></a></span>';
						var p = d.createElement('p');
						for (var i = 0; i < Math.ceil(sx.text.length/3); i++) {
							var span = d.createElement('span');
							var a = d.createElement('a');
							a.href="javascript:;";
							a.innerHTML = i+1;
							span.appendChild(a);
							p.appendChild(span)
						}
						p.children[0].className = 'focus'
						page.appendChild(p)
						right.appendChild(page);
					}
					wrap.appendChild(right);
					var clear = d.createElement('div');
					clear.className = 'clear';
					wrap.appendChild(clear)
				}
			}
			return wrap;
	}
})(document)