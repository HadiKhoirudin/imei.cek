window.onload = function () {
   digitalclock();
}

function digitalclock() {
	
   var e = document.getElementById('digitalclock'),
   d = new Date(), h, m, s;
   h = d.getHours();
   m = set(d.getMinutes());
   s = set(d.getSeconds());

   e.innerHTML = '<i class="menu-icon tf-icons ti ti-clock"></i>' + h + ':' + m + ':' + s;
   setTimeout('digitalclock()', 1000);
}

function set(e) {
   e = e < 10 ? '0' + e : e;
   return e;
}