import { db } from "./firebase.js";
import { IBrotherApi, Brother, BrotherId } from "../BrotherApi.js";
import { collection, addDoc, getDocs, deleteDoc, setDoc, doc } from "firebase/firestore";

export class BrotherApi implements IBrotherApi {
  // This refers to the item's folder in the Firestore
  private brothersCollection = collection(db, "brothers");

  /**
   * Adds an brother into the brothers collection in Firestore.
   * The brother is turned into a document
   * 
   * @param newBrother The newly created brother to be created into a document
   * @returns The document's ID
   */
  async addBrother(newBrother: Brother) {
      const data: any = {
        ...newBrother,
      };

      delete data.id; // remove the id so Firestore creates one for us
      const result = await addDoc(this.brothersCollection, data); // Using SDK to add document

      // console.log('added', newItem, 'with id ', result.id);
      return result.id; // return the ID that document is referred by
  }

  /**
   * Gets a array of every single brother in the brothers collection in Firestore
   *
   * @returns the array of Brothers
   */
  async getBrothersList(): Promise<Brother[]> {
      // TODO: add where clause so that only authenticated users can access
      let querySnapshot = await getDocs(this.brothersCollection);    
      
      console.log('Total Brothers', querySnapshot.size);

      // append the id of the document to the data from Firestore to create full Item
      let list = querySnapshot.docs.map(
        (doc) =>
        ({
            id: doc.id,
            ...doc.data(),
          } as Brother)
      );

      return list
  }

  /**
   * Replaces an brother with the new information
   * 
   * @param brother the updated Brother that will replace existing brother
   * @returns A Promise resolved once the data has been successfully written to the backend
   */
  async updateBrother (brother: Brother) {
    // make sure they provide a valid ID
    if (brother.id == null || typeof brother.id != 'string')
      throw Error('Invalid Brother ID: ' + brother.id);

    // adjust data so that it doesn't incude id as one of its field
    const data: Partial<typeof brother> = { ...brother };
    delete data.id;
    
    return setDoc(doc(this.brothersCollection, brother.id), data, { merge: true });
  }
  
  /**
   * Deletes a document from the brothers collection in Firestore
   * 
   * @param brotherId The ID of the brother
   * @returns A Promise resolved once the document has been successfully deleted from the backend
   */
  async removeBrother(brotherId: BrotherId) {
    // make sure they provide a valid ID
    if (brotherId == null || typeof brotherId !== 'string')
      throw new Error('Brother ID must be string when using Firestore');

    return deleteDoc(doc(this.brothersCollection, brotherId)); 
  }
}