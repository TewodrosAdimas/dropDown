let isDropdownOpen = false;
let selectedOption = 'Select here';

function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    isDropdownOpen = !isDropdownOpen;
    dropdownMenu.style.display = isDropdownOpen ? 'block' : 'none';
    dropdownToggle.innerHTML = isDropdownOpen ? 'Select here ↑' : selectedOption;
}

function selectOption(option) {
    selectedOption = option;
    document.querySelector('.dropdown-toggle').innerHTML = selectedOption;
    
    // Update menu items to show a checkmark next to the selected option
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.innerHTML = item.textContent === option ? `${option} ✓` : item.textContent;
    });
    
    document.querySelector('.dropdown-menu').style.display = 'none';
    isDropdownOpen = false;
}
    