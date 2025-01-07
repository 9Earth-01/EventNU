//
// // 
//STARPUSH
function toggleStar(element) {
  console.log("Star button clicked");  // ตรวจสอบใน Console ว่าฟังก์ชันทำงาน
  element.classList.toggle("active");
}


//
// // 
//RUNCOMMENT
function submitComment() {
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();

  if (commentText) {
    const commentDisplay = document.getElementById('comments-display');
    const newComment = document.createElement('div');
    newComment.classList.add('comment-item');

    newComment.innerHTML = `<strong>You:</strong><p>${commentText}</p>`;

    commentDisplay.appendChild(newComment);
    commentInput.value = ''; // Clear the input after submission
  }
}
