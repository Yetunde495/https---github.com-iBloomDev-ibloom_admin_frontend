function extractFilename(input: string): string {
    // Split the input string by '/'
    const parts = input.split('/');
    
    // Extract the last part which should be the filename
    const filenameWithExtension = parts[parts.length - 1];

    // If there is an extension, return only the filename without extension
    const filename = filenameWithExtension.split('.')[0];

    return filename;
}

export default extractFilename;