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
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const currentSelectedItem = Array.from(dropdownItems).find(item => item.textContent.includes('✓'));

    // If the clicked option already has a checkmark
    if (currentSelectedItem && currentSelectedItem.textContent.includes(option + ' ✓')) {
        selectedOption = 'Select here'; // Reset selectedOption to 'Select here'

        // Remove the checkmark from the currently selected item
        currentSelectedItem.innerHTML = option; // Remove '✓'
    } else {
        // Remove checkmark from previously selected item
        dropdownItems.forEach(item => {
            if (item.textContent.includes('✓')) {
                item.innerHTML = item.textContent.replace(' ✓', ''); // Remove the checkmark from the previous item
            }
        });

        // Set the current option as selected
        selectedOption = option;

        // Add checkmark to the current selection
        dropdownItems.forEach(item => {
            item.innerHTML = item.textContent === option ? `${option} ✓` : item.textContent; // Add checkmark to current selection
        });
    }

    //dropdown toggle text
    document.querySelector('.dropdown-toggle').innerHTML = selectedOption;
    document.querySelector('.dropdown-menu').style.display = 'none'; // Hide the dropdown menu
    isDropdownOpen = false; // Close the dropdown
}
