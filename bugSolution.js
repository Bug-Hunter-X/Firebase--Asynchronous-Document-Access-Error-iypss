The solution involves using promises or async/await to ensure the data is loaded before accessing the snapshot properties.  Here's an example using async/await:

```javascript
import { getFirestore, doc, getDoc } from 'firebase/firestore';

async function getDocumentData(docRef) {
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document!');
      return null; // or throw an error
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    return null; // or handle the error appropriately
  }
}

// ... rest of your code using getDocumentData
```
This version ensures that the code waits for the `getDoc()` promise to resolve before accessing the `data()` method. Error handling is also included for robustness.