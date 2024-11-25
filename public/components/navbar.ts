function create() {
	const navbar = document.createElement("nav")
	navbar.className = "navbar"
	navbar.innerHTML = `
		<a href="/home" class="home">BOOKCADIA</a>
		<div class="links">
			<a href="" target="_blank" rel="noopener noreferrer">Library</a>
			<a href="" target="_blank" rel="noopener noreferrer">Catalog</a>
			<a href="" target="_blank" rel="noopener noreferrer">Cart</a>
			<a href="" target="_blank" rel="noopener noreferrer">Profile</a>
		</div>
	`
	return navbar
}

export default create
