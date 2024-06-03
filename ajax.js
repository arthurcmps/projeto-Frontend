let links = document.querySelectorAll("[ajax-link]")

let mainContent = document.querySelector("[mainContent]")
let contentContainer = document.querySelector("[contentContainer]")
// console.log(mainContent)

links.forEach((link) => {
	const path = link.getAttribute("href")
	link.addEventListener("click", (e) => {
        e.preventDefault()
		try {
			fetch(path)
				.then((res) => res.text())
				.then((html) => (contentContainer.innerHTML = html))
		} catch (err) {
			console.error({ Error: err })
		}
	})
})
