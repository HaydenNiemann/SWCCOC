// Load Events
function loadEvents() {
    fetch('data/events.json')
      .then(response => response.json())
      .then(events => {
        const eventsContainer = document.getElementById('events-list');
        let html = '';
  
        events.forEach(event => {
          html += `
            <li class="list-group-item">
              <h5 class="fw-bold">${event.title}</h5>
              <p>${event.date} | ${event.description}</p>
            </li>
          `;
        });
  
        eventsContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading events:', error);
        document.getElementById('events-list').innerHTML = '<p>Unable to load events at this time.</p>';
      });
  }
  
  // Load Sermons
  function loadSermons() {
    fetch('data/sermons.json')
      .then(response => response.json())
      .then(sermons => {
        const sermonsContainer = document.getElementById('sermons-list');
        let html = '';
  
        sermons.forEach(sermon => {
          html += `
            <div class="col-md-4 mb-4">
              <div class="card shadow p-3 h-100 text-center">
                <h5 class="card-title">${sermon.title}</h5>
                <p class="card-text">Speaker: ${sermon.speaker}</p>
                <button class="btn btn-outline-primary mt-auto" onclick="openSermonModal('${sermon.link}')">Watch Sermon</button>
              </div>
            </div>
          `;
        });
  
        sermonsContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading sermons:', error);
        document.getElementById('sermons-list').innerHTML = '<p>Unable to load sermons at this time.</p>';
      });
  }
  
  // Open Sermon Modal
  function openSermonModal(link) {
    const videoFrame = document.getElementById('sermonVideo');
    videoFrame.src = link;
  
    const modal = new bootstrap.Modal(document.getElementById('sermonModal'));
    modal.show();
  }
  
  // Clear Video When Modal Closes
  document.addEventListener('DOMContentLoaded', () => {
    const sermonModal = document.getElementById('sermonModal');
  
    if (sermonModal) {
      sermonModal.addEventListener('hidden.bs.modal', () => {
        const videoFrame = document.getElementById('sermonVideo');
        if (videoFrame) {
          videoFrame.src = '';
        }
      });
    }
  });
  