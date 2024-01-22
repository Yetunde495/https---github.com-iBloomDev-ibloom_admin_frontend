export function truncateText(text:string|any) {
    const words = text.trim().split(' ');
  
    if (words.length > 12) {
      const truncatedText = words.slice(0, 12).join(' ');
      return  (
        <>
            {truncatedText + '...'}<span>See More</span>
             
        </>)
    }
  
    return text;
    
  }

 export function truncateString(inputString:string|any) {
    const maxLength = 350;
  
    if (inputString.length <= maxLength) {
      return inputString;
    }
  
    const truncatedString = inputString.substring(0, maxLength) + '...';
    return truncatedString;
  }
  