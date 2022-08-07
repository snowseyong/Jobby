function getProfile() {
    document.getElementById('right-content-review').style.display='none';
    
    document.getElementById('review').style.color='black';
    document.getElementById('right-content-profile').style.display='block';
    document.getElementById('profile').style.color='#1769ff';
   
  }
  function getReview() {
    document.getElementById('right-content-profile').style.display='none';
    document.getElementById('profile').style.color='black';
    document.getElementById('right-content-review').style.display='block';
    
    document.getElementById('review').style.color='#1769ff';
   
  }
