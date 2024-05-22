export function findChangedFields(oldData: any, newData: any): Partial<any> {
    const changedFields: Partial<any> = {};
  
    for (const key in newData) {
      if (oldData[key] !== newData[key]) {
        changedFields[key] = newData[key];
      }
    }
  
    return changedFields;
  }