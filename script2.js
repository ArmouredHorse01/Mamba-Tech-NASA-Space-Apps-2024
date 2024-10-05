// Get the elements
const videoInput = document.getElementById('videoInput');
const uploadButton = document.getElementById('uploadButton');
const uploadStatus = document.getElementById('uploadStatus');
const backgroundVideo = document.getElementById('background-video');

// Add event listener to the upload button
uploadButton.addEventListener('click', () => {
    const file = videoInput.files[0];

    // Check if a file was selected
    if (file) {
        const fileURL = URL.createObjectURL(file);
        backgroundVideo.src = fileURL; // Set the video source to the uploaded file
        backgroundVideo.load(); // Load the new video
        backgroundVideo.play(); // Play the new video
        
        uploadStatus.textContent = "Video uploaded successfully!";
    } else {
        uploadStatus.textContent = "Please select a video file.";
    }
});
