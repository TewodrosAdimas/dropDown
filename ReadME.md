# Dropdown Menu Example

This project demonstrates a custom dropdown menu built with HTML, CSS, and JavaScript. The dropdown menu allows users to select options from a list and displays their selection. It also updates dynamically to show which item has been chosen with a checkmark symbol (`✓`).

## Features

- **Toggle Dropdown**: Click to open and close the dropdown menu.
- **Symbol Updates**:
  - When open, the dropdown header shows an "up" symbol (`↑`).
  - When closed, it shows the "down" symbol (`↓`).
  - The selected option shows a checkmark symbol (`✓`).
- **Deselect Option**: Selecting an already chosen item clears the selection, returning the header to its default "Select here" text.

## Project Structure

```
.
├── index.html       # Main HTML file
├── styles.css       # CSS file for styling
└── script.js        # JavaScript file for interactivity
```

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/dropdown-menu-example.git
   cd dropdown-menu-example
   ```

2. **Open in Browser**:
   Open the `index.html` file in your preferred web browser to see the dropdown menu in action.

## Files

- **index.html**: Contains the HTML structure for the dropdown.
- **styles.css**: Provides the styling for the dropdown and menu items.
- **script.js**: Handles the dropdown logic, including opening/closing the menu, selecting, and deselecting options.

## Usage

1. **Open/Close Dropdown**: Click the dropdown header labeled "Select here" to open or close the dropdown menu.
2. **Select an Option**: Click any option to select it. The dropdown header updates to show the chosen option.
3. **Deselect an Option**: Click an already selected option to deselect it, resetting the dropdown header to "Select here."


## License

This project is licensed under the MIT License.