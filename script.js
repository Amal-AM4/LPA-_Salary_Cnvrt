document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('converterForm');
    const resultContainer = document.getElementById('resultContainer');
    const celebrationContainer = document.getElementById('celebration');
    const submitButton = document.querySelector('button[type="submit"]');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const lpaInput = parseFloat(document.getElementById('lpaInput').value);
      const annualSalary = lpaInput * 100000; // Convert LPA to annual salary (1 Lakh = 100,000)
      const monthlySalary = annualSalary / 12; // Calculate one-month salary
  
      resultContainer.innerHTML = `Annual Salary: ₹${annualSalary.toFixed(2)}<br>One-Month Salary: ₹${monthlySalary.toFixed(2)}`;
      resultContainer.classList.add('celebrate');
      celebrationContainer.classList.remove('hidden');
      
      // Trigger celebration animation
      celebrationContainer.classList.add('celebrate');
      setTimeout(() => {
        celebrationContainer.classList.remove('celebrate');
      }, 2000); // Remove celebrate class after 2 seconds
    });
  
    // Hide celebration container initially
    celebrationContainer.classList.add('hidden');
  });
  