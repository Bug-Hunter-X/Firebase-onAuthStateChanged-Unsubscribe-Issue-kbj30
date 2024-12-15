import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
      } else {
        // User is signed out
      }
    });

    return () => unsubscribe();
  }, []);

  // ... rest of your component

  return (
    // ... JSX
  );
}
export default MyComponent;