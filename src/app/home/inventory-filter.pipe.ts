import { PipeTransform, Pipe } from '@angular/core';
import {Inventory} from '../inventory'



@Pipe({
    name: 'inventoryFilter'
})
export class InventoryFilterPipe implements PipeTransform {
    transform(inventory: Inventory[], searchTerm: string): Inventory[] {
        if (!inventory || !searchTerm) {
            return inventory;
        }

        return inventory.filter(inv =>
            inv.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}