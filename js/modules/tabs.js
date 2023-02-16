function tabs (tabsSelector, tabsContentSelector, tabsParents, activeClass ) {
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParents);

    function hideTabContent() {
    tabsContent.forEach(item => {
    item.style.display = "none";
    });

    tabs.forEach(item => {
    item.classList.remove(activeClass);
    });
    }

    function showTabConbtent(i = 0) { 
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabConbtent();

    tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains(tabsSelector.slice(1))) {
    tabs.forEach((item, i) => {
        if(target == item) {
        hideTabContent();
        showTabConbtent(i);
        }
    });
    }
    }); 

}

export default tabs;