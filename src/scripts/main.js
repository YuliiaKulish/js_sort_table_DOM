'use strict';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const headers = table.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const tbody = table.querySelector('tbody');
      const rows = Array.from(tbody.rows);

      rows.sort((a, b) => {
        const rawA = a.children[index].textContent.trim();
        const rawB = b.children[index].textContent.trim();

        const cleanA = rawA.replace(/[^0-9.-]+/g, '');
        const cleanB = rawB.replace(/[^0-9.-]+/g, '');

        const numA =
          cleanA !== '' && Number.isFinite(Number(cleanA))
            ? Number(cleanA)
            : null;
        const numB =
          cleanB !== '' && Number.isFinite(Number(cleanB))
            ? Number(cleanB)
            : null;

        if (numA !== null && numB !== null) {
          return numA - numB;
        }

        const normA = rawA.toLowerCase();
        const normB = rawB.toLowerCase();

        return normA.localeCompare(normB, undefined, { sensitivity: 'base' });
      });

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
