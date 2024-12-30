# MyNotebook - React Application

## Overview

This project is a feature-rich Rich Text Editor built with React and TipTap. It is designed to provide an intuitive and efficient text editing experience with customizable functionalities such as bold, italic, underline, text alignment, font size, emoji insertion, image addition, and more. The editor also supports saving content to local storage for persistence.

## Features

- **Text Styling**: Toggle bold, italic, underline, and highlight text.
- **Text Alignment**: Align text to left, center, or right.
- **Font Size Adjustment**: Change the font size dynamically.
- **Emoji Insertion**: Insert emojis directly into the content.
- **Image Addition**: Add images to the editor by providing a URL.
- **Save Notes**: Save content locally using the browser's local storage.
- **Custom Extensions**: Leverages TipTap extensions to enhance functionality.

## Project Structure

### Key File: `Editor.jsx`
The `Editor.jsx` file serves as the core of this project and includes the following features:

- **Extensions Used**:
  - `StarterKit`: Basic setup for TipTap.
  - `HighlightExtension`: Custom extension for highlighting text.
  - `EmojiExtension`: Custom extension for emoji insertion.
  - `FontSizeExtension`: Custom extension for adjusting font size.
  - `ImageExtension`: Custom extension for adding images.
  - `UnderlineExtension`: Extension for underlining text.
  - `TextAlign`: Extension for text alignment.

- **Toolbar Functionalities**:
  - Buttons for text formatting (bold, italic, underline, highlight).
  - Text alignment controls (left, center, right).
  - Dropdown to select font size.
  - Emoji insertion buttons.
  - Image insertion via URL prompt.
  - Save button to store content in local storage.

- **State Management**:
  - The editor's content is initialized from local storage.
  - Dynamic state updates for saving messages.

- **Validation**:
  - Ensures valid image URLs before insertion.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/hxbeeb11/MyNotebook.git
   cd MyNotebook
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` to view the application.

## Usage Instructions

1. **Text Formatting**:
   - Use the toolbar buttons to apply bold, italic, underline, or highlight styles.

2. **Text Alignment**:
   - Align text using the left, center, and right alignment buttons.

3. **Font Size**:
   - Adjust font size using the dropdown menu in the toolbar.

4. **Insert Emojis**:
   - Click on emoji buttons to insert emojis into the editor.

5. **Add Images**:
   - Click the image button, provide a valid image URL, and insert it into the content.

6. **Save Notes**:
   - Click the save button to store the current editor content in local storage.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **TipTap**: Rich text editor framework with extension capabilities.
- **Lucide React**: Icons for toolbar functionalities.
- **CSS Modules**: Scoped and modular styling.

