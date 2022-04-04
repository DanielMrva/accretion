module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  openNav: () => {
    document.getElementById('sideNav').style.marginLeft = '0';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('expandArrow').style.marginLeft = "250px"
  },
  closeNav: () => {
    document.getElementById('sideNav').style.marginLeft = '-250px';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('expandArrow').style.marginLeft = "0"

  }
  
};
