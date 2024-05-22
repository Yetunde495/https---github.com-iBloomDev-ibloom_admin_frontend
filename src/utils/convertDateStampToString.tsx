export default function formatDateToString(timestamp:Date) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  

  // Reusable helper function to format dates
 export const formatDate = (dateString:string) => {
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day} ${month}, ${year}`;
  };
  


  