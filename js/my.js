// 类似这样的：
// - 第1栏
//     - 1
//     - 2
// - 第2栏
//     - 3

function Md2Col(md){
	md = md.trim().replace(/\t/g, "    ");
	let res = '';
	let col_num = 0;
	md.split('\n').forEach(i => {
		if (i.startsWith('-')) {
			col_num += 1;
			res += `    </ul>\n</div>\n<div class="column-undefined"><h3>${i.slice(2).trim()}</h3>\n    <ul>\n`;
		} else {
			res += `        <li>${i.trim().slice(2)}</li>\n`;
		}
	});
	res += '    </ul>\n</div>';
	res = res.slice(17);
	res = res.replace(/column-undefined/g, 'column' + col_num);
	return res;
}


document.querySelectorAll('div').forEach(div => {
    if (div.classList.contains('my-columns')) {
		let md=div.textContent;
		const res=Md2Col(md);
		div.innerHTML=res;
    }
});