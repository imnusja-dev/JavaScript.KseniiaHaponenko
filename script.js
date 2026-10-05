function showTable(id) {
   document.getElementById('students').style.display = 'none';
    document.getElementById('teachers').style.display = 'none';
   document.getElementById('subjects').style.display = 'none';

    document.getElementById(id).style.display = 'block';
}