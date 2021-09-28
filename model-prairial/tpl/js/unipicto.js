// Ameliore l'accessibilite des pictogrammes vu qu'OTX ne prend pas en compte ARIA
document.addEventListener('DOMContentLoaded', function(event) {                                                               
	const pictos = document.getElementsByClassName("unipicto");
	for (const picto of pictos) {
		picto.setAttribute("aria-hidden", "true");
	}
});
