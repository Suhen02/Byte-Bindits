// Replace with your actual data
const industryNeedsData = [100, 80, 70, 60, 50];
const academicCurriculumData = [50, 60, 70, 80, 90];
const potentialSolutions = [
    "Industry-academia collaborations for curriculum development",
    "Internships and apprenticeships to bridge the practical gap",
    "Skill development programs and workshops",
    "Research projects aligned with industry needs",
    "Faculty development focusing on industry trends"
];

// Create charts using Chart.js
const ctxIndustryNeeds = document.getElementById('industry-needs-chart').getContext('2d');
const industryNeedsChart = new Chart(ctxIndustryNeeds, {
    type: 'bar',
    data: {
        labels: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'],
        datasets: [{
            label: 'Industry Needs',
            data: industryNeedsData,
            backgroundColor: 'blue'
        }]
    }
});

const ctxAcademicCurriculum = document.getElementById('academic-curriculum-chart').getContext('2d');
const academicCurriculumChart = new Chart(ctxAcademicCurriculum, {
    type: 'bar',
    data: {
        labels: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'],
        datasets: [{
            label: 'Academic Curriculum',
            data: academicCurriculumData,
            backgroundColor: 'orange'
        }]
    }
});

const ctxGap = document.getElementById('gap-chart').getContext('2d');
const gapChart = new Chart(ctxGap, {
    type: 'bar',
    data: {
        labels: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'],
        datasets: [{
            label: 'Gap',
            data: industryNeedsData.map((need, index) => need - academicCurriculumData[index]),
            backgroundColor: 'red'
        }]
    }
});

// Populate solutions list
const solutionsList = document.getElementById('solutions-list');
potentialSolutions.forEach(solution => {
    const listItem = document.createElement('li');
    listItem.textContent = solution;
    solutionsList.appendChild(listItem);
});