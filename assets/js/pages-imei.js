$('#formCheckIMEI').submit(function (e) {
	e.preventDefault();
	var channel_me, event_me, message;
	var dt = new Date(), ht, mt, st;

	ht = dt.getHours();
	mt = set(dt.getMinutes());
	st = set(dt.getSeconds());
   
	channel_me = 'public-check-imei'
	event_me = 'public-' + ht + mt + st + Math.floor(Math.random() * 10);
	//event_me = 'public-001';
   
	console.log('this my channel :'+channel_me);
	console.log('this me :'+event_me);
	
	var app_key = '743996c65a2c3b504344';
	var pusher = new Pusher(app_key, {
		cluster: 'ap1',
		forceTLS: false
	});

	channel = pusher.subscribe(channel_me);
	channel.bind(event_me, function(obj) {
		var data = JSON.parse(obj);
		console.log(data);
		if (data.status == "failed") {
			   $.notify({
				  message: data.message
			   }, {
				  type: "danger",
				  timer: 1000,
				  placement: {
					 from: 'top',
					 align: 'align-right'
				  }
			   });
		   } else {
			   $.notify({
				  message: data.message
			   }, {
				  type: "info",
				  timer: 1000,
				  placement: {
					 from: 'top',
					 align: 'align-right'
				  }
			});
		}
		channel.unbind(event_me);
	});	
	var imei = document.getElementById('imei').value;
	window.open("https://rizkyanugerah.000webhostapp.com/imei.php?imei=" + imei + "&channel=" + channel_me + "&event=" + event_me + "", "_blank");
});
