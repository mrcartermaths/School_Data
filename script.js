const trackerData = {
  'Year 7': {
    assessments: ['Baseline', 'Autumn Test', 'Spring Test'],
    pupils: [
      { name: 'A. Patel', scores: [62, 71, 75], grade: '5' },
      { name: 'L. Wright', scores: [48, 58, 60], grade: '4' },
      { name: 'M. Khan', scores: [75, 79, 82], grade: '6' }
    ]
  },
  'Year 8': {
    assessments: ['Baseline', 'Autumn Test', 'Spring Test'],
    pupils: [
      { name: 'J. Thomas', scores: [70, 72, 78], grade: '6' },
      { name: 'R. Ahmed', scores: [55, 64, 66], grade: '5' },
      { name: 'C. Smith', scores: [44, 51, 56], grade: '4' }
    ]
  },
  'Year 9': {
    assessments: ['Baseline', 'Autumn Test', 'Spring Test'],
    pupils: [
      { name: 'E. Jones', scores: [68, 70, 72], grade: '5' },
      { name: 'B. Green', scores: [80, 84, 86], grade: '7' },
      { name: 'S. Ali', scores: [58, 62, 65], grade: '5' }
    ]
  }
};

const yearSelect = document.getElementById('year-group');
const resultsSection = document.getElementById('results');
const resultsTitle = document.getElementById('results-title');
const tableHead = document.querySelector('#results-table thead');
const tableBody = document.querySelector('#results-table tbody');

Object.keys(trackerData).forEach((year) => {
  const opt = document.createElement('option');
  opt.value = year;
  opt.textContent = year;
  yearSelect.appendChild(opt);
});

yearSelect.addEventListener('change', (e) => {
  const selectedYear = e.target.value;

  if (!selectedYear) {
    resultsSection.classList.add('hidden');
    return;
  }

  const { assessments, pupils } = trackerData[selectedYear];
  resultsTitle.textContent = `${selectedYear} Assessments`;

  tableHead.innerHTML = '';
  tableBody.innerHTML = '';

  const headerRow = document.createElement('tr');
  ['Student', ...assessments, 'Current Grade'].forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);

  pupils.forEach((pupil) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = pupil.name;
    row.appendChild(nameCell);

    pupil.scores.forEach((score) => {
      const scoreCell = document.createElement('td');
      scoreCell.textContent = score;
      row.appendChild(scoreCell);
    });

    const gradeCell = document.createElement('td');
    gradeCell.textContent = pupil.grade;
    row.appendChild(gradeCell);

    tableBody.appendChild(row);
  });

  resultsSection.classList.remove('hidden');
});
