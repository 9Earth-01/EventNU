//
// // 
//STARPUSH
function toggleStar(element) {
  console.log("Star button clicked");  // ตรวจสอบใน Console ว่าฟังก์ชันทำงาน
  element.classList.toggle("active");
}

//
// // 
//BELL
function toggleBell(element) {
  element.classList.toggle('active'); // เพิ่ม/ลบคลาส 'active'
  if (element.classList.contains('active')) {
      alert('Notifications turned on!');
  } else {
      alert('Notifications turned off!');
  }
}

function toggleStar(element) {
  element.classList.toggle('active'); // เพิ่ม/ลบคลาส 'active'
  if (element.classList.contains('active')) {
      alert('Added to favorites!');
  } else {
      alert('Removed from favorites!');
  }
}

function openModal() {
  document.getElementById('editModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('editModal').style.display = 'none';
}

function saveEdit() {
  // Get input values
  const title = document.getElementById('eventTitle').value;
  const date = document.getElementById('eventDate').value;
  const description = document.getElementById('eventDescription').value;
  const location = document.getElementById('eventLocation').value;

  // For now, log the data (you can update the event dynamically here)
  console.log({ title, date, description, location });

  // Close the modal
  closeModal();

  // Optionally show a confirmation
  alert('Event updated successfully!');
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
