(function(d){
	var nub = window.location.search.split('=')[1].slice(0,1);
	var type = window.location.search.split('=')[1].slice(1,3);
	var body = document.body;
	var sx = '';
	if (type == 'sh') {
		sx = aData.sh
	}
	if (type == 'xy') {
		sx = aData.xy
	}
	body.appendChild(createCont(aData,sx,nub));
	var li = d.querySelectorAll('ul li');
	li[0].onclick = function(){
		window.location.assign('list.html?1')
	}
	li[1].onclick = function(){
		window.location.assign('list.html?2')
	}
	if (type == 'sh') {
		for (var i = 0; i < li.length; i++) {
			li[i].className='';
		}
		li[0].className = 'focus'
	}
	if (type == 'xy') {
		for (var i = 0; i < li.length; i++) {
			li[i].className='';
		}
		li[1].className = 'focus'
	}
	
	function createCont(data,sx,nub){
		var wrap = d.createElement('div');
		wrap.id = 'wrap'
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
		wrap.appendChild(left);
		if(sx){
			var right = d.createElement('div');
			right.className = 'right';
			var title = d.createElement('div');
			title.className = 'title';
			var img = d.createElement('img');
			img.src = sx.img;
			title.appendChild(img);
			right.appendChild(title)
			if (sx.text[nub]) {
				var info = d.createElement('div');
				info.className = 'info content';
				var h2 = d.createElement('h2');
				h2.innerHTML = sx.text[nub].zw;
				info.appendChild(h2);
				var div = d.createElement('div');
				var s1 = d.createElement('span');
				s1.className = 'l';
				s1.innerHTML = '招聘公司:'+sx.text[nub].zw;
				div.appendChild(s1)
				var s2 = d.createElement('span');
				s2.innerHTML = '公司性质:'+sx.text[nub].xz;
				div.appendChild(s2);
				var s3 = d.createElement('span');
				s3.className = 'l';
				s3.innerHTML = '职位性质:'+sx.text[nub].gz;
				div.appendChild(s3);
				var s4 = d.createElement('span');
				s4.innerHTML = '工作地点:'+sx.text[nub].dd;
				div.appendChild(s4);
				var s5 = d.createElement('span');
				s5.className = 'l';
				s5.innerHTML = '工作经验:'+sx.text[nub].jy;
				div.appendChild(s5);
				var s6 = d.createElement('span');
				s6.innerHTML = '学历要求:'+sx.text[nub].xl;
				div.appendChild(s6);
				var s7 = d.createElement('span');
				s7.className = 'l';
				s7.innerHTML = '招聘人数:'+sx.text[nub].rs+'人';
				div.appendChild(s7);
				var s8 = d.createElement('span');
				s8.innerHTML = '薪资待遇:'+sx.text[nub].dy;
				div.appendChild(s8);
				var s9 = d.createElement('span');
				s9.className = 'l';
				s9.innerHTML = '发布日期:'+sx.text[nub].sj[0]+'-'+sx.text[nub].sj[1]+'-'+sx.text[nub].sj[2]+'人';
				div.appendChild(s9);
				var s10 = d.createElement('span');
				s10.innerHTML = '招聘类型:'+sx.text[nub].lx;
				div.appendChild(s10);

				info.appendChild(div)
				var clear = d.createElement('div');
				clear.className = 'clear'
				info.appendChild(clear);
				if (sx.text[nub].info) {
					for(var s in sx.text[nub].info){
						if (sx.text[nub].info[s].t) {
							var dl = d.createElement('dl');
							var dt = d.createElement('dt');
							dt.innerHTML = sx.text[nub].info[s].t;
							dl.appendChild(dt)
							for (var i = 0; i < sx.text[nub].info[s].l.length; i++) {
								var dd = d.createElement('dd');
								dd.innerHTML = sx.text[nub].info[s].l[i]
								dl.appendChild(dd)
							}
						}
						if (info.children.length >3) {
							info.insertBefore(dl, info.children[info.children.length-1])
						} else {
							info.appendChild(dl)
						}
					}
					var p = d.createElement('p');
					p.innerHTML = '有意者请投递简历至 liuyajuan@fulan.com.cn'
					info.appendChild(p)
				}
				right.appendChild(info)
			}
			wrap.appendChild(right);
			var clear2 = d.createElement('div');
			clear2.className = 'clear';
			wrap.appendChild(clear2)
		}
		return wrap;
	}
})(document)