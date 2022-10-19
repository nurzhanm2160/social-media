export const updateObjectInArray = (items, itemId, objPropName, newObjProps) =>
    items.map((item) => (item[itemId] === objPropName ? { ...item, ...newObjProps } : { ...item }));
