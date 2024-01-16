import { db } from './firebase';
import { ref, set, push, get, child, update, remove } from 'firebase/database';
import { Brother, BrotherId, IBrotherApi } from '../BrotherApi';

export class BrotherApi implements IBrotherApi {
    async getBrothersList(): Promise<Brother[]> {
        const snapshot = await get(child(ref(db), 'sheets/Users/'));
        return snapshot.exists() ? Object.values(snapshot.val()) : [];
    }

    async getActiveBrothersList(): Promise<Brother[]> {
        const allBrothers = await this.getBrothersList();
        return allBrothers.filter(brother => brother.active);
    }
    
    async getInactiveBrothersList(): Promise<Brother[]> {
      const allBrothers = await this.getBrothersList();
      return allBrothers.filter(brother => !brother.active).reverse();
  }

    async addBrother(newBrother: Brother): Promise<BrotherId> {
        const newRef = push(child(ref(db), 'Users'));
        await set(newRef, newBrother);
        return newRef.key as BrotherId;
    }

    async updateBrother(brother: Brother): Promise<void> {
        if (!brother.id) {
            throw new Error("Brother ID is required for updates");
        }
        await update(ref(db, 'Users/' + brother.id), brother);
    }

    async removeBrother(brotherId: BrotherId): Promise<void> {
        await remove(ref(db, 'Users/' + brotherId));
    }
}
