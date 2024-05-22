interface DynamicFields {
    [key: string]: any;
}

/**
 * Converts a string in screaming snake case format to capital word format.
 * 
 * @param {string} str - The input string in screaming snake case format.
 * @returns {string} - The formatted string in capital word format.
 * 
 * @example
 * const input = "HELLO_WORLD";
 * const output = formatScreaminSnakeCaseToCapitalWord(input);
 * console.log(output); // Output: "Hello World"
 */
export const formatScreamingSnakeCaseToCapitalWord = (str: string) => {
    const parts = str.split('_');

    const formattedParts = parts.map((part) => {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    });

    return formattedParts.join(' ').trim();
}


/**
 * Compares two objects and returns the differences between them.
 * 
 * @param obj1 - The first object to compare.
 * @param obj2 - The second object to compare.
 * @returns An object containing the differences between obj1 and obj2.
 * 
 * @example
 * const obj1 = { name: 'John', age: 30 };
 * const obj2 = { name: 'John', age: 35 };
 * const differences = compareObjects(obj1, obj2);
 * console.log(differences); // Output: { age: 35 }
 */
export const findObjectDifferences = (obj1: DynamicFields, obj2: DynamicFields) => {
    const diff: DynamicFields = {};

    //check diff in state
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            if (obj1[key] !== obj2[key]) {
                diff[key] = obj2[key];
            }
        }
    }

    // No changes detected
    if (Object.keys(diff).length === 0) {
        return null;
    }

    return diff;
}

