function showTab(tabName) {
            // Hide all tab contents
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.remove('active'));
            
            // Remove active class from all tabs
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Show selected tab content
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
document.querySelector(".submit-btn").addEventListener("click", function(e){
    e.preventDefault(); // agar form tidak reload

    let name = document.querySelector('input[placeholder="Your Name"]').value;
    let email = document.querySelector('input[placeholder="Your Email"]').value;
    let message = document.querySelector('textarea[placeholder="Your Message"]').value;

    // nomor WhatsApp kamu
    let nomor = "6285865803449";

    let url = "https://wa.me/" + nomor + "?text="
        + "Nama: " + name + "%0A"
        + "Email: " + email + "%0A"
        + "Pesan: " + message;

    window.open(url, "_blank");
});