function Fn_submit() {
   $('#formCheckIMEI').submit(function (e) {
      e.preventDefault();
      $.ajax({
         url: "https://long-term-groom.000webhostapp.com/cek.php",
         type: "POST",
         dataType: "JSON",
         data: $(this).serialize(),
         success: function (data) {

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

         },
         error: function (jqXHR, textStatus, errorThrown) {
            $.notify({
               message: "Mohon maaf sepertinya ada masalah dengan server."
            }, {
               type: "info",
               timer: 1000,
               placement: {
                  from: 'top',
                  align: 'align-right'
               }
            });
         }
      });

   });

}
