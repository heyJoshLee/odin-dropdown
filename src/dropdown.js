const Dropdown = (querySelector, dropDownOptions) => {
  const parent = document.querySelector(querySelector);
  const listItems = [];
  const { heading } = dropDownOptions;
  const element = document.createElement('div');

  const menu = document.createElement('div');
  menu.classList.add('dropdown-js-menu');
  menu.style.display = 'none';

  const list = document.createElement('ul');
  list.classList.add('dropdown-js-menu-list');

  element.addEventListener('mouseover', () => {
    menu.style.display = 'block';
  });

  element.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
  });

  const addListItem = (content, link) => {
    listItems.push({
      content,
      link,
    });
    render();
  };

  const setElementCss = (cssString) => {
    console.log(element);
    element.style.cssText = cssString;
  };

  const setMenuCss = (cssString) => {
    menu.style.cssText = cssString;
  };

  const setListCss = (cssString) => {
    list.style.cssText = cssString;
  };

  const setListItemCss = (cssString) => {
    const listItemsNodeList = document.querySelectorAll('.dropdown-js-menu-list-list-item');
    console.log(listItemsNodeList);
    listItemsNodeList.forEach((nodeItem) => {
      nodeItem.style.cssText = cssString;
    });
  };

  const renderListItems = (listParent) => {
    listItems.forEach((listItem) => {
      const linkElement = document.createElement('a');
      linkElement.href = listItem.link;
      const listElement = document.createElement('li');
      listElement.classList.add('dropdown-js-menu-list-list-item');
      listElement.textContent = listItem.content;
      linkElement.appendChild(listElement);
      listParent.appendChild(linkElement);
    });
  };

  const render = () => {
    list.textContent = '';
    element.classList.add('dropdown-js');
    element.textContent = heading;
    element.appendChild(menu);
    menu.appendChild(list);
    renderListItems(list);
    parent.appendChild(element);
  };

  render();

  return {
    addListItem,
    setMenuCss,
    setListCss,
    setElementCss,
    setListItemCss,
  };
};

export default Dropdown;
