# Firebase Asynchronous Document Access Error

This repository demonstrates a common error when working with Firebase's asynchronous operations and provides a solution.

The issue arises when attempting to access properties of a Firestore document snapshot before the asynchronous `getDoc()` operation completes.  This leads to undefined values and potential errors.

The `bug.js` file shows the problematic code, while `bugSolution.js` presents a corrected version using promises or async/await for proper asynchronous handling.

## How to reproduce:

1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project (replace placeholders in the code with your actual config).
4. Run `bug.js` to observe the error. 
5. Run `bugSolution.js` to see the corrected implementation.