"use client";
import React from "react";
import { ToastContext } from "../../../../components/ToastProvider";
import { useRouter } from "next/navigation";

function ContactPage() {
	const { createToast } = React.useContext(ToastContext);
	const router = useRouter();

	const handleSubmit = (event) => {
		event.preventDefault();
		createToast("Thanks for your feedback!", "success");
		router.push("/exercises/02-flash-messages");
	};

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input id="name" required={true} />

				<label htmlFor="message">Message:</label>
				<textarea id="message" />

				<button>Submit</button>
			</form>
		</main>
	);
}

export default ContactPage;
