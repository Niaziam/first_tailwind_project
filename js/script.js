function darkMode(){
	const HTML_tag = document.getElementById('htmlTag');
	const sun_icon = document.getElementById('sun_icon');
	const moon_icon = document.getElementById('moon_icon');

	HTML_tag.classList.toggle('dark');
	sun_icon.classList.toggle('hidden');
	moon_icon.classList.toggle('hidden');
}