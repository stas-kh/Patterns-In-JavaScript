import {JQLoader} from "./lib/JQLoader";

/*
 * For example we have a landing page with ability to leave user's feedback
 * but we aren't sure that every user does it
 * we use native JS to handle all events in our application.
 * For example, we need to use AJAX to work with our backend.
 * And we load JQuery ajax methods only in case when user click send feedback
 * ---------- Lazy initialization ----------
 */

window.addEventListener("load", () => {
	document.querySelector(".send-feedback").addEventListener("click", () => {
		let feedbackNode = document.querySelector(".feedback"),
			feedbackText = feedbackNode.value,
			node = document.createElement("li"),
			textNode = document.createTextNode(feedbackText),
			parent = document.querySelector(".previous-feedbacks");

		JQLoader.getLib(jQ => {
			let root = "./test.php",
				data = {
					url: root,
					method: "POST",
					data: feedbackText,
					dataType: "text",
					success: function (data) {
						alert(data);
					}
				};

			jQ.ajax(data);
		});

		node.appendChild(textNode);
		parent.appendChild(node);
		feedbackNode.value = "";
	});
});