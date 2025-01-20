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

function saveEdit(event) {
  if (event) event.preventDefault(); // Prevent form submission if called from form

  // Get values from inputs
  const title = document.getElementById('eventTitle').value;
  const description = document.getElementById('eventDescription').value;
  const date = document.getElementById('eventDate').value;
  const time = document.getElementById('eventTime').value;
  const location = document.getElementById('eventLocation').value;
  const status = document.getElementById('eventStatus').value;
  const type = document.getElementById('eventType').value;
  const fee = type === "Paid" ? document.getElementById('eventFee').value : 0;
  const organizerId = document.getElementById('organizerId').value;

  // Log or process the data
  console.log({
      title,
      description,
      date,
      time,
      location,
      status,
      type,
      fee,
      organizerId,
  });

  // Close the modal after saving
  closeModal();

  // Optionally show a confirmation
  alert('Event updated successfully!');
}


function toggleFeeField() {
  const eventType = document.getElementById('eventType').value;
  const feeContainer = document.getElementById('feeContainer');
  if (eventType === "Paid") {
      feeContainer.style.display = "block";
  } else {
      feeContainer.style.display = "none";
  }
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
