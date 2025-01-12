# Survey Form Project

This project is a simple survey form that collects user information and preferences. Below are the details of the form and its implementation.

## Features

### Form Elements (`index.html`):

1. **Input Fields**:
   - **Name**: A text input field to collect the user's name.
   - **Email**: A text input field to collect the user's email address.
   - **Age**: A numeric input field to collect the user's age.
2. **Drop-down Selection**:
   - Role: A drop-down menu to select which option best describes the user. Options:
     - Student
     - Job Seeker
     - Professional
3. **Radio Buttons**:
   - Recommendation: Radio buttons to ask if the user would recommend GeekforGeeks to a friend. Options:
     - Yes
     - No
     - Maybe
   - **Note**: A typographical error in the mockup (wording for "friend") has been corrected.
4. **Checkboxes**:
   - **Languages and Frameworks Known**: Multiple checkboxes for users to select the languages and frameworks they are familiar with.
5. **Textarea**:
   - **Comments and Suggestions**: A text area to collect any additional user comments or suggestions.
6. **Submit Button**:
   - A button to submit the form data.

------

### Styles (`styles.css`):

1. **Global Styles**:
   - Using an image editor (GIMP), the exact green color of the form's background and button was extracted. This color was defined globally using a CSS custom property (`--geekgreen-color`) for reuse in various parts of the stylesheet.
2. **Responsive Units**:
   - A mix of `rem` and `px` units is used for styling. After reading documentation on best practices, the plan is to re-factor the CSS in the future to convert all `px` units to `rem` for consistency.

------

### Additional Features

- JavaScript Integration:
  - Once the form is completed, a JavaScript script prints the data entered in the form to the browser console.

------

## Deliverables

1. **GitHub Repository**
2. **GitHub Pages**
