export function generateUniqueId(): string {
    const timestamp: number = Date.now(); // Get the current timestamp in milliseconds
    const randomString: string = Math.random().toString(36).substr(2, 5); // Generate a random string
    return `${timestamp}-${randomString}`; // Combine the timestamp and random string to create the ID
  }
  