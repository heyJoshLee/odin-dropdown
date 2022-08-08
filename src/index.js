import Dropdown from './dropdown';

const dropdown = Dropdown('nav ul', {
  heading: 'Menu',
});

dropdown.addListItem('home', 'http://google.com');
dropdown.addListItem('contact', 'http://facebook.com');
dropdown.addListItem('about', 'http://yahoo.com');
