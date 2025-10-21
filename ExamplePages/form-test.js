document.getElementById('subscriptionForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Stop default form submit
  
  const form = e.target;
  const email = document.getElementById('email');
  const plan = document.getElementById('plan');
  
  let valid = true;

  // Validate email
  if (!email.value || !email.checkValidity()) {
    email.setCustomValidity("Please enter a valid email address.");
    email.reportValidity();
    valid = false;
  } else {
    email.setCustomValidity("");
  }

  // Validate plan
  if (!plan.value) {
    plan.setCustomValidity("Please select a subscription plan.");
    plan.reportValidity();
    valid = false;
  } else {
    plan.setCustomValidity("");
  }

  // Stop if invalid
  if (!valid) return;

  // Prepare form data
  const fd = new FormData(form);
  const status = document.createElement('p');
  status.id = 'status';
  status.textContent = '⏳ Sending...';
  form.appendChild(status);

  try {
    // Send data with fetch
    console.log("🔹 Sending data:", Object.fromEntries(fd.entries())); // log what will be sent
    const res = await fetch(form.action, {
      method: form.method || 'POST',
      body: fd
    });

    // Log status and raw response
    console.log("🔹 Response status:", res.status, res.statusText);

    if (!res.ok) throw new Error('Server error');

    // Try to read JSON (if available)
    const data = await res.json();
    console.log("✅ Server response:", data);

    // Success message
    status.textContent = '✅ Subscription successful! Thank you.';
    status.style.color = 'green';
  } catch (err) {
    // Error message
    console.error("❌ Fetch error:", err);
    status.textContent = '❌ Could not send. Please try again later.';
    status.style.color = 'red';
  }
});
