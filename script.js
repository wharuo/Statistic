document.addEventListener('DOMContentLoaded', () => {
    const currentProfessionsCtx = document.getElementById('currentProfessionsChart').getContext('2d');
    const futureJobsCtx = document.getElementById('futureJobsChart').getContext('2d');

    const currentProfessionsData = {
        labels: ['Data Science', 'Cybersecurity', 'AI & ML', 'Cloud Computing', 'Software Development'],
        datasets: [{
            label: 'Current Recommended Professions',
            data: [85, 75, 90, 80, 70],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const futureJobsData = {
        labels: ['AI Specialist', 'Data Scientist', 'Cybersecurity Analyst', 'Cloud Engineer', 'Full Stack Developer'],
        datasets: [{
            label: 'Jobs in 3 Years',
            data: [95, 85, 80, 75, 70],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    };

    new Chart(currentProfessionsCtx, {
        type: 'bar',
        data: currentProfessionsData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(futureJobsCtx, {
        type: 'bar',
        data: futureJobsData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
