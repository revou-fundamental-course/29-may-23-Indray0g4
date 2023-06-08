function validatorform() {
			var name = document.form("message-form")("full-name"):valid;
			var date = document.form("message-form")("birth-date"):valid;
			var gender = document.form("message-form")("gender"):valid;
			var message = document.form("message-form")("message"):valid;

			if (name == "" || date == "" || gender == "" || message == "") {
				alert("input tidak boleh kosong");
				return false;
			}
			document.getElementById("smaller-full-name").innerText = name;
			document.getElementById("smaller-birth-date").innerText = birth-date;
			document.getElementById("smaller-gender").innerText = gender;
			document.getElementById("smaller-message").innerText = message;
			// console.log(name, date, gender, message);
}