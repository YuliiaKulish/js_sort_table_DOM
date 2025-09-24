'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(table.querySelectorAll('tbody tr'));

      rows.sort((a, b) => {
        const cellA = a.children[index].textContent.trim();
        const cellB = b.children[index].textContent.trim();

        const cleanA = cellA.replace(/[^0-9.-]+/g, '');
        const cleanB = cellB.replace(/[^0-9.-]+/g, '');

        const valA = isNaN(cleanA) ? cleanA : parseFloat(cleanA);
        const valB = isNaN(cleanB) ? cleanB : parseFloat(cleanB);

        return valA > valB ? 1 : valA < valB ? -1 : 0;
      });

      const tbody = table.querySelector('tbody');

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
